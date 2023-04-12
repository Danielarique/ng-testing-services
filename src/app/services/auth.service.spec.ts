import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { Auth } from '../models/auth.model';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

describe('authService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;
  let tokenService: TokenService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, TokenService],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
    tokenService = TestBed.inject(TokenService);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  describe('test for login', ()=>{
    it('should return a token', (doneFn)=>{
      const mockData : Auth = {
        access_token: '123456789'
      }

      const email = 'daniela@gmail.com';
      const password  = '1234';

      authService.login(email,password)
      .subscribe((data)=>{
        expect(data).toEqual(mockData);
        doneFn();
      })

       //http config
       const url = `${environment.API_URL}/api/v1/auth/login`;
       const req = httpController.expectOne(url);
       req.flush(mockData);
    })

    it('should call saveToken', (doneFn)=>{
      const mockData : Auth = {
        access_token: '123456789'
      }

      const email = 'daniela@gmail.com';
      const password  = '1234';
      spyOn(tokenService, 'saveToken').and.callThrough();
      authService.login(email,password)
      .subscribe((data)=>{
        expect(data).toEqual(mockData);
        expect(tokenService.saveToken).toHaveBeenCalledTimes(1);
        expect(tokenService.saveToken).toHaveBeenCalledWith(mockData.access_token);

        doneFn();
      })

       //http config
       const url = `${environment.API_URL}/api/v1/auth/login`;
       const req = httpController.expectOne(url);
       req.flush(mockData);
    })
  })
});
