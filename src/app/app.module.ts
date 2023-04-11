import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { WhackAMoleComponent } from './pages/whack-a-mole/whack-a-mole.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FindTreasureComponent } from './pages/find-treasure/find-treasure.component';
import { FormsModule } from '@angular/forms';
import { MemoComponent } from './pages/memo/memo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhackAMoleComponent,
    HomeComponent,
    FooterComponent,
    FindTreasureComponent,
    MemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
