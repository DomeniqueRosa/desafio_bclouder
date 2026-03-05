import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Country {

  private api = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.api);
  }

  getCountryByName(name: string | null) {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }

  getContryByCode(code: string | null) {
    return this.http.get(`https://restcountries.com/v3.1/alpha/${code}`);
  }


}