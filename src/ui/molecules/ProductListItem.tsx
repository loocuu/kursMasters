import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { type ProductItem } from "../types";

export type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="bg-blue-900 p-2">
					<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
