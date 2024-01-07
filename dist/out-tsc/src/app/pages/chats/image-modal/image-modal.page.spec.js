import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ImageModalPage } from './image-modal.page';
describe('ImageModalPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImageModalPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ImageModalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=image-modal.page.spec.js.map