import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework";
import { IProductModuleService } from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";
export default async function ProductCreateHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const productModuleService: IProductModuleService = container.resolve(
    Modules.PRODUCT
  );

  const productId = data.id;

  const product = await productModuleService.retrieveProduct(productId);
  console.log(`the product ${product.title} was created`);
}

export const config: SubscriberConfig = {
  event: `product.created`,
};
