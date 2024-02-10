import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StoryCardComponent } from './story-card.component';
describe('StoryCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StoryCardComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(StoryCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=story-card.component.spec.js.map