import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzkarMasaaComponent } from './azkar-masaa.component';

describe('AzkarMasaaComponent', () => {
  let component: AzkarMasaaComponent;
  let fixture: ComponentFixture<AzkarMasaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzkarMasaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzkarMasaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
