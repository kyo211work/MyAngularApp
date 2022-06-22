import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color1Component } from './color1.component';

describe('Color1Component', () => {
  let component: Color1Component;
  let fixture: ComponentFixture<Color1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Color1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Color1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
