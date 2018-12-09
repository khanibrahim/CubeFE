import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/property.service';
import { Form, NgForm } from '@angular/forms';
import { Property } from '../../../models/property.model'

@Component({
  selector: 'app-propertyprofile',
  templateUrl: './propertyprofile.component.html',
  styleUrls: ['./propertyprofile.component.css']
})
export class PropertyprofileComponent implements OnInit {

  propertyClaims: any;
  constructor(private propertyService: PropertyService) { }
  property: FormData;
 // logo: any;


  ngOnInit() {
    this.propertyService.getPropertyClaims().subscribe(data => {
      this.propertyClaims = data;
    })
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
      //  this.logo = reader.result; 
        this.propertyClaims.Logo = reader.result;       
      };
    }
  }

  onSubmit(propertyForm: NgForm, LogoField: any) {
    this.property = propertyForm.value;
    this.property["Logo"] = this.propertyClaims.Logo;
    //this.property.set("Logo", this.logo);
    this.propertyService.setPropertyClaims(this.property).subscribe((data: Property) => {
      console.log(data.Item);
      this.propertyClaims = data.Item;
    })
  }

}
