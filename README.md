# Products | Coding Challenge

Welcome to this coding challenge, don't worry, there is no perfect solution.
Take few minutes to read through this README to get you started and know the requirements.

## Setup description

You will find a `ProductService` in `/app/features/products/services`
that you should be using for your implementation. Do not change its implementation.

The `ProductService` exposes a single method `get()`, which returns an 
[RxJS](https://rxjs.dev/) Observable holding a paginated list of product entities.

### RxJS

As of now, the `App` only displays the one `products` page containing a `products-list`.

A "Load More" button is already in place though. Utilize RxJS to implement the functionality of this button
by loading the next page of products and append it's contents to the current page products, whenever the user clicks it.

Give the user feedback while loading data and handle errors gracefully.

### Tasks Summary (in order of importance)

1. [] Clicking "Load More" should append more products each time.
2. [] Display a loading indicator, as needed.
3. [] Handle `get()` errors
4. [] CSS: auto arrange the product cards horizondally on bigger screens and keep them vertical on small screens.

### Tips

- Ideally, the code should be as reactive as possible.