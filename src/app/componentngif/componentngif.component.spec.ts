import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentngifComponent } from './componentngif.component';

describe('ComponentngifComponent', () => {
  let component: ComponentngifComponent;
  let fixture: ComponentFixture<ComponentngifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentngifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
