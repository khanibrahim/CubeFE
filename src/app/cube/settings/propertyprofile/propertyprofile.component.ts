import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/property.service';

@Component({
  selector: 'app-propertyprofile',
  templateUrl: './propertyprofile.component.html',
  styleUrls: ['./propertyprofile.component.css']
})
export class PropertyprofileComponent implements OnInit {

  constructor(private propertyService:PropertyService) { }

  ngOnInit() {

    this.propertyService.getDate().subscribe(data=>{
      console.log(data);

    })
  }

}
