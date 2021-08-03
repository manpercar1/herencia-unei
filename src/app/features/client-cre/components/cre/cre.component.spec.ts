import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreComponent } from './cre.component';

describe('CreComponent', () => {
  let component: CreComponent;
  let fixture: ComponentFixture<CreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
