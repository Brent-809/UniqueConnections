import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ContactCardComponent } from './contact-card.component';
describe('ContactCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContactCardComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ContactCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-card.component.spec.js.map