import { TestBed } from '@angular/core/testing';

import { MapsService } from './maps.service';

fdescribe('MapsService', () => {
  let mapService: MapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapsService],
    });
    mapService = TestBed.inject(MapsService);
  });

  it('should be created', () => {
    expect(mapService).toBeTruthy();
  });

  it('should save the center', () => {
    //Arrange

    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(
      (successFn) => {
        const mockGeolocation = {
          coords: {
            accuracy: 0,
            altitude: 0,
            altitudeAccuracy: 0,
            heading: 0,
            latitude: 100,
            longitude: 200,
            speed: 0,
          },
          timestamp: 0,
        };
        successFn(mockGeolocation);
      }
    );

    //Act
    mapService.getCurrentPosition();

    //Assert
    expect(mapService.center.lat).toEqual(100);
    expect(mapService.center.lng).toEqual(200);
  });
});
