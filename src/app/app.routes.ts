import { Routes } from '@angular/router';
import { CountryDetail } from './pages/country-detail/country-detail';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },

    {
        path: 'country/:name',
        component: CountryDetail
    },
    {
        path: 'country/code/:code',
        component: CountryDetail
    }
];
