import { ProductoGetDTO } from "./producto-get-dto";

export class DetalleCompraDTO 
{
    codigoProduco:number =1;
    unidades:number = 20;
    precio:number = 30500;
    producto: ProductoGetDTO = new ProductoGetDTO(
        1,
        "disponible",
        "2023-05-27T10:00:00",
        "Nombre del producto",
        "Descripción del producto",
        1,
        100,
        1,
        "ruta-de-imagen",
        "Categoría del producto"
    )
}