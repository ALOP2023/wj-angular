import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstrategia } from './gestion-estrategia';

describe('GestionEstrategia', () => {
  let component: GestionEstrategia;
  let fixture: ComponentFixture<GestionEstrategia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEstrategia],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionEstrategia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
