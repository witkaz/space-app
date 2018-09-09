import { SpaceShipType } from './space-ship-type.enum';
import { OrderFormValue } from './order-form-value';
import { BomberShip } from './bomber-ship';
import { FighterShip } from './fighter-ship';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { SpaceShip } from './space-ship';
import { DestructionFormValue } from './destruction-form-value';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 2000;
  hangarShips = new BehaviorSubject<SpaceShip[]>(JSON.parse(localStorage.getItem('ships') || '[]'));

  constructor() {
    this.hangarShips
      .pipe(map((ships) => JSON.stringify(ships)))
      .subscribe((ships) => localStorage.setItem('ships', ships));
  }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval (SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );
  }

  removeShip(formValues: DestructionFormValue) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(formValues.shipIndex, 1);
    this.hangarShips.next(ships);
  }
}
