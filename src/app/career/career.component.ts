import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../_models/index';
import { EnquiryService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
  div2: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enquiryService: EnquiryService,
    private SpinnerService: NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this.showMsg = false;
    this.showerrorMsg = false;
  }

  saveCareer(){
    this.SpinnerService.show();  
    this.enquiryService.saveCareer(this.model) 
    .subscribe(
      data => {
        this.showerrorMsg = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.addEnquiryClose();
        this.div2=false;
      },
      error => {
        this.showMsg = false;
        this.showerrorMsg = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    );
    setTimeout(() => {
      this.SpinnerService.hide();
      this.showMsg = true;
  }, 500);
  }

  addEnquiryClose(){
    this.model.name = '';
    this.model.phonenumber = '';
    this.model.email_ID = '';
    this.model.qualification = '';
    this.model.country = '';
    this.model.position = '';
    this.model.primaryskill = '';
  }

}
