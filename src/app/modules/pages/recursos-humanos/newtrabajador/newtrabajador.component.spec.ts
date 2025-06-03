import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrabajadorComponent } from './newtrabajador.component';

describe('NewtrabajadorComponent', () => {
  let component: NewtrabajadorComponent;
  let fixture: ComponentFixture<NewtrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
