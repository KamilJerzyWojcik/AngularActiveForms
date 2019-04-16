import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormExampleComponent } from './form-template-driven/form-example/form-example.component';
import { FormModelDrivenComponent } from './form-model-driven/form-model-driven.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FieldsMatchDirective } from './directives/validation/fields-match.directive';
import { ValidationFeedbackComponent } from './form-validation/validation-feedback/validation-feedback.component';
import { ServerCommunicationRxjsComponent } from './server-communication-rxjs/server-communication-rxjs.component';
import { ProfileComponent } from './server-communication-rxjs/profile/profile/profile.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FormTemplateDrivenComponent,
    FormExampleComponent,
    FormModelDrivenComponent,
    FormValidationComponent,
    FieldsMatchDirective,
    ValidationFeedbackComponent,
    ServerCommunicationRxjsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'form-template-driven', component: FormTemplateDrivenComponent },
      { path: 'form-model-driven', component: FormModelDrivenComponent },
      { path: 'form-validation', component: FormValidationComponent },
      {path: 'server-communication-rxjs', component: ServerCommunicationRxjsComponent}
    ])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],
  exports: [FieldsMatchDirective]
})
export class AppModule { }
