import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { DataShareService } from 'src/app/service/data-share.service';
import { data } from 'src/app/components/sidenav/data';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  @ViewChild(NgbDropdown) dropdown!: NgbDropdown;
  data = data;
  constructor(private dataService: DataShareService, private router: Router) { }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 768) {
      this.isMobile = true;
    }
    if (event.target.innerWidth > 768) {
      this.dataService.open('close');
      this.isMobile = false;
    }
  }

  toggle(): void {
    this.dataService.open('open');
  }

  onHover(event: any): void {
    this.dropdown.toggle();
  }

  //change route
  closeDropdown() {
    this.dropdown.close()
  }



  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    }
  }

}
