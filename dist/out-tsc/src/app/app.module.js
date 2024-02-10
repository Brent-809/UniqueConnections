import { __decorate } from "tslib";
import { HTTP_INTERCEPTORS, HttpClientModule, } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy, IonCard } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProfilePageRoutingModule } from "./home/profile/profile-routing.module";
import { ComponentsModule } from "./shared/components/components.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { AuthGuard } from "./shared/guards/auth.guard";
import { register } from "swiper/element/bundle";
import { SocketIoModule } from "ngx-socket-io";
import { environment } from "../environments/environment";
import { OneSignalPlugin } from "onesignal-cordova-plugin";
import { ApiInterceptorService } from "./shared/services/api-interceptor.service";
register();
export function playerFactory() {
    return player;
}
const config = { url: environment.apiUrl, options: {} };
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map