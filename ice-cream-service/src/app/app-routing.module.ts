import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: 'login', component: LoginpageComponent},
  { path: 'signup', component: SignuppageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
