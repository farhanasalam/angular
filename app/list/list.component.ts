import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public bookdetails:any=[{title:"book 1",author:"author 1",publisher:"publisher 1"},
{title:"book 2",author:"author 2",publisher:"publisher 2"},
{title:"book 3",author:"author 3",publisher:"publisher 3"}];
selbook:any;
addBook(data:any){
  this.selbook=data;
}
  constructor() {}


  ngOnInit() {
  }

}