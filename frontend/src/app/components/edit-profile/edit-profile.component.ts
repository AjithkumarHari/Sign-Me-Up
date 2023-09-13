import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  imageUrl: string  =  '../../../assets/default-avatar.png';
  form !: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    
  }
  ngOnInit(): void {
      this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.pattern("^[a-zA-Z\s]+$")]),
      email : new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$")]),
      password : new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(8)])
      })
  }

  onImageSelected(event: any) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onFormSubmit(){
    console.log(this.form);
    
  }

}
