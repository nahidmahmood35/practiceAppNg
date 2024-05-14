import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningMsgComponent } from './warning-msg/warning-msg.component';
import { SucessMsgComponent } from './sucess-msg/sucess-msg.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { DirectiveComponent } from './directive/directive.component';




@NgModule({
  declarations: [
    AppComponent,
    WarningMsgComponent,
    SucessMsgComponent,
    PropertyBindingComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
