import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAlarmPopupComponent } from './custom-alarm-popup/custom-alarm-popup.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../../core/core.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ItemIconModule } from '../item-icon/item-icon.module';


@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule,
    CoreModule,
    PipesModule,
    ItemIconModule,
    CustomAlarmPopupComponent
]
})
export class CustomAlarmPopupModule {
}
