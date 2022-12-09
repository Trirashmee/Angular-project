import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantsComponent } from './infants.component';

describe('InfantsComponent', () => {
  let component: InfantsComponent;
  let fixture: ComponentFixture<InfantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
