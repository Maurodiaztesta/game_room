import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhackAMoleComponent } from './pages/whack-a-mole/whack-a-mole.component';
import { FindTreasureComponent } from './pages/find-treasure/find-treasure.component';
import { MemoComponent } from './pages/memo/memo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'whackamole', component: WhackAMoleComponent },
  { path: 'findthetreasure', component: FindTreasureComponent },
  { path: 'memo', component: MemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
