import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnoteFeaturesComponent } from './qnote-features.component';

describe('QnoteFeaturesComponent', () => {
  let component: QnoteFeaturesComponent;
  let fixture: ComponentFixture<QnoteFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnoteFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnoteFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
