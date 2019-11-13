import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaImageAPIComponent } from './nasa-image-api.component';

describe('NasaImageAPIComponent', () => {
  let component: NasaImageAPIComponent;
  let fixture: ComponentFixture<NasaImageAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaImageAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaImageAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
