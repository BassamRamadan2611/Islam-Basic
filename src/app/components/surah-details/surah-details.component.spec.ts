import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahDetailsComponent } from './surah-details.component';

describe('SurahDetailsComponent', () => {
  let component: SurahDetailsComponent;
  let fixture: ComponentFixture<SurahDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurahDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurahDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
