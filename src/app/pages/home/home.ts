import { Component, OnInit, signal, computed } from '@angular/core';
import {CountryModel } from '../../models/country';
import { Country } from '../../services/country';
import { CommonModule } from '@angular/common';
import { Card } from '../../componentes/card/card';
import { SearchFilter } from '../../componentes/search-filter/search-filter';
import { Navbar } from '../../componentes/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card, SearchFilter, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  protected readonly title = signal('desafio_bclouder');
  constructor(private countryService: Country) { }
  countries = signal<any[]>([]);
  searchTerm = signal('');
  regionFilter = signal('');

  loading = signal(true); 
  error = signal<string | null>(null); // null significa sem erro




  ngOnInit(): void {

    this.loading.set(true);

    this.error.set(null);

    this.countryService.getCountries().subscribe({
      next: (data : any) => {
        this.countries.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erro ao carregar os países');
        this.loading.set(false);
      },
    })
  }

  filteredCountries = computed(() => {

    return this.countries().filter((country: any) => {

      const matchName =
        country.name.common
          .toLowerCase()
          .includes(this.searchTerm().toLowerCase());

      const matchRegion =
        this.regionFilter() === '' ||
        country.region === this.regionFilter();


      return matchName && matchRegion;

    });



  });


  onSearch(term: string) {
    this.searchTerm.set(term);
  }

  onRegion(region: string) {
    this.regionFilter.set(region);
  }


}
