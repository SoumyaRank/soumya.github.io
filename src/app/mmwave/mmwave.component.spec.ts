import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmwaveComponent } from './mmwave.component';

describe('MmwaveComponent', () => {
  let component: MmwaveComponent;
  let fixture: ComponentFixture<MmwaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmwaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmwaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
