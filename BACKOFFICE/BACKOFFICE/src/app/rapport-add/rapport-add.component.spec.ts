import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportAddComponent } from './rapport-add.component';

describe('RapportAddComponent', () => {
  let component: RapportAddComponent;
  let fixture: ComponentFixture<RapportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
