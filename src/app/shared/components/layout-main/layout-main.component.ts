import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackInfoComponent } from '../snack-info/snack-info.component';
import { DataSnackBarInfo, toggleMemory } from '../../models/shared.interfaces';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {
  valueColorTheme: boolean = false;
  operator: boolean = false;
  constructor(@Inject(DOCUMENT) public document: Document, private snackBar: MatSnackBar, private sharedService: SharedService, private router: Router ) {}
  ngOnInit(): void {
    this.sharedService.toggleValueOBS.subscribe(res => {
      this.valueColorTheme = res;
      this.changeTheme();

    });

    this.operator = localStorage.getItem('authLogin') === 'true' ? true : false;


  }

  changeTheme() {
    this.valueColorTheme ? this.document.body.classList.add('dark-mode') : this.document.body.classList.remove('dark-mode');
   

  }

  goLogin() {

    const isLog =  localStorage.getItem('authLogin');

    if (isLog && isLog === 'true') {

      this.router.navigateByUrl('worker/app').then();
      
    } else {
      this.router.navigateByUrl('worker/login').then();

    }
    

  }


  logout() {

    this.router.navigateByUrl('worker/login').then(() => {
      localStorage.removeItem('authLogin');
      window.location.reload();

    });
  }

  change() {
    this.changeTheme();
    this.snackBar.openFromComponent<SnackInfoComponent, DataSnackBarInfo >(SnackInfoComponent, {
      data: this.valueColorTheme ? {text: 'Dark mode abilitato' }  :  {text: 'Dark mode disabilitato' }  ,
      horizontalPosition: 'end',
      duration: 2000
    });
    this.sharedService.nextToggleValue(this.valueColorTheme);
    localStorage.setItem(toggleMemory, this.valueColorTheme+'' )
  }

}
