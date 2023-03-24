import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSetChartComponent } from './data-set-chart/data-set-chart.component';
import { DataSetTableComponent } from './data-set-table/data-set-table.component';

const routes: Routes = [
  {
    component: DataSetTableComponent,
    path: '',
  },
  {
    component: DataSetChartComponent,
    path: 'chart',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
