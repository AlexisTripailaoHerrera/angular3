import { Component } from '@angular/core';
import { Causa } from '../../models/causa.model';
import { CausaService } from '../../services/causa.service';

@Component({
  selector: 'app-listar-tramites',
  templateUrl: './listar-tramites.component.html',
  styleUrl: './listar-tramites.component.css'
})
export class ListarTramitesComponent {

  causas: Causa[] = [];

  constructor(private causaService: CausaService) { }

  ngOnInit(): void {
    const id = 1;
    this.obtenerCausas(id);
  }

  obtenerCausas(id: number): void {
    this.causaService.obtenerCausa(id).subscribe(causa => this.causas.push(causa));
  }
}
