import { Injectable } from '@angular/core';
import {
  randNumber,
  randProductCategory,
  randProductDescription,
  randProductName,
  randUrl,
} from '@ngneat/falso';
import { delay, Observable, of, throwError } from 'rxjs';
import { Page, Product } from '../interfaces';

/**
 * A service to handle products.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private static readonly PAGE_SIZE = 3;
  private static readonly PAGE_COUNT = 10;
  private static readonly PAGE_ERROR = 0.1;

  /**
    * Get a page of products.
    *
    * *Note:* This is a fake service that returns random data. It simulates a
    * network request by delaying the response and randomly returning an error.
    *
    * @param page The page number.
    * @returns An observable of the page of products.
    */
  get(page: number): Observable<Page<Product>> {
    let res: Page<Product> | undefined;

    // Generate response
    if (page > ProductService.PAGE_COUNT) {
      res = { more: false, content: [] };
    } else if (page === ProductService.PAGE_COUNT) {
      res = {more: false, content: this.getContent(randNumber({ min: 1, max: ProductService.PAGE_SIZE })) };
    } else if (page >= 0) {
      res = { more: true, content: this.getContent(ProductService.PAGE_SIZE) };
    }

    // Add delay & possible error (based on error chance)
    if (res) {
      return (
        this.randBooleanWeighted(ProductService.PAGE_ERROR)
          ? throwError(() => new Error('500 Internal Server Error'))
          : of(res)
      ).pipe(delay(randNumber({ min: 150, max: 1500 })));
    }

    return throwError(() => new Error('400 Bad Request'));
  }

  /**
    * Get products content.
    *
    * @param length The content length number.
    * @returns An array of product items.
    */
  private getContent(length: number): Product[] {
    return Array.from({ length }, () => ({
      url: randUrl(),
      title: randProductName(),
      description: randProductDescription(),
      image: this.randBooleanWeighted(0.8)
        ? `https://picsum.photos/id/${randNumber({ max: 1000 })}/400/400`
        : null,
      categories: Array.from({ length: randNumber({ max: 5 }) }, () =>
        randProductCategory()
      ),
    }));
  }

  private randBooleanWeighted(trueWeight: number): boolean {
    return randNumber({ max: 1, fraction: 2 }) <= trueWeight;
  }

}
