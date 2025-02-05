import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImnComponent } from './imn.component';

describe('ImnComponent', () => {
  let component: ImnComponent;
  let fixture: ComponentFixture<ImnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
