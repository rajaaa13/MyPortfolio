import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
declare var anime: any; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  showTitle = false;
  dropdownClicked = false;
  userObject : SocialUser = {
    provider: '',
    id: '',
    email: '',
    name: '',
    photoUrl: '',
    firstName: '',
    lastName: '',
    authToken: '',
    idToken: '',
    authorizationCode: '',
    response: undefined
  };
  imageError : boolean = false;
  constructor(private router: Router,
              private userService:UserService,
              private socialAuthService:SocialAuthService) {

  }

  ngOnInit(){
    this.userObject = this.userService.user;
    this.userObject.photoUrl ? this.imageError = false : this.imageError = true;
  }

  ngAfterViewInit(): void {
    this.showTitle = false;
    anime.timeline({loop: true})
    .add({
      targets: '.logo-name .word',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el : any, i : any) => 800 * i
    }).add({
      targets: '.logo-name',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
    setTimeout(() => {
      this.showTitle = true;
    }, 20000);
  }

  logOutWithGoogle(): void {
    this.socialAuthService.signOut().then(d =>{
      sessionStorage.setItem('firstLoad','');
      this.userService.setuser =new SocialUser();
      this.router.navigate(['login']);
    }
    );
  }


}
