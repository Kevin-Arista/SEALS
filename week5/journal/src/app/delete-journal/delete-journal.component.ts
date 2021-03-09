import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../Shared/Services/api-data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-delete-journal',
  templateUrl: './delete-journal.component.html',
  styleUrls: ['./delete-journal.component.scss']
})
export class DeleteJournalComponent implements OnInit {
  public deleteForm!: FormGroup;

  constructor(public _apiService: ApiDataService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void{
    this.deleteForm= this.fb.group({
      title: [null, Validators.required]
    });
  }
  removeSpecifiedJournal(){
    let specifiedJournal = this.deleteForm.value.title;
    console.log(specifiedJournal);
    let postData = {
          "title": specifiedJournal
    }
    this._apiService.deleteAJournal(postData)
    .subscribe((data: any) => {
      console.log(data)
      alert(specifiedJournal + " deleted!" )
    });
    this.deleteForm.reset();  
  }
}
