import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/model/student.model';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-gradebooklist',
  templateUrl: './gradebooklist.component.html',
  styleUrls: ['./gradebooklist.component.css']
})
export class GradebooklistComponent implements OnInit {
   students:IStudent[]=[]
   searchTerm=""
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {

   this. students =this.studentService.getStudents()

  }
search(){
  console.log(this.searchTerm)
}
}
