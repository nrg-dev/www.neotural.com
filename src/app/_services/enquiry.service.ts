import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enquiry } from '../_models/index';
import { User } from '../_models/index';
import { environment } from "src/environments/environment";

@Injectable()
export class EnquiryService {    

    private commonURL = environment.apiUrl;
    	
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }  

    // Create new Enquiry
    saveEnquiry(enquiry: Enquiry) {
        return this.http.post<Enquiry>(this.commonURL+'saveEnquiry', enquiry);
    }

    getUserAndPass(){
        return this.http.get<Enquiry>(this.commonURL+'getUserAndPass'); 
    }

    loadEnquiry(){
       return this.http.get(this.commonURL+'loadEnquiry'); 
    }

    saveCareer(enquiry: Enquiry){
        return this.http.post<Enquiry>(this.commonURL+'saveCareer', enquiry);
    }
}
