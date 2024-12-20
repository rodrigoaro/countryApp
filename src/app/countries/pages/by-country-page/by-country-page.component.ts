import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor( private countriesService: CountriesService ){}
  
  searchByCountry( countryName: string ){

    this.countriesService.searchCountry( countryName ).subscribe(
      response => {
        this.countries = response;
        console.log(this.countries);
      }
    );
  }

}
