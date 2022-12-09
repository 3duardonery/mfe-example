import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  readonly MFE_SELECTOR: string = 'example01-mfe';

  constructor(private injector: Injector) {
    if (!customElements.get(this.MFE_SELECTOR)) {
      const custom = createCustomElement(AppComponent, {
        injector: this.injector,
      });
      customElements.define(this.MFE_SELECTOR, custom);
    }
  }
}
