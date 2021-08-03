import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssdaComponent } from './lista-assda.component';

describe('ListaAssdaComponent', () => {
  let component: ListaAssdaComponent;
  let fixture: ComponentFixture<ListaAssdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAssdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAssdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
