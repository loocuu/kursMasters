import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { type ProductItem } from "../types";

export type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article className="bg-blue-900 p-2">
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
