import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss'],
})
export class DeleteNotificationComponent {
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService
  ) {}

  closepopup() {
    this.dialog.closeAll();
  }

  deleteData() {
    if (this.data.Id != '' && this.data.Id != null) {
      this.api.DeleteById(this.data.Id).subscribe((r) => {});
      this.closepopup();
    }
  }
}
