import { Component, OnInit } from '@angular/core';
import{student} from '../student';
import {NgForm} from '@angular/forms';
import{ ServiceService } from '../service.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})

export class ApplyComponent implements OnInit {
student = new student();
isRegistered = false;
  constructor(private applyService: ServiceService) { }

  ngOnInit() {
  }
registration(f:NgForm){ this.applyService.store(this.student).subscribe(data=>{
  this.isRegistered=true;
  console.log("success");
  f.reset();
},
(err)=>{this.isRegistered=false;});
}
}



