import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenJeansComponent } from './women-jeans.component';

describe('WomenJeansComponent', () => {
  let component: WomenJeansComponent;
  let fixture: ComponentFixture<WomenJeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenJeansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
