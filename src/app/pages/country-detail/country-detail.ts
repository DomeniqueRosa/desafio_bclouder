import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Country } from '../../services/country';
import { Navbar } from '../../componentes/navbar/navbar';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './country-detail.html',
  styleUrl: './country-detail.css',
})
export class CountryDetail implements OnInit {

  country = signal<any | null>(null);
  loading = signal(true);
  error = signal<string | null>(null); 


  constructor(private route: ActivatedRoute, private countryService: Country) { }

  ngOnInit(): void {

    this.loading.set(true);

    this.error.set(null);

    const name = this.route.snapshot.paramMap.get('name');

    this.countryService.getCountryByName(name).subscribe({
      next: (data : any) => {
        this.country.set(data[0]);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erro ao carregar os detalhes do país');
        this.loading.set(false);
      },
    });

  }
  getLanguages(): string {
    const langs = this.country()?.languages;
    if (!langs) return '';
    return Array.isArray(langs)
      ? langs.map(l => l.name).join(', ')
      : Object.values(langs).join(', ');
  }
  getCurrencies(): string {
    const currs = this.country()?.currencies;
    if (!currs) return '';
    return Array.isArray(currs)
      ? currs.map(c => c.name).join(', ')
      : Object.values(currs).map((c: any) => c.name).join(', ');
  }
  getBorderCountries(): string[] {
    const borders = this.country()?.borders;
    return borders ? borders : [];
  }


}