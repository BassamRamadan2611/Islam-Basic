import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahihBukhariComponent } from './sahih-bukhari.component';

describe('SahihBukhariComponent', () => {
  let component: SahihBukhariComponent;
  let fixture: ComponentFixture<SahihBukhariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahihBukhariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahihBukhariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
