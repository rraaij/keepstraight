import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CorrectionPage } from './correction.page';

describe('CorrectionPage', () => {
  let component: CorrectionPage;
  let fixture: ComponentFixture<CorrectionPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CorrectionPage],
        imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
      }).compileComponents();

      fixture = TestBed.createComponent(CorrectionPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
