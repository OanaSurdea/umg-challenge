import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Page, Product } from '../../interfaces';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {

  // Data
  readonly products$: Observable<Page<Product>> = this._getProducts(1);

  constructor(private readonly productService: ProductService) {}

  public loadMore(): void {
    // ...
  }

  private _getProducts(pageIndex: number): Observable<Page<Product>> {
    return this.productService.get(pageIndex);
  }
}
