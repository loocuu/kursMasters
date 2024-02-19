import { type ProductItem } from "../types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductItem[] }) => {
	return (
		<ul data-testid="products-list" className="grid gap-8 md:grid-cols-2  xl:grid-cols-4">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
