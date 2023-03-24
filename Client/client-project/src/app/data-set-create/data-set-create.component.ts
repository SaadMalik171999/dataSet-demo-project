import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Shared/api.service';
import { DataSetModel } from '../Model/DataSetModel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-set-create',
  templateUrl: './data-set-create.component.html',
  styleUrls: ['./data-set-create.component.scss'],
})
export class DataSetCreateComponent {
  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;
  dataSet!: DataSetModel[];

  constructor(
    private builder: FormBuilder,
    private dialog: MatDialog,
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) {}

  dataSetForm = this.builder.group({
    Start: ['', Validators.required],
    End: ['', Validators.required],
    Event: ['', Validators.required],
  });

  ngOnInit(): void {}

  CreateData() {
    const dataSetFormData = this.dataSetForm.getRawValue();
    const dataSetModel: any = {
      Start: dataSetFormData.Start,
      End: dataSetFormData.End,
      Event: dataSetFormData.Event,
    };
    if (this.dataSetForm.valid) {
      this.api.CreateDataSet(dataSetModel).subscribe((response) => {
        this.openSnackBar();
        this.dataSetForm.reset();
        this.closepopup();
      });
    }
  }

  openSnackBar() {
    this._snackBar.open('Data Created Successfully', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2 * 1000,
    });
  }

  closepopup() {
    this.dialog.closeAll();
  }
}
