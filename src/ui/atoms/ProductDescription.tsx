import { type ProductItem } from "../types";

type ProductDescriptionProps = {
	product: ProductItem;
};
export const ProductDescription = ({
	product: { category, title, price },
}: ProductDescriptionProps) => {
	return (
		<div className="flex flex-row content-center items-center justify-between p-2">
			<div className="flex flex-col content-center justify-between">
				<p>{title}</p>
				<p className="text-sm">{category}</p>
			</div>
			<p>{price} zł</p>
		</div>
	);
};
