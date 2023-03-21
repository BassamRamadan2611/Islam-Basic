import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuraanAudioComponent } from './quraan-audio.component';

describe('QuraanAudioComponent', () => {
  let component: QuraanAudioComponent;
  let fixture: ComponentFixture<QuraanAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuraanAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuraanAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
