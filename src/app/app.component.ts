import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CategoryListComponent } from "./category-list/category-list.component";

@Component({
    selector: 'app',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductListComponent, NavbarComponent, CategoryListComponent]
})
export class AppComponent {
  title = 'Home Page';
}
