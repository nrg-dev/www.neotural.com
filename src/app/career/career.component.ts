import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../_models/index';
import { EnquiryService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';

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
  imageError: string;
  isImageSaved: boolean;
  cvBase64: string;
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
  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/pdf'];
        const max_height = 1200;
        const max_width = 600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 3000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            this.imageError = 'Only Docs are allowed ( Doc | PDF )';
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
               const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];
               
                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cvBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}
  saveCareer(){
    this.SpinnerService.show(); 
    console.log("CV Base64-->"+this.cvBase64); 
    this.model.cvBase64=this.cvBase64;
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
