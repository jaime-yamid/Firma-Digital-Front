import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/pages/login/login.component';
//HOME
import { HomeComponent } from './modules/home-user/pages/home/home.component';
//SIGN
import { SignDocumentComponent } from './modules/home-user/pages/sign-document/sign-document.component';
import { DashboardComponent } from './modules/home-user/pages/dashboard/dashboard.component';
import { ManagementDocumentsComponent } from './modules/home-user/pages/management-documents/management-documents.component';
import { SettingComponent } from './modules/home-user/pages/setting/setting.component';
import { SignUpComponent } from './modules/authentication/pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent,
  children: [
    {path: "dashboard", component: DashboardComponent},
    {path: "sign-document", component: SignDocumentComponent},
    {path: "management-document", component: ManagementDocumentsComponent},
    {path: "settings", component: SettingComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireccionar a 'login' por defecto
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
