import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:  HttpClient) { }

  public getSkill(): Observable<any>{
    return this.http.get("assets/Information/SulaimonSkills.json")
  }


}
