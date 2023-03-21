import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayTimeComponent } from './pray-time.component';

describe('PrayTimeComponent', () => {
  let component: PrayTimeComponent;
  let fixture: ComponentFixture<PrayTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
