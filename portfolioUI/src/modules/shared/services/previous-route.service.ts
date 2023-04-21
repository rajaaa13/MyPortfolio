import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  setPreviousUrl(url: string) {
    sessionStorage.setItem('previousUrl', url);
  }

  getPreviousUrl() {
    const previousUrl = sessionStorage.getItem('previousUrl');
    return previousUrl;
  }

  deletePreviousUrlKey() {
    sessionStorage.removeItem('previousUrl');
  }
}