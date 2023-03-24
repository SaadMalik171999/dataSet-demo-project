import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetChartComponent } from './data-set-chart.component';

describe('DataSetChartComponent', () => {
  let component: DataSetChartComponent;
  let fixture: ComponentFixture<DataSetChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSetChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
