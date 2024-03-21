import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cast, Film_JSONF, Films, SalaType, ValueTypeViewPost } from '../../models/shared.interfaces';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            animate('400ms', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
    ])
],
})
export class ViewItemsComponent {

  constructor(private dialogService: MatDialog) {}

  @Input() films!: Film_JSONF[];
  @Input() view!: ValueTypeViewPost;
  @Input() layoutMobile!: boolean;
  @Input() management: boolean | undefined;
  

  openCast(casts: Cast[] ) {

    this.dialogService.open<DialogInfoComponent, any, any >( DialogInfoComponent , {
      width: '100%',
      height: 'auto',
      data: { casts: casts }

    });

  }

  openDialog (sala: SalaType | undefined, date: any, operator: boolean | undefined ) {

    if (sala) {
      this.dialogService.open<DialogInfoComponent, any, any >( DialogInfoComponent , {
        width: '100%',
        height: 'auto',
        data: { sala: sala, date: date, operator: operator}
  
      });

    }


  }

  InitialLetter(film: Films) {
    return film.originalTitleText.text.split(' ').map(word => word.charAt(0)).join('');
  }

 



}
