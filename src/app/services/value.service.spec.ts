import { TestBed } from '@angular/core/testing';
import { async } from 'rxjs/internal/scheduler/async';

import { ValueService } from './value.service';

fdescribe('ValueService', () => {
  let service: ValueService;

   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ValueService]
    });
    service = TestBed.inject(ValueService);
  });
 

/*   beforeEach(()=>{
    service = new ValueService();
  }) */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fdescribe('test for getValue', ()=>{
    it('should return "my value"', ()=>{
      expect(service.getValue()).toBe('my value');
    })
  })

  fdescribe('test for setValue', ()=>{
    it('should change the value', ()=>{
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change')
    })
  })

  fdescribe('test for getPromiseValue', ()=>{
    it('should return promise value', (doneFn)=>{
     service.getPromiseValue()
     .then((value)=>{
      expect(value).toBe('promise value');
      doneFn();
     })
    })
  })

  fdescribe('test for getPromise value', ()=>{
    it('should return promise value for promise', async()=>{
      const rta = await service.getPromiseValue();
      expect(rta).toBe('promise value')
    })
  })
   fdescribe('test for getObservableValue', ()=>{
    it('should return observable value from observable', async()=>{
      const rta = await service.getObservableValue()
      .subscribe(value=>{
        expect(value).toBe('observable value')

      });
    })
  }) 
});

