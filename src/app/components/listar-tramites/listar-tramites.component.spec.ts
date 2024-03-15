import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTramitesComponent } from './listar-tramites.component';

describe('ListarTramitesComponent', () => {
  let component: ListarTramitesComponent;
  let fixture: ComponentFixture<ListarTramitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTramitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
