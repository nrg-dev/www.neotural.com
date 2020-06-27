import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Enquiry } from '../_models';
import { EnquiryService } from '../_services';


@Component({
  selector: 'app-enquiry-login',
  templateUrl: './enquiry-login.component.html',
  styleUrls: ['./enquiry-login.component.css']
})
export class EnquiryLoginComponent implements OnInit {

  model: any = {};
  enquiry:Enquiry = new Enquiry;
  usernamepasserror:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enquiryservice: EnquiryService,
  ) { }

  ngOnInit(): void {
    this.usernamepasserror = false;

    this.enquiryservice.getUserAndPass()
      .subscribe(
        data => {
          this.enquiry=data;
        },
        error => {
        } 
      ); 
  }

  enquiryLogin(){
    if(this.model.username == this.enquiry.username && this.model.password == this.enquiry.password){
      this.router.navigate(['/enquiryview']);
    }else{
      this.usernamepasserror = true;
    }
  }

}
