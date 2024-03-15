import { Component, OnInit } from '@angular/core';
import { Causa } from '../../models/causa.model';
import { CausaService } from '../../services/causa.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  causas: Causa[] = [];

  constructor(private causaService: CausaService){}

  ngOnInit(): void {
    const id = 1;
    this.obtenerCausas(id);
  }

  obtenerCausas(id: number): void {
    this.causaService.obtenerCausa(id).subscribe(causa => this.causas.push(causa));
  }
}
