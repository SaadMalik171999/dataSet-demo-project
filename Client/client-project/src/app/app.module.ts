import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataSetTableComponent } from './data-set-table/data-set-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { DataSetCreateComponent } from './data-set-create/data-set-create.component';
import { DataSetUpdateComponent } from './data-set-update/data-set-update.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DataSetChartComponent } from './data-set-chart/data-set-chart.component';
import { DeleteNotificationComponent } from './delete-notification/delete-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSetTableComponent,
    DataSetCreateComponent,
    DataSetUpdateComponent,
    DataSetChartComponent,
    DeleteNotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
