import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { BodyComponent } from './partials/body/body.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MealListComponent } from './pages/meal-list/meal-list.component';

const routes: Routes = [

  { path: 'home', component: BodyComponent, data: { title: 'Home' } },
  { path: 'meal-list', component: MealListComponent, data: { title: 'Meals Available' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'login', component: LoginComponent, data: { title: 'Register' } },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
