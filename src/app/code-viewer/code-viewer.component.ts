import { Component, Input, OnInit } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';
const themeAndroidStudio: string =
  'node_modules/highlight.js/styles/androidstudio.css';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.less'],
})
export class CodeViewerComponent implements OnInit {
  @Input() fileName: string = '';
  code: string = `
  IF NOT EXISTS(SELECT * FROM TRANSLATION WITH(NOLOCK) WHERE [CODE] = 'ACCESS_TO_REPORTS' AND LANGUAGE_CODE = 'en' AND TYPE ='Lookups')
BEGIN
  INSERT [dbo].[TRANSLATION] ([VALUE], [LANGUAGE_CODE], [CODE], [TYPE])
    VALUES ('Access To Reports','en', 'ACCESS_TO_REPORTS', 'Lookups')
END; `;

  constructor(private hljsLoader: HighlightLoader) {
    this.hljsLoader.setTheme(themeAndroidStudio);
  }

  ngOnInit(): void {
    // replace the code above with your actual code
  }
}
