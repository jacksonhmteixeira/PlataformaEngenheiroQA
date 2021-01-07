import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAfiliadosComponent } from './meus-afiliados.component';

describe('MeusAfiliadosComponent', () => {
  let component: MeusAfiliadosComponent;
  let fixture: ComponentFixture<MeusAfiliadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAfiliadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
