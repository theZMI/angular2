import { OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export class BaseComponent implements OnDestroy {
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject();

  constructor() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
