import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { Routes,RouterModule  } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'search', component: SearchComponent },
  // Add more routes if necessary
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
