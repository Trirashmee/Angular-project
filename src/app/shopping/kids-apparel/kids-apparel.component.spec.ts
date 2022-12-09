import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsApparelComponent } from './kids-apparel.component';

describe('KidsApparelComponent', () => {
  let component: KidsApparelComponent;
  let fixture: ComponentFixture<KidsApparelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsApparelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
