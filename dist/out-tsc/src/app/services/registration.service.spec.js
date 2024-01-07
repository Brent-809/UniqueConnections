import { TestBed } from '@angular/core/testing';
import { RegistrationService } from './registration.service';
describe('RegistrationService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RegistrationService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=registration.service.spec.js.map