import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: 'dev-gkpo58wq.us.auth0.com',
      clientId: '02GE3wbNJDho8KnW2y5AwFGPc9upR2ad',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
