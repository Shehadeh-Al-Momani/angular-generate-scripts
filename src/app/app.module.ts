import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import {
  HighlightModule,
  HighlightOptions,
  HIGHLIGHT_OPTIONS,
} from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, HighlightModule],
  declarations: [AppComponent, CodeViewerComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        themePath: 'node_modules/highlight.js/styles/androidstudio.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/ts'),
          // cs: () => import('highlight.js/lib/languages/cs'),
          // tsql: () => import('highlight.js/lib/languages/tsql'),
          // css: () => import('highlight.js/lib/languages/css'),
          // xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
})
export class AppModule {}
