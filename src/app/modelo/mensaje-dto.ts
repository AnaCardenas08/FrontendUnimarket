import { HttpStatusCode } from "@angular/common/http";

export class MensajeDTO
{
    estado!: HttpStatusCode;
    error!:boolean;
    respuesta:any;

}