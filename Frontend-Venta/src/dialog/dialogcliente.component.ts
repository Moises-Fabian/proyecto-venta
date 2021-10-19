import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiclienteService } from '../app/services/apicliente.service';
import { cliente } from '../app/models/cliente';

@Component({
  templateUrl: 'dialogcliente.component.html'
})


export class dialogClienteComponent{

    public nombre : string;

    constructor(
      public dialogRef: MatDialogRef<dialogClienteComponent>,
      public apiCliente: ApiclienteService,
      public snackBar: MatSnackBar
    ) { }

    close(){
      this.dialogRef.close();
    }

    addCliente(){
      const cliente: cliente = {nombre: this.nombre};
      this.apiCliente.add(cliente).subscribe(response =>{
          if(response.exito === 1){
            this.dialogRef.close();
            this.snackBar.open('cliente insertado con éxito', '', {
              duration: 2000
            });
          }
      });
    }
}
