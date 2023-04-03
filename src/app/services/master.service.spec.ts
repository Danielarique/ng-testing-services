import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

fdescribe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>
   beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [MasterService,
      { provide: ValueService, useValue: spy}]
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;

    
  });
  
  it('should be create', ()=>{
    expect(MasterService).toBeTruthy();
  })
  it('should call to getValue from ValueService', () => {
  //  const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    valueServiceSpy.getValue.and.returnValue('fake value');
    /* let masterService = new MasterService(valueServiceSpy); */
    expect(masterService.getValue()).toBe('fake value')
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1)
  });
});
