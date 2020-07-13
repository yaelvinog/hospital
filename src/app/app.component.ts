import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalAdvisor';
  users:any;
  ngOnInit(){
  // this.usersSrv.getUsers().subscribe(data=>{
  //   this.users=data;
  // })
  }
  constructor(){

  }

}

