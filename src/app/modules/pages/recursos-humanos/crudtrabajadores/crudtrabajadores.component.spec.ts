import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDTrabajadoresComponent } from './crudtrabajadores.component';

describe('CRUDTrabajadoresComponent', () => {
  let component: CRUDTrabajadoresComponent;
  let fixture: ComponentFixture<CRUDTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDTrabajadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
