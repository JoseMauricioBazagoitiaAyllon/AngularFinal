import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSueldoComponent } from './modal-sueldo.component';

describe('ModalSueldoComponent', () => {
  let component: ModalSueldoComponent;
  let fixture: ComponentFixture<ModalSueldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSueldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSueldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
