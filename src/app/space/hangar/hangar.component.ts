import { PilotRoomComponent } from './../pilot-room/pilot-room.component';
import { Pilot } from './../pilot';
import { FighterShip } from './../fighter-ship';
import { BomberShip } from './../bomber-ship';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from './../space-ship';
import { SpaceShipService } from '../space-ship.service';


@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  selectedPilot: Pilot = null;
  spaceShips = this.spaceShipService.hangarShips;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }
}
