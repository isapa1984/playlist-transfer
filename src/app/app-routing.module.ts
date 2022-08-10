import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassoAuthComponent } from './components/passo-auth/passo-auth.component';

const routes: Routes = [
	{path: '', component: PassoAuthComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
