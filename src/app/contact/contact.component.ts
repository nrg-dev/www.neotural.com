import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../_models/index';
import { EnquiryService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: any = {};
  showMsg: boolean = false;
  showerrorMsg: boolean = false;
  enquiry:Enquiry;
  public phonenumberoremail = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enquiryService: EnquiryService,
  ) { }

  ngOnInit(): void {
    this.phonenumberoremail = false;
    this.showMsg = false;
    this.showerrorMsg = false;
  }

  getValidation(){
    if(this.model.email_ID != null || this.model.phonenumber != null){
      this.phonenumberoremail = false;
    }else{
      this.phonenumberoremail = true;
    }
  }

  saveEnquiry(){
    if(this.model.email_ID != null || this.model.phonenumber != null){
      this.phonenumberoremail = false;

      this.enquiryService.saveEnquiry(this.model) 
        .subscribe(
          data => {
            this.showMsg = true;
            this.showerrorMsg = false;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.addEmployeeClose();
          },
          error => {
            this.showMsg = false;
            this.showerrorMsg = true;
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        );
    }else{
      this.phonenumberoremail = true;
    }
    
  }

  addEmployeeClose(){
    this.model.name = '';
    this.model.phonenumber = '';
    this.model.email_ID = '';
    this.model.message = '';
    this.model.enquirytype = '';
    this.model.country = '';
  }

}
