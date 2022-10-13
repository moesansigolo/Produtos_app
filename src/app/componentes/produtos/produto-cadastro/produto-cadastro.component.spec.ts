import { ProdutoCadastroComponent } from './produto-cadastro.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('ProdutoCadastroComponent', () => {
  let component: ProdutoCadastroComponent;
  let fixture: ComponentFixture<ProdutoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
