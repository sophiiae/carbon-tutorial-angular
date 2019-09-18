import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TutorialHeaderComponent } from "./tutorial-header.component";

import { HeaderModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

import { Notification20 } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';

describe("TutorialHeaderComponent", () => {
  let component: TutorialHeaderComponent;
  let fixture: ComponentFixture<TutorialHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialHeaderComponent ],
      imports: [ 
        HeaderModule,
        Notification20, 
        UserAvatar20Module, 
        AppSwitcher20Module 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
