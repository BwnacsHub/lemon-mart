import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule,
         MatInputModule, MatSnackBarModule, MatDialogModule, MatSidenavModule, MatListModule,
        } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSnackBarModule, MatDialogModule, MatSidenavModule, MatListModule,
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSnackBarModule, MatDialogModule, MatSidenavModule, MatListModule,
  ]
})
export class MaterialModule { }
