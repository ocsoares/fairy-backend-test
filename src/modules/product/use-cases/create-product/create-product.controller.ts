import { Body, Controller, Post } from "@nestjs/common";
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiInternalServerErrorResponse,
    ApiTags,
} from "@nestjs/swagger";
import { ProductResponse } from "../../responses/ProductResponse";
import { CreateProductService } from "./create-product.service";
import { CreateProductDTO } from "./dtos/CreateProductDTO";

@Controller()
export class CreateProductController {
    constructor(private readonly createProductService: CreateProductService) { }

    @ApiTags("product")
    @ApiBadRequestResponse()
    @ApiInternalServerErrorResponse()
    @ApiCreatedResponse()
    @Post("product")
    async handle(@Body() body: CreateProductDTO): Promise<ProductResponse> {
        return this.createProductService.execute(body);
    }
}
