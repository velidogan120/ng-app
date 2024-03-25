import { Product } from "./product";

export class ProductRepository {
    private products: Product[] = [
        {id:1,name:"Iphone 14",price:20000,imageUrl:"1.jpeg",isActive:true,description:"iyi Telefon"},{id:2,name:"Iphone 15",price:30000,imageUrl:"2.jpeg",isActive:true,description:"iyi Telefon"},{id:3,name:"Iphone 16",price:40000,imageUrl:"3.jpeg",isActive:true,description:"iyi Telefon"}
    ];

    getProducts(): Product[] {
        return this.products.filter(p=>p.isActive);
    }

    getProductById(id: number){
        return this.products.find(p => p.id == id);
    }
}