import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepComponent } from './modal-dep.component';

describe('ModalDepComponent', () => {
  let component: ModalDepComponent;
  let fixture: ComponentFixture<ModalDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
