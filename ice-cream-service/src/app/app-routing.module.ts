import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: 'login', component: LoginpageComponent},
  { path: 'signup', component: SignuppageComponent},
  { path: 'account', component: AccountpageComponent},
  { path: 'search', component: SearchpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
