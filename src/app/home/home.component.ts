import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(    private SpinnerService: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    // this.SpinnerService.show();  
    // this.SpinnerService.hide();  

  }

}
