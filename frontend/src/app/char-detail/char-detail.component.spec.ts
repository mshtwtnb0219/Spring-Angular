import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDetailComponent } from './char-detail.component';

describe('CharDetailComponent', () => {
  let component: CharDetailComponent;
  let fixture: ComponentFixture<CharDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
