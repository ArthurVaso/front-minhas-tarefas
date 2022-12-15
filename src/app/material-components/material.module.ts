import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { InputDateMaterialDirective } from './components/input/input-date-material/input-date-material.directive';
import { TextareaMaterialComponent } from './components/input/textarea-material/textarea-material.component';
import { MenuMaterialComponent } from './components/menu-material/menu-material.component';
import { InputPasswordMaterialComponent } from './components/input/input-password-material/input-password-material.component';
import { InputTextMaterialComponent } from './components/input/input-text-material/input-text-material.component';
import { InputRecurrentPeriodMaterialComponent } from './components/input/input-recurrent-period-material/input-recurrent-period-material.component';
import { InputMaterialComponent } from 'src/app/material-components/base-models/input-material/input-material.component';
import { InputEmailMaterialComponent } from './components/input/input-email-material/input-email-material.component';
import { InputDateMaterialComponent } from './components/input/input-date-material/input-date-material.component';
import { CenteredFormMaterialComponent } from './components/form/centered-form-material/centered-form-material.component';
import { ButtonMaterialComponent } from 'src/app/material-components/base-models/button-material/button-material.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from './material-imports';
import { RouterModule } from '@angular/router';
import { InputSelectMaterialComponent } from './components/input/input-select-material/input-select-material.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ButtonRedirectMaterialComponent } from './components/button/button-redirect-material/button-redirect-material.component';
import { ButtonFormMaterialComponent } from './components/button/button-form-material/button-form-material.component';
import { ButtonDefaultMaterialComponent } from './components/button/button-default-material/button-default-material.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InputCheckboxMaterialComponent } from './components/input/input-checkbox-material/input-checkbox-material.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DialogConfirmationMsgComponent } from './services/dialog/confirmation-dialog/dialog-confirmation-msg/dialog-confirmation-msg.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ButtonDefaultMaterialComponent,
    ButtonFormMaterialComponent,
    ButtonMaterialComponent,
    ButtonRedirectMaterialComponent,
    CenteredFormMaterialComponent,
    InputCheckboxMaterialComponent,
    InputDateMaterialComponent,
    InputEmailMaterialComponent,
    InputMaterialComponent,
    InputRecurrentPeriodMaterialComponent,
    InputSelectMaterialComponent,
    InputTextMaterialComponent,
    InputPasswordMaterialComponent,
    MenuMaterialComponent,
    TextareaMaterialComponent,
    DialogConfirmationMsgComponent,
    InputDateMaterialDirective
  ],
  imports: [
    CommonModule,
    CurrencyMaskModule,
    FormsModule,
    LayoutModule,
    MATERIAL_IMPORTS,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,
  ],
  exports: [
    ButtonDefaultMaterialComponent,
    ButtonFormMaterialComponent,
    ButtonRedirectMaterialComponent,
    CenteredFormMaterialComponent,
    InputCheckboxMaterialComponent,
    InputDateMaterialComponent,
    InputEmailMaterialComponent,
    InputSelectMaterialComponent,
    InputTextMaterialComponent,
    InputPasswordMaterialComponent,
    MenuMaterialComponent,
    TextareaMaterialComponent,
    InputRecurrentPeriodMaterialComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class MaterialModule { }
