import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../model/student.model';
import {students} from "./data"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }


public getStudents(): IStudent[] {
   return students;       
}
}