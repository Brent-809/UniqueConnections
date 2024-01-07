import { __decorate } from "tslib";
import { HttpClientModule, } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, IonCard } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageModalPageModule } from './pages/chats/image-modal/image-modal.module';
import { ProfilePageRoutingModule } from './pages/home/profile/profile-routing.module';
import { ComponentsModule } from './components/components.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AuthGuard } from './guards/auth.guard';
import { register } from 'swiper/element/bundle';
import { SocketIoModule } from 'ngx-socket-io';
import { environment } from "../environments/environment";
register();
export function playerFactory() {
    return player;
}
const config = { url: environment.apiUrl, options: {} };
export let AppModule = class AppModule {
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
            ImageModalPageModule,
            ComponentsModule,
            NgxSpinnerModule,
            SocketIoModule.forRoot(config),
        ],
        providers: [
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            IonCard,
            AuthGuard,
        ],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map