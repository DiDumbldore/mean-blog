import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsColumnsComponent } from './authors-columns.component';

describe('AuthorsColumnsComponent', () => {
  let component: AuthorsColumnsComponent;
  let fixture: ComponentFixture<AuthorsColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
