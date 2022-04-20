import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { usermodel } from './usermodel';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {
  table!:usermodel[];

  constructor(private manageuser:UserService) { }

  ngOnInit(): void {
    this.getads();
  }
  getads(){
    this.manageuser.getusers().subscribe((data:usermodel[])=>{
      this.table=data; 
    
    console.log(this.table)
    
    })
  }
  delete(id :number){
    this.manageuser.deleteuser(id).subscribe(data=>{
      this.getads();
    })
  }
   
   
    
    
   
 

}
