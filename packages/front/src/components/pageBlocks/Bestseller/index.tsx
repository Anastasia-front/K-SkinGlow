import { image } from 'src/assets';
import { Button, ProductCard, Section, Wrapper } from 'src/components';

export function Bestseller() {
	return (
		<Section title="Bestseller">
			<Wrapper>
				<ProductCard
					imagePath={image}
					width="384"
					productName="Revitalizing Youth Protect Serum"
					brand="Radiant Seoul Beauty"
					price="560"
				/>
				<Button
					label="View All"
					$color="var(--color-black)"
					$backgroundColor="var(--color-white)"
					onClick={() => console.info('click')}
				/>
			</Wrapper>
		</Section>
	);
}
