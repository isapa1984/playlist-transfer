import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-auth-deezer',
	templateUrl: './auth-deezer.component.html',
	styleUrls: ['./auth-deezer.component.css']
})
export class AuthDeezerComponent implements OnInit {

	constructor(
		private activatedRoute: ActivatedRoute,
		private router : Router
	) { }

	ngOnInit(): void {
		this.activatedRoute.fragment.subscribe((fragments) => console.log(fragments) );
	}

	autenticar() {
		let appId = '551642';
		let redirectUrl = 'http://localhost:4200/deezer';
		let perms = 'basic_access';
		let url = `https://connect.deezer.com/oauth/auth.php?app_id=${appId}&redirect_uri=${redirectUrl}&perms=${perms}&response_type=token`;

		window.location.href = url;
	}

}
