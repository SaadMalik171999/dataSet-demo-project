import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetUpdateComponent } from './data-set-update.component';

describe('DataSetUpdateComponent', () => {
  let component: DataSetUpdateComponent;
  let fixture: ComponentFixture<DataSetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSetUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
