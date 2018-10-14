import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot , CanActivate, Route, Router} from '@angular/router';
import { isNull } from 'util';
@Injectable({
  providedIn: 'root'
})
export class RouteGurdService {

  constructor(private _router: Router) { }

  canActivate( route: ActivatedRouteSnapshot): boolean {
const userName = + route.url[1].path;
console.log('Invalid User' + userName);

if ( isNull( userName ) || userName.toString.length < 0)
{
  console.log('Invalid User');
  alert('Invalid User Name');
  this._router.navigate(['/home']);
  return false;
}
    return true;
  }
}
