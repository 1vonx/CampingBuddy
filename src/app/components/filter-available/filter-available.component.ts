import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-filter-available',
  templateUrl: './filter-available.component.html',
  styleUrls: ['./filter-available.component.css']
})
export class FilterAvailableComponent {

  public dateForm: FormGroup;
  navigationExtra: NavigationExtras | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.dateForm = this.formBuilder.group({
      startDate: '',
      endDate: '',
    });
  }

  public submit(): void {

    console.log('create ', this.dateForm.value);

    this.navigationExtra = {
      state: {
        startDate: this.dateForm.value.startDate,
        endDate: this.dateForm.value.endDate
      }
    }

    this.router.navigate(['/list-camps'], this.navigationExtra);

  }


}
