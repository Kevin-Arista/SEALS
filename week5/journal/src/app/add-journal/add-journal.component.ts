import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../Shared/Services/api-data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.component.html',
  styleUrls: ['./add-journal.component.scss']
})
export class AddJournalComponent implements OnInit {
  public createForm!: FormGroup;

  constructor(public _apiService: ApiDataService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.createForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  journalSubmit(){
    let journalTitle = this.createForm.value.title;
    let journalAuthor = this.createForm.value.author;
    let journalContent = this.createForm.value.content;
    let postData = {
      "title": journalTitle,
      "author": journalAuthor,
      "content": journalContent
    } 
    this._apiService.createNewJournal(postData)
    .subscribe((data: any) => {
      console.log(data);
      alert("Journal Created Succesfully!");
    });
    this.createForm.reset();  
  }

}
