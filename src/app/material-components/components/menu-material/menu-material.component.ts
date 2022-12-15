import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth/auth.service';

@Component({
  selector: 'menu-material',
  templateUrl: './menu-material.component.html',
  styleUrls: ['./menu-material.component.scss']
})
export class MenuMaterialComponent implements OnInit {

  @ViewChild('imgLogo')
  public imgLogo: any;

  @ViewChild('drawer')
  public drawer: any;

  public showShortMenuClick = false;

  public showShortMenu = false;

  public styleButtons = {};

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dealMenuMediaQueries();
  }

  private dealMenuMediaQueries() {
    this.breakpointObserver
      .observe(['(max-width: 1739px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showShortMenu = true;
        } else {
          this.showShortMenu = false;
        }
      });
  }

  onClickDownload() {
    const elemA = document.createElement('a');

    elemA.href = 'https://mega.nz/folder/8sBGjRKD#jsiMDqrNqJ7fS9K4wa3HQw';
    elemA.target='target_blank'
    //elemA.download = 'Duendindin.apk';
    elemA.click();

    elemA.remove();

  }

  onClickSair() {
    this.authService.signOut();
    this.router.navigate(['/home']);
  }

}
