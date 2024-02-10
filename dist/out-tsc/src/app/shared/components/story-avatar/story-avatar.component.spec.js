import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StoryAvatarComponent } from './story-avatar.component';
describe('StoryAvatarComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StoryAvatarComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(StoryAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=story-avatar.component.spec.js.map