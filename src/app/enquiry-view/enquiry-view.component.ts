import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../_services/index';
import { Enquiry } from '../_models/index';

@Component({
  selector: 'app-enquiry-view',
  templateUrl: './enquiry-view.component.html',
  styleUrls: ['./enquiry-view.component.css']
})
export class EnquiryViewComponent implements OnInit {

  enquiryList:any = {};
  enquiry:Enquiry = new Enquiry;
  public enquiryTable = false;
  nodata:boolean = false;
  loadinggif:boolean = false;
   
  constructor(
    private enquiryService: EnquiryService,
  ) { }

  ngOnInit(): void {
    this.enquiryTable = false;
    this.loadinggif = false;
    this.nodata = false;
    this.loadEnquiry();
  }

  loadEnquiry(){
    this.loadinggif = true;
    this.enquiryTable = false;
		this.enquiryService.loadEnquiry()
			.subscribe(
			data => {
				this.enquiryList = data;
				if(this.enquiryList.length == 0){
          this.nodata = true;
          this.loadinggif = false;
					this.enquiryTable = false;
				}else{
          this.nodata = false;
          this.loadinggif = false;
					this.enquiryTable = true;
				}
			},
			error => {
				this.loadinggif = false;
			}
		);
  }

}
