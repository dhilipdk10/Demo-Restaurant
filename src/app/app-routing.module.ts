import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenupageComponent } from './menupage/menupage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'menupage', component: MenupageComponent },
  { path: 'aboutpage', component: AboutpageComponent },
  { path: 'contactpage', component: ContactpageComponent },
  {
    path: '',
    redirectTo: 'homePage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
