import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { NgControl } from "@angular/forms";
import { IonicModule, IonicRouteStrategy, IonCard } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RefresherComponent } from "./shared/components/refresher/refresher.component";
import { ProfilePageRoutingModule } from "./home/profile/profile-routing.module";
import { ComponentsModule } from "./shared/components/components.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { AuthGuard } from "./shared/guards/auth.guard";
import { register } from "swiper/element/bundle";
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import { environment } from "src/environments/environment";
import { OneSignalPlugin } from "onesignal-cordova-plugin";
import { ApiInterceptorService } from "./shared/services/api-interceptor.service";
register();

export function playerFactory() {
  return player;
}

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ innerHTMLTemplatesEnabled: true }),
    AppRoutingModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule,
    ProfilePageRoutingModule,
    ComponentsModule,
    NgxSpinnerModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IonCard,
    AuthGuard,
    OneSignalPlugin,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
