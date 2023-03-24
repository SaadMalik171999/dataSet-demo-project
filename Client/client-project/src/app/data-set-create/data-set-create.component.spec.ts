import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetCreateComponent } from './data-set-create.component';

describe('DataSetCreateComponent', () => {
  let component: DataSetCreateComponent;
  let fixture: ComponentFixture<DataSetCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSetCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
