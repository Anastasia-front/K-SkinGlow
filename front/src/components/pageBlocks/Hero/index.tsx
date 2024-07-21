import { Button, Section } from 'src/components';

export function Hero() {
	return (
		<Section id="catalog" title="Hero">
			<Button
				label="Catalog"
				$color="var(--color-white)"
				$backgroundColor="var(--color-black)"
				onClick={() => console.info('click')}
			/>
		</Section>
	);
}
