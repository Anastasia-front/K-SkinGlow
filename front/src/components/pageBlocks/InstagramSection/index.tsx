import { Section } from 'src/components';
import { getAltFromSource } from 'src/helpers';

import { creams, girlWithMineralWater, girlWithPatches } from 'src/assets';
import { List } from './styles';

const images = [girlWithMineralWater, girlWithPatches, creams];

export function InstagramSection() {
	return (
		<Section title="Follow Us on Instagram" description="@K-SkinGlow">
			<List>
				{images.map((image, index) => (
					<li key={index}>
						<img src={image} width={384} height={300} alt={getAltFromSource(image)} />
					</li>
				))}
			</List>
		</Section>
	);
}
