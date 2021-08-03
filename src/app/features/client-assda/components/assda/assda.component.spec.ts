import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssdaComponent } from './assda.component';

describe('AssdaComponent', () => {
  let component: AssdaComponent;
  let fixture: ComponentFixture<AssdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
