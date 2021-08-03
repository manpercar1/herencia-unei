import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCreComponent } from './lista-cre.component';

describe('ListaCreComponent', () => {
  let component: ListaCreComponent;
  let fixture: ComponentFixture<ListaCreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
