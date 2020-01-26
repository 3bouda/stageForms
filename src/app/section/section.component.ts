import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  sectionForm:FormGroup;
  constructor( private fb:FormBuilder ) {}

  ngOnInit() {
    this.sectionForm = this.fb.group({
      textt: ['',Validators.required] ,
    })
  }
  public get textt(){
    return this.sectionForm.get('textt');
  }
  onSubmit(){
    console.log(this.sectionForm.value);
}
}
