import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenEthnicComponent } from './men-ethnic.component';

describe('MenEthnicComponent', () => {
  let component: MenEthnicComponent;
  let fixture: ComponentFixture<MenEthnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenEthnicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenEthnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
