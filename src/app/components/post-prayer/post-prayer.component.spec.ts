import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPrayerComponent } from './post-prayer.component';

describe('PostPrayerComponent', () => {
  let component: PostPrayerComponent;
  let fixture: ComponentFixture<PostPrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPrayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
