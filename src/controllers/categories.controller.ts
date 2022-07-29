import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `Product con id: ${productId} y categoria ${id}`;
  }
  // Rutas - Endpoints en el controlador
  @Get(':cetegoryId') //Decorador
  getOrders(@Param() params: any) {
    return `Order con id: ${params.cetegoryId}`;
  }
}
