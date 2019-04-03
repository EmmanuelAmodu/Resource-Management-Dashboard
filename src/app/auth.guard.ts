import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private auth: AuthenticationService,
		private router: Router
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			return new Promise((resolve, reject) => {
				this.auth.isLoggedIn.subscribe((res: any) => {
					if (!res.status) {
						this.router.navigate(['/login']);
						reject(false);
					}
					resolve(true);
				});
			});
	}
}

@Injectable({
	providedIn: 'root'
})
export class NegAuthGuard implements CanActivate {

	constructor(
		private auth: AuthenticationService,
		private router: Router
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			return new Promise((resolve, reject) => {
				this.auth.isLoggedIn.subscribe((res: any) => {
					if (res.status) {
						this.router.navigate(['']);
						reject(false);
					}
					resolve(true);
				});
			});
	}
}


@Injectable({
	providedIn: 'root'
})
export class CanLoadDashBoardSection implements CanLoad {
	constructor(
		private auth: AuthenticationService,
		private router: Router
	) {}

	canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
		return new Promise((resolve, reject) => {
			this.auth.isLoggedIn.subscribe((res: any) => {
				if (res.status) {
					this.router.navigate(['']);
					reject(false);
				}
				resolve(true);
			});
		});
	}
}
