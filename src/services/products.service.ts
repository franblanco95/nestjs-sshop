import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

// Los servicios siempre llevan el decorador de Injectable

@Injectable()
export class ProductsService {
  private counterId = 2;
  private products: Product[] = [
    {
      id: 1,
      name: 'Dunk Low',
      brand: 'Nike',
      price: 100,
      stock: 1,
    },
    {
      id: 2,
      name: 'Jordan Travis Scott',
      brand: 'Nike',
      price: 200,
      stock: 10,
    },
  ];

  findAll() {
    // This porque es un atributo de la clase
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    } else {
      return product;
    }
  }

  createProduct(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, payload: any) {
    console.log(id, payload);
    const product = this.findOne(id);
    console.log(product);
    if (product) {
      console.log('aca');
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    } else {
      return null;
    }
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product ${id} not found`);
    } else {
      this.products.splice(index, 1);
      return true;
    }
  }
}
