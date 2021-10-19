import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
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
      public snackBar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) public cliente: cliente
    ) {
      if (cliente !== null) {
        this.nombre = cliente.nombre;
      }
    }

    close(){
      this.dialogRef.close();
    }

    addCliente(){
      const cliente: cliente = {nombre: this.nombre, id: 0};
      this.apiCliente.add(cliente).subscribe(response =>{
          if(response.exito === 1){
            this.dialogRef.close();
            this.snackBar.open('cliente insertado con éxito', '', {
              duration: 2000
            });
          }
      });
    }

    editCliente(){
      const cliente: cliente = {nombre: this.nombre, id: this.cliente.id};
      this.apiCliente.edit(cliente).subscribe(response =>{
          if(response.exito === 1){
            this.dialogRef.close();
            this.snackBar.open('cliente editado con éxito', '', {
              duration: 2000
            });
          }
      });
    }
}
