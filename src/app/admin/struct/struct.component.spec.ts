/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StructComponent } from './struct.component';

describe('StructComponent', () => {
  let component: StructComponent;
  let fixture: ComponentFixture<StructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
