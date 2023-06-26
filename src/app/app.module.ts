import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubContentsComponent } from './sub-contents/sub-contents.component';
import { MainContentsComponent } from './main-contents/main-contents.component';
import { subReducer } from './reducer/sub.reducer';
import { SubEffects } from './effects/sub.effects';
import { mainReducer } from './reducer/main.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatIconModule } from '@angular/material/icon';
import { MainEffects } from './effects/main.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubContentsComponent,
    MainContentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ subStore: subReducer, mainStore: mainReducer }),
    EffectsModule.forRoot([SubEffects, MainEffects]),
    StoreDevtoolsModule.instrument({}),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
