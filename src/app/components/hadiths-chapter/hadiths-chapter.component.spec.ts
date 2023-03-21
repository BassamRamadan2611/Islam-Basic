import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadithsChapterComponent } from './hadiths-chapter.component';

describe('HadithsChapterComponent', () => {
  let component: HadithsChapterComponent;
  let fixture: ComponentFixture<HadithsChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadithsChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadithsChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
