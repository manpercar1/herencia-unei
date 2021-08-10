import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantBaseComponent } from './tenant-base.component';

describe('ClientBaseComponent', () => {
  let component: TenantBaseComponent;
  let fixture: ComponentFixture<TenantBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
