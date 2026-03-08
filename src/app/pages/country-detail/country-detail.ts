import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Country } from '../../services/country';
import { Navbar } from '../../componentes/navbar/navbar';
import { CountryModel } from '../../models/country';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, Navbar, RouterLink],
  templateUrl: './country-detail.html',
  styleUrl: './country-detail.css',
})
export class CountryDetail implements OnInit {

  country = signal<CountryModel | null>(null);
  loading = signal(true);
  error = signal<string | null>(null); 


  constructor(private route: ActivatedRoute, private countryService: Country) { }

  ngOnInit(): void {

    this.loading.set(true);

    this.error.set(null);

    const name = this.route.snapshot.paramMap.get('name');

    this.countryService.getCountryByName(name).subscribe({
      next: (data : CountryModel[]) => {
        this.country.set(data[0]);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erro ao carregar os detalhes do país');
        this.loading.set(false);
      },
    });

  }
  
  getLanguages(c : CountryModel): string {
    return c.languages ? Object.values(c.languages).join(', ') : 'N/A';
  }

  getCurrencies(c: CountryModel): string {
    if (!c.currencies) return 'N/A';
    return Object.values(c.currencies).map(curr => curr.name).join(', ');
  }

  getBorderCountries(c: CountryModel): string[] {
    return c.borders ? c.borders : ['N/A'];
  }


}