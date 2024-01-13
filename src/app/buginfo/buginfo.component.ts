import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@Component({
  selector: 'app-buginfo',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,MatDatepickerModule,    MatSelectModule,MatCheckboxModule
  ],
  templateUrl: './buginfo.component.html',
  styleUrl: './buginfo.component.css'
})
export class BuginfoComponent {
[x: string]: any;
disableSelect = new FormControl(false);

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  
}
