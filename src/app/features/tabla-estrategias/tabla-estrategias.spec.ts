import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEstrategias } from './tabla-estrategias';

describe('TablaEstrategias', () => {
  let component: TablaEstrategias;
  let fixture: ComponentFixture<TablaEstrategias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEstrategias],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaEstrategias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
