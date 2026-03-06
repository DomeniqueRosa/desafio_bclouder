import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryModel } from '../models/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Country {

  private api = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region';

  constructor(private http: HttpClient) { }

  getCountries() : Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.api);
  }

  getCountryByName(name: string | null) : Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(`https://restcountries.com/v3.1/name/${name}`);
  }

  getCountryByCode(code: string | null) : Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(`https://restcountries.com/v3.1/alpha/${code}`);
  }


}