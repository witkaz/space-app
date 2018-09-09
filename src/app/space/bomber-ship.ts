import { Pilot } from './pilot';
import { SpaceShip } from './space-ship';

export class BomberShip extends SpaceShip {
  constructor (pilot?: Pilot) {
    super('Ben', '/assets/space-ships/ben.png', pilot);
  }
}
