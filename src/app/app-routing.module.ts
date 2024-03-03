import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenupageComponent } from './menupage/menupage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'homePage/menupage', component: MenupageComponent },
  { path: 'homePage/aboutpage', component: AboutpageComponent },
  { path: 'homePage/contactpage', component: ContactpageComponent },
  {
    path: '',
    redirectTo: 'homePage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
