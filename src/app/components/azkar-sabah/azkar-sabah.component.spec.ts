import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzkarSabahComponent } from './azkar-sabah.component';

describe('AzkarSabahComponent', () => {
  let component: AzkarSabahComponent;
  let fixture: ComponentFixture<AzkarSabahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzkarSabahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzkarSabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
