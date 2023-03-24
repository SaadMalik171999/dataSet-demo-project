import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../Shared/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-set-update',
  templateUrl: './data-set-update.component.html',
  styleUrls: ['./data-set-update.component.scss'],
})
export class DataSetUpdateComponent {
  editdata: any;
  constructor(
    private builder: FormBuilder,
    private dialog: MatDialog,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {}

  dataSetForm = this.builder.group({
    Id: this.builder.control({ value: '', disabled: true }),
    Start: ['', Validators.required],
    End: ['', Validators.required],
    Event: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.data.Id != '' && this.data.Id != null) {
      this.api.GetById(this.data.Id).subscribe((response: any) => {
        this.editdata = response;
        this.dataSetForm.setValue({
          Id: this.editdata.id,
          Start: this.editdata.start,
          End: this.editdata.end,
          Event: this.editdata.event,
        });
      });
    }
  }

  updateData() {
    if (this.dataSetForm.valid) {
      const Editid = this.dataSetForm.getRawValue().Id;
      if (Editid != '' && Editid != null) {
        this.api
          .UpdateDataSet(this.dataSetForm.getRawValue(), Editid)
          .subscribe((response: any) => {
            this.closepopup();
            this.openSnackBar();
          });
      }
    }
  }

  openSnackBar() {
    this._snackBar.open('Data Updated Successfully', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2 * 1000,
    });
  }

  closepopup() {
    this.dialog.closeAll();
  }
}
