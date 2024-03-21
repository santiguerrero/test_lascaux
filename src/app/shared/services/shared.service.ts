import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {BASE_JSONF, BASE_rapidapi, URL_BASE, toggleMemory } from '../models/shared.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private bhSubjectToggleValue = new BehaviorSubject(localStorage.getItem(toggleMemory) != null ?
    localStorage.getItem(toggleMemory) == 'false' ? false : true : false);

  public readonly toggleValueOBS = this.bhSubjectToggleValue.asObservable();

  constructor(private http: HttpClient) { }


  public getFilms(page: number): Observable</*BASE_rapidapi*/ BASE_JSONF > {

    if (page) {
      return this.http.get</*BASE_rapidapi*/ BASE_JSONF>(URL_BASE, { params: { page: page } });

    } else {

      return this.http.get</*BASE_rapidapi*/ BASE_JSONF>(URL_BASE, { params: {  } });

    }
    
  }


  // public searchFilms(page: number, text: string): Observable</*BASE_rapidapi*/ BASE_JSONF> {
  //   return this.http.get</*BASE_rapidapi*/ BASE_JSONF>(URL_BASE + 'titles/search/title/' + (text || ''), { params: { genre: 'Comedy', page: !page ? 1 : page, exact: false, startYear: '2020', sort: 'year.incr' } });
  // }

  public nextToggleValue(v: boolean) {
    this.bhSubjectToggleValue.next(v);

  }
}
