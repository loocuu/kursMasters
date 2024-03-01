import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<div className="flex flex-col items-center">
			<article className="mb-10 max-w-xs bg-blue-900 p-2">
				<h1>ProductPage</h1>
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductDescription product={product} />
			</article>

			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</div>
	);
}
