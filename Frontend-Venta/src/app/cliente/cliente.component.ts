import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';

import { dialogClienteComponent } from 'src/dialog/dialogcliente.component';
import { MatDialog } from '@angular/material/dialog';
import { cliente } from '../models/cliente';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst!: any[];

  public columnas: string [] = ['id', 'nombre', 'actions'];

  readonly width: string = '300px';

  constructor(private apicliente: ApiclienteService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) {

   }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.apicliente.getClientes().subscribe( response => {
      this.lst = response.data;
    });
  }

  openAdd(){
    const dialogRef = this.dialog.open(dialogClienteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getClientes();
    })
  }

  openEdit(cliente: cliente){
    const dialogRef = this.dialog.open(dialogClienteComponent, {
      width: this.width,
      data: cliente
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getClientes();
    })
  }

 delete(cliente: cliente){
     const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        this.apicliente.delete(cliente.id).subscribe( response =>{
          if (response.exito === 1) {
            this.snackBar.open('Cliente eliminado con éxito', '', {
              duration: 2000
            });
            this.getClientes();
          }
        })
      }
    })
 }
}
