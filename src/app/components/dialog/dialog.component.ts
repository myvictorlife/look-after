import {Component, Inject} from  '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';

@Component({
templateUrl:  'dialog.component.html'
})
export  class  DialogComponent {
    constructor(private  dialogRef:  MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
        console.log(data);
    }
    public  closeMe() {
        this.dialogRef.close();
    }
}