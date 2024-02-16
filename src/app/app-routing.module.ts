import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenupageComponent } from './menupage/menupage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import().then( m => m.HomePageModule)
  // },
  { path: 'homePage', component: HomePageComponent },
  { path: 'homePage/menupage', component: MenupageComponent },
  { path: 'homePage/about', component: AboutpageComponent },
  {
    path: '',
    redirectTo: 'homePage',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
