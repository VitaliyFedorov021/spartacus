import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  AimSapComparisonPageAbstractComponent,
  AimSapUnsavedChangesService
} from 'ngx-aim-sap-compare-plugin';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngx-aim-sap-comparison-page',
  templateUrl: './aim-sap-comparison-page.component.html',
})
export class AimSapComparisonPageComponent
  implements AimSapComparisonPageAbstractComponent
{
  constructor(
    private unsavedChangesService: AimSapUnsavedChangesService,
    private router: Router
  ) {}

  canDeactivate(): boolean {
    return this.unsavedChangesService.canDeactivate();
  }

  redirectHandler(event: string) {
    this.router.navigate([event]);
  }
}
