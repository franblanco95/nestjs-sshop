import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  readonly id: number;

  @IsNotEmpty({ message: 'El campo Nombre no puede estar vacío' })
  @IsString({ message: 'El precio debe ser un número' })
  readonly name: string;

  @IsNotEmpty({ message: 'El campo Marca no puede estar vacío' })
  @IsString({ message: 'El precio debe ser un número' })
  readonly brand: string;

  @IsNotEmpty({ message: 'El campo Precio no puede estar vacío' })
  @IsNumber()
  readonly price: number;

  @IsNotEmpty({ message: 'El campo Stock no puede estar vacío' })
  @IsNumber()
  readonly stock: number;
}

export class UpdateProductDto {
  readonly id?: number;
  readonly name?: string;
  readonly brand?: string;
  readonly price?: number;
  readonly stock?: number;
}
