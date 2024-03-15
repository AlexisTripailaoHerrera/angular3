export interface Causa {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    tramites: Tramite[];
}

export interface Tramite {
    id: number;
    causa: number,
    nombreTramite: string;
    fechaCreacion: Date;
}