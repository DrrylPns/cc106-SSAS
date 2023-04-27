import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    AppRoutingModule
    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 

  it('should go to about-us page on home', () => {
    spyOn(router, 'navigate');

    component.aboutUs();

    expect(router.navigate).toHaveBeenCalledWith(['about-us']);
  })

  it('should go to home page on logout', () => {
    spyOn(router, 'navigate');

    component.logOut();

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  })
});
