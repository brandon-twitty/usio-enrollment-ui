import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentApiService {
enrollmentUri = ' https://enroll.securepds.com/enroll.svc/JSON/CreateMerchant';
  constructor(private HttplClient: HttpClient) { }
}
