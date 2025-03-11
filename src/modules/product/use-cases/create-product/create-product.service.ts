import { Injectable } from "@nestjs/common";
import { ProductAlreadyRegisteredByCompanyException } from "../../../../exceptions/product/product-already-registered-by-company.exception";
import { ProductRepository } from "../../../../repositories/abstracts/ProductRepository";
import { ProductMapper } from "../../mappers/ProductMapper";
import { ProductResponse } from "../../responses/ProductResponse";
import { CreateProductDTO } from "./dtos/CreateProductDTO";
import { ProductUtils } from "./utils/ProductUtils";

@Injectable()
export class CreateProductService {
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly productMapper: ProductMapper,
        private readonly productUtils: ProductUtils,
    ) { }
    async execute(data: CreateProductDTO): Promise<ProductResponse> {
        const productHash = this.productUtils.generateHash(data);

        const productAlreadyExistsByHash =
            await this.productRepository.findByHash(productHash);

        if (productAlreadyExistsByHash) {
            throw new ProductAlreadyRegisteredByCompanyException();
        }

        const createdProduct = await this.productRepository.create(
            data,
            productHash,
        );

        return this.productMapper.toResponse(createdProduct);
    }
}
