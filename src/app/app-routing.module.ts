import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDeezerComponent } from './components/auth-deezer/auth-deezer.component';
import { PassoAuthComponent } from './components/passo-auth/passo-auth.component';

const routes: Routes = [
	{path: '', component: PassoAuthComponent},
	{path: 'deezer', component: AuthDeezerComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
