import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class Model{
    private products: Product[];
    private locator=( p: Product, id: number) => p.id == id;

    constructor( private dataSource: StaticDataSource){
        //this.products = new Array<Product>();
        this.products = dataSource.getData();
    }
    getProducts(): Product[]{
        return this.products;
    }
    getProduct(id: number): Product{
        return this.products.find( p =>this.locator(p, id));
    }

}