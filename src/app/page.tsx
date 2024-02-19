import { type ProductItem } from "@/ui/types";
import { ProductList } from "@/ui/organisms/ProductList";

export default function Home() {
	const products: ProductItem[] = [
		{
			id: "1",
			price: 20,
			title: "Koszulka Olice",
			category: "merch",
			coverImage: { src: "/tee1.png", alt: "koszulka" },
		},
		{
			id: "2",
			price: 50,
			title: "Koszulka X",
			category: "merch",
			coverImage: { src: "/tee2.png", alt: "koszulka2" },
		},
		{
			id: "3",
			price: 45,
			title: "Koszulka designer X",
			category: "merch",
			coverImage: { src: "/tee3.png", alt: "koszulka3" },
		},
		{
			id: "4",
			price: 55,
			title: "Koszulka plum",
			category: "merch",
			coverImage: { src: "/tee4.png", alt: "koszulka4" },
		},
	];
	return (
		<section className="mx-auto p-12">
			<ProductList products={products} />
		</section>
	);
}
