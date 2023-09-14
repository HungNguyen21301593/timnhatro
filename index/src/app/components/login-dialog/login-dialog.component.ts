import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  public phone: string = '';
  constructor(private router: Router, private dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }

  goto() {
    if (!this.phone) {
      return;
    }
    this.router.navigate(['setting', this.phone]);
    this.dialogRef.close();
  }
}
