import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksavgComponent } from './marksavg.component';

describe('MarksavgComponent', () => {
  let component: MarksavgComponent;
  let fixture: ComponentFixture<MarksavgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksavgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksavgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
