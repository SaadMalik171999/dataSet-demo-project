import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  dataSetapiurl = 'https://localhost:7181/api/dataset';

  GetAllList(): Observable<any[]> {
    return this.http.get<any[]>(this.dataSetapiurl);
  }

  GetById(id: any): Observable<any> {
    return this.http.get<any>(this.dataSetapiurl + '/' + id);
  }

  DeleteById(id: any) {
    return this.http.delete(this.dataSetapiurl + '/' + id);
  }

  CreateDataSet(dataSet: any) {
    return this.http.post(this.dataSetapiurl, dataSet, {});
  }

  UpdateDataSet(dataSet: any, id: any) {
    return this.http.put(this.dataSetapiurl + '/' + id, dataSet);
  }
}
