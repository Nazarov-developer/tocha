import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ModalLoginComponent } from "../modal-login/modal-login.component";
import {ModalRegisterComponent} from "../modal-register/modal-register.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  showMenu?: false;
  loginUser?: false;
  mobileMenu?: boolean;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin() {
    this.mobileMenu = false;
    const dialogRef = this.matDialog.open(ModalLoginComponent, {
      data: {},
      width: '480px',
      height: '502px',
      panelClass: 'large-window',
    });
    dialogRef.afterClosed().subscribe(close => {

    });
  }


  openRegister() {
    this.mobileMenu = false;
    const dialog = this.matDialog.open(ModalRegisterComponent, {
      data: {},
      width: '480px',
      height: '502px',
      panelClass: 'large-window-register',
    });
    dialog.afterClosed().subscribe(close => {

    });
  }

  openMenu() {
    this.mobileMenu = true;
  }

  closeMobile() {
    this.mobileMenu = false;
  }

  outSideClose() {
    this.mobileMenu = false;
  }
}
