import { type ProductItem } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const productResponseItemToProductItem = (product: ProductResponseItem): ProductItem => ({
	id: product.id,
	title: product.title,
	price: product.price,
	coverImage: {
		alt: product.title,
		src: product.image,
	},
	category: product.category,
});

export async function getProductsList() {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductItem);
	return products;
}

export async function getProductById(id: ProductResponseItem["id"]) {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItem(productResponse);
}
