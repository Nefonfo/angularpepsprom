import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AllActivitiesPageComponent } from '../../pages/all-activities-page/all-activities-page.component';
import { ValidatorIntService } from 'src/app/core/validators/validator-int.service';

@Component({
  selector: 'app-new-info-dialog',
  templateUrl: './new-info-dialog.component.html',
  styleUrls: ['./new-info-dialog.component.scss']
})
export class NewInfoDialogComponent implements OnInit {
  dataForm: FormGroup;
  typesData = ['ENTRADA', 'SALIDA'];
  ableTo: boolean = true;
  initialStateForm = {
    name: new FormControl(
      '',
      [
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.required
      ],
    ),
    type: new FormControl(
      this.typesData[0],
      [
        Validators.required,
      ],
    ),
    quantity: new FormControl(
      '',
      [
        Validators.required,
        Validators.min(0.01),
      ],
    ),
    unitCost: new FormControl(
      '',
      [
        this.validatorService.isInteger,
        Validators.min(1),
      ],
    )
  };
  
  constructor(
    private dialogRef: MatDialogRef<AllActivitiesPageComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private readonly validatorService: ValidatorIntService
    ) {

  }

  ngOnInit() {
    this.dataForm = new FormGroup(this.initialStateForm);
    this.ableTo = true;
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

  onChangeSelect(data){
    
    const { value } = data;
    if (value === 'SALIDA') {
      this.ableTo = false;
      this.dataForm.markAsUntouched();
      this.dataForm.markAsPristine();
      this.dataForm.reset({
        type: 'SALIDA'
      });
    } else {
      this.ableTo = true;
      this.dataForm.markAsUntouched();
      this.dataForm.markAsPristine();
      this.dataForm.reset({
        type: 'ENTRADA'
      });
    }
    return data;
  }

}
