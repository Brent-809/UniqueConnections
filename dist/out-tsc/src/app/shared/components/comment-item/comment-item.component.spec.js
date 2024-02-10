import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommentItemComponent } from './comment-item.component';
describe('CommentItemComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentItemComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CommentItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=comment-item.component.spec.js.map