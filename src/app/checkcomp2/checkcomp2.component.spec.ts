import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkcomp2Component } from './checkcomp2.component';

describe('Checkcomp2Component', () => {
  let component: Checkcomp2Component;
  let fixture: ComponentFixture<Checkcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkcomp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
