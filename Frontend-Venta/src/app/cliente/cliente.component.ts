import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';

import { dialogClienteComponent } from 'src/dialog/dialogcliente.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst!: any[];

  public columnas: string [] = ['id', 'nombre'];

  constructor(private apicliente: ApiclienteService,
    private dialog: MatDialog) {

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
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getClientes();
    })
  }

}
