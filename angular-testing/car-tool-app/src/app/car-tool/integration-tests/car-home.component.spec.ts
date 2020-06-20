import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';

import { ICar } from '../models/ICar';

import { ToolHeaderComponent } from '../../shared/components/tool-header/tool-header.component';
import { ToolFooterComponent } from '../../shared/components/tool-footer/tool-footer.component';

import { CarTableComponent } from '../components/car-table/car-table.component';
import { CarViewRowComponent } from '../components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from '../components/car-edit-row/car-edit-row.component';
import { CarFormComponent } from '../components/car-form/car-form.component';
import { CarHomeComponent } from '../components/car-home/car-home.component';

describe('Car Home Component Integration Tests', () => {

  let component: CarHomeComponent;
  let fixture: ComponentFixture<CarHomeComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientModule, ],
      declarations: [
        CarHomeComponent, ToolHeaderComponent, ToolFooterComponent,
        CarTableComponent, CarViewRowComponent, CarEditRowComponent,
        CarFormComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onload should refresh cars', async(() => {

    fixture.whenStable().then(() => {

      // need to call this to update all of the components
      fixture.detectChanges();

      // the data downloaded from the REST service
      expect(component.cars.length).toBe(2);

      // check the number of rows in the Car Table
      const carTableBodyRows = fixture.debugElement
        .queryAll(By.css('app-car-table tbody tr'));

      expect(carTableBodyRows.length).toBe(2);

      // check the row columns to ensure they are populated correctly
      const carViewRows = fixture.debugElement
        .queryAll(By.css('.app-car-view-row'));

      carViewRows.forEach( (carViewRow, carViewRowIndex) => {

        const tdElements = Array
          .from(carViewRow.nativeElement.querySelectorAll('td'))
          .slice(0, 6) as HTMLElement[];

        const car = component.cars[carViewRowIndex];
        const price = component
          .cars[carViewRowIndex]
          .price
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,');

        expect(tdElements[0].textContent).toBe(String(car.id));
        expect(tdElements[1].textContent).toBe(String(car.make));
        expect(tdElements[2].textContent).toBe(String(car.model));
        expect(tdElements[3].textContent).toBe(String(car.year));
        expect(tdElements[4].textContent).toBe(String(car.color));
        expect(tdElements[5].textContent).toBe('$' + price);
      });

    });
  }));

  it('should refresh cars when button clicked', async(() => {

    // Use the native element API to query for the button
    // const refreshCarsButton = fixture.nativeElement.querySelector('app-car-table button');

    // Use the debug element API to query for the button
    const refreshCarsButton = fixture.debugElement.query(By.css('app-car-table button')).nativeElement;

    fixture.whenStable()
      .then(() => {

        // click the refresh button
        refreshCarsButton.click();

        // continue when the async operation has completed
        // and components props have been updated
        return fixture.whenStable();

      })
      .then(() => {

        // need to call this to update all of the components
        fixture.detectChanges();

        // the data downloaded from the REST service
        expect(component.cars.length).toBe(2);

        // check the number of rows in the Car Table
        const carTableBodyRows = fixture.debugElement
          .queryAll(By.css('app-car-table tbody tr'));

        expect(carTableBodyRows.length).toBe(2);

        // check the row columns to ensure they are populated correctly
        const carViewRows = fixture.debugElement
          .queryAll(By.css('.app-car-view-row'));

        carViewRows.forEach( (carViewRow, carViewRowIndex) => {

          const tdElements = Array
            .from(carViewRow.nativeElement.querySelectorAll('td'))
            .slice(0, 6) as HTMLElement[];

          const car = component.cars[carViewRowIndex];
          const price = component
            .cars[carViewRowIndex]
            .price
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');

          expect(tdElements[0].textContent).toBe(String(car.id));
          expect(tdElements[1].textContent).toBe(String(car.make));
          expect(tdElements[2].textContent).toBe(String(car.model));
          expect(tdElements[3].textContent).toBe(String(car.year));
          expect(tdElements[4].textContent).toBe(String(car.color));
          expect(tdElements[5].textContent).toBe('$' + price);
        });

      });
  }));

});
