import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGameCardsComponent } from './in-game-cards.component';

describe('InGameCardsComponent', () => {
  let component: InGameCardsComponent;
  let fixture: ComponentFixture<InGameCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InGameCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InGameCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
