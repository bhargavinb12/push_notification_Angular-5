import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { DataService } from './data.service';
import { ArticleComponent } from './article/article.component';

import { ItemsComponent } from './items/items.component';
import { ItemService } from './core/item.service';
import { AddItemComponent } from './add-item/add-item.component';
import { MessagingService } from './messaging.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturedComponent } from './featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    AboutComponent,
    ArticleComponent,
    ItemsComponent,
    AddItemComponent,
    AboutusComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpModule,
    FormsModule,
    
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, DataService, ItemService, MessagingService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
