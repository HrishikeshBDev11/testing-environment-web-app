import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSetComponent } from './attribute-set.component';

describe('AttributeSetComponent', () => {
  let component: AttributeSetComponent;
  let fixture: ComponentFixture<AttributeSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
