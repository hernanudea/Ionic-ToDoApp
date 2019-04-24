export class ListaItem {

    descripcion: string;
    completada: boolean;

    constructor(descripcion: string) {
        this.descripcion = descripcion;
        this.completada = false;
    }
}