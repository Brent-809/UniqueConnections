import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GroupCardComponent } from './group-card.component';
describe('GroupCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupCardComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(GroupCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=group-card.component.spec.js.map