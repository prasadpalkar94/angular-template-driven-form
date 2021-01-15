import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  
  user = new User()
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(JSON.stringify(this.user))
  }

 

}
