import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-answers',
  templateUrl: './new-answers.component.html',
  styleUrls: ['./new-answers.component.css']
})
export class NewAnswersComponent implements OnInit {
  submitted: boolean;

  constructor(private formBuilder:FormBuilder) { }
  NewAnswers:FormGroup
  ngOnInit() {
    this.NewAnswers = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      answer:['',Validators.required],  
  })
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    console.log(this.NewAnswers.value)
    if (this.NewAnswers.invalid) {
      return;
    }
  }
  get f() { return this.NewAnswers.controls; }

}
