import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries : Country[] = [];

  constructor( private countriesService: CountriesService ) { }

  searchByCapital( term: string ): void {
    this.countriesService.searchCapital( term ).subscribe(
      respCountries => {
        this.countries = respCountries;
        console.log(this.countries);
      }
    );

  }

}
