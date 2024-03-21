import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { fromEvent, map, debounceTime, distinctUntilChanged, catchError, throwError, take } from 'rxjs';
import { SubSink } from 'subsink';
import { Film_JSONF, ValueTypeViewPost, TypeViewsPost, viewTypeMemory, BASE_rapidapi, BASE_JSONF } from '../../models/shared.interfaces';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() all: boolean | undefined;
  @Input() management: boolean | undefined;
  
  @ViewChild('searchfilmsFiltered') searchfilms!: ElementRef;
  @ViewChild('paginator') paginator!: ElementRef;

  private sub = new SubSink();
  Film_JSONF: Film_JSONF[] = [];
  filmsFiltered: Film_JSONF[] = [];

  loadingBar = false;
  valueType!: ValueTypeViewPost;
  arrayTypeView: TypeViewsPost[] = [{ value: 'column', name: 'Lista', icon: 'view_list' },
  { value: 'wrap', name: 'Griglia', icon: 'grid_view' }];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  get valueTypeModel() {
    return this.valueType;
  }

  set valueTypeModel(v: ValueTypeViewPost) {
    this.valueType = v;
    // trick to reload animation
    this.filmsFiltered = _.cloneDeep(this.Film_JSONF);

    // set to localStorage :)
    localStorage.setItem(viewTypeMemory, this.valueType);

  }

  clear() {
    this.range.reset();

    this.getFilms(0);
  }


  constructor(private sharedServices: SharedService, private breakPointObserver: BreakpointObserver) { }
  ngAfterViewInit(): void {

    fromEvent(this.searchfilms.nativeElement, 'keyup').pipe(
      map((d: any) => {
        if (d.target.value.length > 0) {
          this.loadingBar = true;
          return d.target.value;
        }
        this.loadingBar = false;
        return '';
      }),
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe(text => {
      this.searchOnPost(text);
    });


    this.range.valueChanges.pipe(distinctUntilChanged(), debounceTime(150)).subscribe(d => {
      console.log('rango', d);

      const { start, end } = d;
      if (start && end) {
        // posso cercare rapidamente in forma reattiva !

        const dia: number = start.getDate();

        const mes: number = start.getMonth() + 1;

        const year: number = start.getFullYear();

        this.loadFilmsWithDate(dia, mes, year);



      }
    });






  }

  handlePageEvent(page: any) {

    this.getFilms(page.pageIndex + 1)

  }

  loadFilmsWithDate(day: number, mes: number, year: number) {
    this.loadingBar = true;

    // search only client! 

    this.filmsFiltered = _.cloneDeep(

      this.Film_JSONF.filter(f => {

        if (f.release_date) {

          const regexFilmData = /^(\w{3}), (\d{2})\/(\d{2})\/(\d{4})$/;

          const filmReleaseDate = f.release_date.match(regexFilmData);
          if (filmReleaseDate) {
            const [mes_, dia_, year_] = [filmReleaseDate[2], filmReleaseDate[3], filmReleaseDate[4]]
      

            if ((mes_ == mes.toString()) && (year_ == year.toString())) {
              return f;
            }
          }

        }

        return;
      })

    );


    // this.sharedServices.getFilms(this.baseFilms?.current_page || 1).pipe(distinctUntilChanged(), catchError(err => {

    //   this.loadingBar = false;
    //   return throwError(() => err);
    // })).subscribe(Film_JSONF => {

    //   console.log(Film_JSONF);

    //   this.baseFilms = Film_JSONF;
    //   this.Film_JSONF = Film_JSONF.data;
    //   this.filmsFiltered = Film_JSONF.data;


      

    //   this.loadingBar = false;

    // })






  }


  // only on client
  searchOnPost(text: string) {
    // if (!text) { this.getFilms(0); return; }

    if (!text) { this.filmsFiltered = _.cloneDeep(this.baseFilms?.data || []); return; }





    this.filmsFiltered = _.cloneDeep(

      this.Film_JSONF.filter(film => {

        return film.original_title.toLowerCase().includes(text.toLowerCase());

      })

    );

    this.loadingBar = false;





    // search per api
    // this.sub.add(
    //   this.sharedServices.searchFilms(this.baseFilms?.page || 1, text).pipe(distinctUntilChanged(),
    //     catchError(err => {
    //       this.loadingBar = false;
    //       return throwError(() => err);
    //     })).subscribe(data => {
    //       console.log(data);
    //       this.baseFilms = data;
    //       this.Film_JSONF = data.results;
    //       this.filmsFiltered = data.results;
    //       this.loadingBar = false;
    //     })
    // );


  }

  noMinimunWidth = false;
  baseFilms: /*BASE_rapidapi | undefined*/ BASE_JSONF | undefined;

  private getFilms(page: number) {
    this.sub.add(

      this.sharedServices.getFilms(page || this.baseFilms?.current_page || 0).pipe(debounceTime(50), take(1),
        catchError(err => {
          this.loadingBar = false;
          return throwError(() => err);
        })
      ).subscribe(dataOff => {

        const data = dataOff
        this.baseFilms = data;


        const newObjectsFilms: any[] = data.data.map((objeto, i) => ({
          ...objeto,
          sala: i < 12 ? {numero: i, imax: i < 2 ? Math.floor(Math.random() * 2) + 1 : 0 } : undefined
        }));

        this.Film_JSONF = newObjectsFilms;
        this.filmsFiltered = newObjectsFilms;
        this.loadingBar = false;

      })

    );
  }
  ngOnInit(): void {

    this.loadingBar = true;
    this.valueType = (localStorage.getItem(viewTypeMemory) as ValueTypeViewPost | null) || 'column';
    this.getFilms(0)

    this.breakPointObserver.observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)']).pipe(distinctUntilChanged()).subscribe(observe => {
      this.noMinimunWidth = observe.matches;

      if (this.noMinimunWidth) {

        this.valueTypeModel = 'wrap';

      }
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
