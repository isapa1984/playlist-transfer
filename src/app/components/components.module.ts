import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AuthDeezerComponent } from './auth-deezer/auth-deezer.component';
import { AuthSpotifyComponent } from './auth-spotify/auth-spotify.component';
import { PlaylistEditorComponent } from './playlist-editor/playlist-editor.component';
import { TransferProgressComponent } from './transfer-progress/transfer-progress.component';
import { PassoAuthComponent } from './passo-auth/passo-auth.component';

@NgModule({
	declarations: [
		AuthDeezerComponent,
		AuthSpotifyComponent,
		PlaylistEditorComponent,
		TransferProgressComponent,
		PassoAuthComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCardModule,
		MatDividerModule
	]
})
export class ComponentsModule { }
