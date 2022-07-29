import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // Recibiendo parametros tipo query
  @Get()
  getAllProducts(
    @Query('limit') limit = 100, // Saca el tipado del numero. Parametro declarados por defecto
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    // http://localhost:3000/products?offset=1&brand=apple
    // return {
    //   message: `Limit: ${limit}, offset ${offset}, y brand ${brand}`,
    // };
    return {
      status: 'ok',
      data: this.productsService.findAll(),
    };
  }

  // Recibe parametro
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    //Llamamos decorador Param de Nest para obtener parametros de la URL
    return {
      status: 'ok',
      data: this.productsService.findOne(+productId),
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Producto Creado',
      payload: this.productsService.createProduct(payload),
    };
  }

  @Put(':productId')
  updateProduct(@Param('productId') productId: string, @Body() payload: any) {
    return {
      status: 'Ok',
      message: `Producto con id: ${productId} actualizado`,
      payload: this.productsService.updateProduct(+productId, payload),
    };
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string) {
    return {
      status: 'ok',
      message: `Producto ${productId} eliminado`,
      payload: this.productsService.deleteProduct(+productId),
    };
  }
}
