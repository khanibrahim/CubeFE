import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  item:any;
  userProfile:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data=>{
      console.log(data);
      this.item=data;

    })
    
  }
onSubmit(userProfileForm:NgForm)
{this.userProfile=userProfileForm.value;
this.userService.updateUserDetail(this.userProfile).subscribe(data=>{
console.log(data);

})
}
}
