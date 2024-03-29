import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ArchivePage } from './archive.page';

describe('ArchivePage', () => {
  let component: ArchivePage;
  let fixture: ComponentFixture<ArchivePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ArchivePage],
        imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
      }).compileComponents();

      fixture = TestBed.createComponent(ArchivePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
