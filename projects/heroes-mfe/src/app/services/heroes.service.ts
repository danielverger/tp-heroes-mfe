import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject, catchError, tap, throwError } from 'rxjs';

import { Hero, HeroFilter, HeroResult } from './../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public totalHeroes$: Subject<number> = new Subject<number>();
  
  private _lastFilter = new HeroFilter();
  private http = inject(HttpClient);

  public get lastFilter() {
    return this._lastFilter;
  }

  getHeroes(filter: HeroFilter): Observable<HeroResult>  {
    this._lastFilter = filter;
    let urlParams = new HttpParams()
        .set( 'pageIndex', filter.pageIndex ) 
        .set( 'pageSize', filter.pageSize ) 
        .set( 'sortField', filter.sortField ) 
        .set( 'sortDirection', filter.sortDirection ) 
    filter.name && (urlParams = urlParams.set( 'name', filter.name ));

    return this.http.get<HeroResult>( `heroes`, { params: urlParams } ).pipe( 
      tap((res)=> this.totalHeroes$.next(res.total)),
      catchError(this.handleError) 
    );
  }

  getHero(id: number): Observable<Hero>{
    return this.http.get<Hero>( `heroes/${id}` ).pipe( catchError(this.handleError) );
  }

  addHero(hero: Hero): Observable<Hero>  {
    return this.http.post<Hero>( `heroes`, hero ).pipe( catchError(this.handleError) );
  }

  modifyHero(hero: Hero): Observable<Hero>  {
    return this.http.put<Hero>( `heroes/${hero.id}`, hero ).pipe( catchError(this.handleError) );
  }

  deleteHero(id: number): Observable<boolean>  {
    return this.http.delete<boolean>( `heroes/${id}` ).pipe( catchError(this.handleError) );
  }

  private handleError() {
    return throwError( () => "Something bad happened; please try again later." );
  }

}

export function getHero() {
  return 'ñeeee!'
}