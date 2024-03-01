import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function SuggestedProductsList() {
	const products = await getProductsList();
	await sleep(2000);
	return <ProductList products={products.slice(-4)} />;
}
