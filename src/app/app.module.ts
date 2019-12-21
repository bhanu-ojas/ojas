import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './data.service';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ServicePipe } from './service.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
   
    ServicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,FilterPipeModule,Ng2SearchPipeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
