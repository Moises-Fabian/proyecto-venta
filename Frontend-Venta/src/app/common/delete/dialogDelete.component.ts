import { Component } from "@angular/core";
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: 'dialogDelete.component.html'
})


export class DialogDeleteComponent{

  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>){}
}
