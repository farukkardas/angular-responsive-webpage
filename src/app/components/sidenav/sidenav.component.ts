import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DataShareService } from 'src/app/service/data-share.service';
import { data } from './data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  @ViewChild('drawer') myDrawer!: MatDrawer;
 data = data;
  constructor( private dataService:DataShareService) { }

  ngOnInit(): void {
    this.dataService.openSidenav.subscribe({
      next: (message:string) => {
        if(message === 'open') {
          this.myDrawer.toggle();
        }
        if(message === 'close') {
          this.myDrawer.close();
        }
      }
    })
  }


}
