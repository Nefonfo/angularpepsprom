import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AllActivitiesPageComponent } from '../../pages/all-activities-page/all-activities-page.component';

@Component({
  selector: 'app-new-sheet-dialog',
  templateUrl: './new-sheet-dialog.component.html',
  styleUrls: ['./new-sheet-dialog.component.scss']
})
export class NewSheetDialogComponent implements OnInit {
  dataForm: FormGroup;
  typesData = ['PEPS', 'COSTO PROMEDIO'];
  constructor(
    private dialogRef: MatDialogRef<AllActivitiesPageComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit() {
    this.dataForm = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.required
        ],
      ),
      type: new FormControl(
        '',
        [
          Validators.required,
        ],
      ),
    });
  }

  save() {
    if (this.dataForm.status !== 'VALID') {
      return ;
    }
    this.dialogRef.close(this.dataForm.value);
  }

close() {
    this.dialogRef.close();
  }

}
