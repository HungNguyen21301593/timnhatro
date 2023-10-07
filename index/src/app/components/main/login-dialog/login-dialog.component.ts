import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmptyState } from 'src/app/interfaces/map-state';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  public phone: string = '';
  constructor(private router: Router, private dialogRef: MatDialogRef<LoginDialogComponent>, private webApiService: WebApiService) { }

  ngOnInit() {
  }

  async newState(){
    var result = await this.webApiService.createNewUserState();
    this.router.navigate(['/main/setting', result.id]);
    this.dialogRef.close();
  }
}
