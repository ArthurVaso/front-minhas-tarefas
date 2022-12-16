import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './security/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showMenu = false;

  expandBg = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadMenuAndBGColorBasedOnUserLogged();
  }

  onClickIconBaixar() {

  }

  onMouseOverIconBaixar() {
    this.expandBg = true;
  }

  onMouseOutIconBaixar() {
    this.expandBg = false;
  }

  private loadMenuAndBGColorBasedOnUserLogged() {
    this.router.events.subscribe(val => {
      if(val instanceof NavigationEnd) {
        const navEvent = (val as NavigationEnd);
        const url = navEvent.url;

        const body =  document.querySelector('body');

        if(this.authService.isLogged()) {
          this.showMenu = true;
          this.addRemoveClass('bg-white', 'bg-home-green', body);
        } else {
          this.showMenu = false;
          (this.urlEhHome(url)) ?
            this.addRemoveClass('bg-home-green', 'bg-white', body) :
            this.addRemoveClass('bg-white', 'bg-home-green', body);
        }

      }
    });
  }

  private urlEhHome(url: string): boolean {
    return ['/', '/home'].includes(url);
  }

  private addRemoveClass(classAdded: string, classRemoved: string, element: HTMLBodyElement | null): void {
    element?.classList.add(classAdded);
    element?.classList.remove(classRemoved);
  }
}
