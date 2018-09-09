import { PilotService } from './pilot.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Pilot, PilotAttrs } from './pilot';

export class HttpClientMock extends HttpClient {
  constructor() {
    super(null);
  }
}
fdescribe('PilotService', () => {
  let pilotService: PilotService;
  let http: HttpClient;

  beforeEach(() => {
    http = new HttpClientMock();
    pilotService = new PilotService(http);
  });

  describe('getPilot', () => {
    let expectedPilot;

    beforeEach(() => {
      const pilotAttrs = {id: 1, firstName: 'Mike', lastName: 'Tomsky'};
      spyOn(http, 'get').and.returnValue(of(pilotAttrs));
      pilotService.getPilot(1).subscribe((pilot) => expectedPilot = pilot);
    });

    it('should make a request for pilot', () => {
      expect(http.get).toHaveBeenCalledWith('/api/pilots/1');
    });

    it('should return pilot object', () => {
      expect(expectedPilot instanceof  Pilot).toBeTruthy();
    });
  });

  describe('savePilot', () => {
    let pilotAttrs: PilotAttrs;

    describe('when pilot has id', () => {
      beforeEach(() => {
        pilotAttrs = {id: 1, firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
        spyOn(http, 'put').and.returnValue(of(pilotAttrs));
        pilotService.savePilot(pilotAttrs);
      });
      it('should make put request', () => {
        expect(http.put).toHaveBeenCalledWith('/api/pilots/1', pilotAttrs);
      });
    });

    describe('when pilot has not id', () => {
      beforeEach(() => {
        pilotAttrs = {id: null, firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
        spyOn(http, 'post').and.returnValue(of(pilotAttrs));
        pilotService.savePilot(pilotAttrs);
      });
      it('should make post request', () => {
        expect(http.post).toHaveBeenCalledWith('/api/pilots', pilotAttrs);
      });
    });
  });
});
