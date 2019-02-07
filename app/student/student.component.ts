import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() rollno:number;
  @Input() name:string;
  @Input() image:string;
  @Input() batch:string;
  @Input() department:string;

  @Output() sendStudent:EventEmitter<any>=new EventEmitter();
  selectStudent(){
    let selectedStudent:any = {srollno:this.rollno,
      sname:this.name,
    simage:this.image,
    sbatch:this.batch,
    sdepartment:this.department};
    this.sendStudent.emit(selectedStudent);
  }
  constructor() { }

  ngOnInit() {
  }

}
