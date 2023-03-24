import { Component, OnChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../Shared/api.service';
import { DataSetUpdateComponent } from '../data-set-update/data-set-update.component';
import { DataSetCreateComponent } from '../data-set-create/data-set-create.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteNotificationComponent } from '../delete-notification/delete-notification.component';

@Component({
  selector: 'app-data-set-table',
  templateUrl: './data-set-table.component.html',
  styleUrls: ['./data-set-table.component.scss'],
})
export class DataSetTableComponent {
  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSetData!: any[];
  dataSource: any;
  isLoading: boolean = true;
  displayColumns: string[] = ['Start', 'End', 'Event', 'Actions'];

  ngOnInit() {
    this.LoadData();
  }

  LoadData() {
    this.isLoading = true;
    this.api.GetAllList().subscribe((response) => {
      this.dataSetData = response;
      this.dataSource = new MatTableDataSource(this.dataSetData);
      this.dataSource.paginator = this.paginator;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  UpdateDataSet(Id: String) {
    const _popup = this.dialog.open(DataSetUpdateComponent, {
      width: '800px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        Id: Id,
      },
    });
    _popup.afterClosed().subscribe((r) => {
      this.LoadData();
    });
  }

  CreateDataSet() {
    const _popup = this.dialog.open(DataSetCreateComponent, {
      width: '800px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
    });
    _popup.afterClosed().subscribe((r) => {
      this.LoadData();
    });
  }

  DeleteDataSet(Id: String) {
    this.DeletePopup(Id);
  }

  openSnackBar() {
    this._snackBar.open('Data Deleted Successfully', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2 * 1000,
    });
  }

  DeletePopup(Id: String) {
    const _popup = this.dialog.open(DeleteNotificationComponent, {
      width: '800px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        Id: Id,
      },
    });
    _popup.afterClosed().subscribe((r) => {
      this.LoadData();
    });
  }
}
