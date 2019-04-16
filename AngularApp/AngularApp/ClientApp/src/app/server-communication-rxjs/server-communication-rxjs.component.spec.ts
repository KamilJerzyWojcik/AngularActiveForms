import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCommunicationRxjsComponent } from './server-communication-rxjs.component';

describe('ServerCommunicationRxjsComponent', () => {
  let component: ServerCommunicationRxjsComponent;
  let fixture: ComponentFixture<ServerCommunicationRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerCommunicationRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCommunicationRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
