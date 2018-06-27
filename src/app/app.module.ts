import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ApplicationComponent } from './application/application.component';
import { CreateApplicationComponent } from './application/create-application/create-application.component';
import { RecordVoiceComponent } from './shared/record-voice/record-voice.component';
import { InputTagsComponent } from './shared/input-tags/input-tags.component';
import { InputLanguageComponent } from './shared/input-language/input-language.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    ChatRoomComponent,
    ApplicationComponent,
    CreateApplicationComponent,
    RecordVoiceComponent,
    InputTagsComponent,
    InputLanguageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
