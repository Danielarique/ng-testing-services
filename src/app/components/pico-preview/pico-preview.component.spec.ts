import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PicoPreviewComponent } from './pico-preview.component';

describe('PicoPreviewComponent', () => {
  let component: PicoPreviewComponent;
  let fixture: ComponentFixture<PicoPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PicoPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
