import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreviousRouteService } from 'src/modules/shared/services/previous-route.service';
import { UserService } from 'src/modules/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  title = 'portfolioUI';
  clientID = '';
  loginUrl = "http://localhost:4200/home";
  user : any;

  constructor(private router: Router,
    private socialAuthService: SocialAuthService,
    private previousRouteService: PreviousRouteService,
    private userService:UserService) {
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('firstLoad') != 'no'){
      setTimeout(() => {
        sessionStorage.setItem('firstLoad','no');
        window.location.reload();
      }, 1000);
    }
    this.socialAuthService.authState.subscribe((user : SocialUser) => {
      if(user){
        this.userService.setuser= user;
        const previousRoute = this.previousRouteService.getPreviousUrl();
        if (previousRoute) {
          sessionStorage.setItem('firstLoad','')
          this.router.navigate([previousRoute]).then(() => {
            setTimeout(() => {
              this.previousRouteService.deletePreviousUrlKey();
            }, 8500);
          });
        }else{
          this.router.navigate(['home'])
        }
      }
    });
  }

  ngOnDestroy(){
    sessionStorage.setItem('firstLoad','')
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
  
}
