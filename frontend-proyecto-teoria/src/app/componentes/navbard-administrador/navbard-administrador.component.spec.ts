import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardAdministradorComponent } from './navbard-administrador.component';

describe('NavbardAdministradorComponent', () => {
  let component: NavbardAdministradorComponent;
  let fixture: ComponentFixture<NavbardAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
