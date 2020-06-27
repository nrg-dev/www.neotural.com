import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../_models/index';
import { EnquiryService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  model: any = {};
  showMsg: boolean = false;
  showerrorMsg: boolean = false;
  enquiry:Enquiry;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enquiryService: EnquiryService,
  ) { }

  ngOnInit(): void {
    this.showMsg = false;
    this.showerrorMsg = false;
  }

  saveCareer(){
    this.enquiryService.saveCareer(this.model) 
    .subscribe(
      data => {
        this.showMsg = true;
        this.showerrorMsg = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error => {
        this.showMsg = false;
        this.showerrorMsg = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    );
  }

}
