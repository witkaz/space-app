import { Component, OnInit, Input } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { SpaceShipType } from '../space-ship-type.enum';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {
  @Input() spaceShip: SpaceShip;
  constructor() { }

  ngOnInit() {
  }
}
