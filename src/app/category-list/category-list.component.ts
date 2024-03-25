import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories: Category[];
  selectedCategory: Category | null;
  categoryRepository: CategoryRepository;

  constructor(){
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  selectCategory(category: Category){
    if(this.selectedCategory){
      this.selectedCategory = null;
    }else{
      this.selectedCategory = category;
    }
  }
}
