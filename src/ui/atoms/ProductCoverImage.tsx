export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => (
	<div className="aspect-square overflow-hidden rounded bg-slate-900 p-2">
		<img
			className="h-full w-full object-cover object-center hover:-scale-x-100"
			width={320}
			height={320}
			src={src}
			alt={alt}
		/>
	</div>
);
