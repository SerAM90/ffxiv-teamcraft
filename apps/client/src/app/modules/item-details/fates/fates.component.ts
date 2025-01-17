import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemDetailsPopup } from '../item-details-popup';
import { LazyRowPipe } from '../../../pipes/pipes/lazy-row.pipe';
import { XivapiIconPipe } from '../../../pipes/pipes/xivapi-icon.pipe';
import { I18nRowPipe } from '../../../core/i18n/i18n-row.pipe';
import { I18nPipe } from '../../../core/i18n.pipe';
import { AsyncPipe } from '@angular/common';
import { DbButtonComponent } from '../../../core/db-button/db-button.component';
import { FlexModule } from '@angular/flex-layout/flex';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
    selector: 'app-fates',
    templateUrl: './fates.component.html',
    styleUrls: ['./fates.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NzListModule, FlexModule, DbButtonComponent, AsyncPipe, I18nPipe, I18nRowPipe, XivapiIconPipe, LazyRowPipe]
})
export class FatesComponent extends ItemDetailsPopup {
}
