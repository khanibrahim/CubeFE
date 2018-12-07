import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/property.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-propertyprofile',
  templateUrl: './propertyprofile.component.html',
  styleUrls: ['./propertyprofile.component.css']
})
export class PropertyprofileComponent implements OnInit {

  propertyClaims: any;
  constructor(private propertyService: PropertyService) { }
  property : FormData;


  ngOnInit() {
    this.propertyService.getPropertyClaims().subscribe(data => {
      this.propertyClaims = data;
    })
  }

  onSubmit(propertyForm: NgForm) {
    this.property = propertyForm.value;
   // this.property.append("RUB","");
    console.log(this.property);
    this.propertyService.setPropertyClaims(this.property).subscribe((data : object) => {
      console.log(data);
    })
  }

}
