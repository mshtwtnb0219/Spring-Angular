import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { CharListComponent } from './char-list/char-list.component';
import { LoginComponent } from './login/login.component';

// ページ遷移処理を実装するにあたり、新規で作成したページを登録する。
const routes: Routes = [
  { path: 'char-list', component: CharListComponent },
  //ルートに場合はpathMatch: 'full'を記述すること
  { path: '', pathMatch: 'full', component: LoginComponent },
  // 詳細画面
  { path: 'chardatail', component: CharDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
