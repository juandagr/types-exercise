import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PageListComponent
  },
  {
    path: 'detail/:id',
    component: PageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }