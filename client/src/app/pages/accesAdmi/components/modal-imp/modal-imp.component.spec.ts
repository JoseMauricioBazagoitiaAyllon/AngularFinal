import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImpComponent } from './modal-imp.component';

describe('ModalImpComponent', () => {
  let component: ModalImpComponent;
  let fixture: ComponentFixture<ModalImpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
