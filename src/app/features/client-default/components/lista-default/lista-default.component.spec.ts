import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDefaultComponent } from './lista-default.component';

describe('ListaDefaultComponent', () => {
  let component: ListaDefaultComponent;
  let fixture: ComponentFixture<ListaDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
