import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnoteCardComponent } from './qnote-card.component';

describe('QnoteCardComponent', () => {
  let component: QnoteCardComponent;
  let fixture: ComponentFixture<QnoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnoteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
