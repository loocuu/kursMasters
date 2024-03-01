export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return (
		<div data-testid="static-layout" className="text-center text-teal-600">
			{children}
		</div>
	);
}
