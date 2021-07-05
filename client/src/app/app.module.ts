import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooderComponent } from './shared/components/fooder/fooder.component';
import {MaterialModule} from './material.model';
import { SidebarModule } from './shared/components/sidebar/sidebar.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AdminInterceptor } from './shared/interceptors/admi-interceptor';
import { ModalComponent } from './pages/empleados/components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    HttpClientModule
    ,MatTableModule,
    ReactiveFormsModule 
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AdminInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
