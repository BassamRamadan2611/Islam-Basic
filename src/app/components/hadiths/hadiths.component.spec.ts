import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadithsComponent } from './hadiths.component';

describe('HadithsComponent', () => {
  let component: HadithsComponent;
  let fixture: ComponentFixture<HadithsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadithsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadithsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
