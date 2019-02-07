import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  public studentdetails:any=[{rollno:"12",name:"mdmde",image:"rrr",batch:"mca",department:"mca"},
  {rollno:"12",name:"mdmde",image:"rrr",batch:"mca",department:"mca"},
  {rollno:"12",name:"mdmde",image:"rrr",batch:"mca",department:"mca"}];
  selstudent:any;
  addstudent(data:any){
    this.selstudent=data;
  }
  constructor() { }

  ngOnInit() {
  }

}
