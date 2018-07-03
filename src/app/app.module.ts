import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { MyApplicationComponent } from './components/my-application/my-application.component';
import { CreateApplicationComponent } from './components/my-application/create-application/create-application.component';
import { RecordVoiceComponent } from './shared/record-voice/record-voice.component';
import { InputTagsComponent } from './shared/input-tags/input-tags.component';
import { InputLanguageComponent } from './shared/input-language/input-language.component';
import { PlayerComponent } from './shared/player/player.component';
import { ApplicationComponent } from './shared/application/application.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    ChatRoomComponent,
    MyApplicationComponent,
    CreateApplicationComponent,
    RecordVoiceComponent,
    InputTagsComponent,
    InputLanguageComponent,
    PlayerComponent,
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
