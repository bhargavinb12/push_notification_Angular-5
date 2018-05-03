import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { ArticleComponent } from './article/article.component';
import { FeaturedComponent } from './featured/featured.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'about', component: AboutComponent},
 { path: 'aboutus', component: AboutusComponent},
 { path: 'items', component: ItemsComponent},
 { path: 'add-item', component: AddItemComponent},
 { path: 'article', component: ArticleComponent},
 { path: 'featured', component: FeaturedComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];
