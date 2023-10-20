import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoPacienteComponent } from './informacao-paciente.component';

describe('InformacaoPacienteComponent', () => {
  let component: InformacaoPacienteComponent;
  let fixture: ComponentFixture<InformacaoPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacaoPacienteComponent]
    });
    fixture = TestBed.createComponent(InformacaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
