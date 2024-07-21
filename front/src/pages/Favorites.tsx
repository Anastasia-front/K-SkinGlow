import { Section } from 'src/components';
import { FetchData } from 'src/components/base/FetchData';

function Favorites() {
	return (
		<main>
			<Section id="favorites" title="Favorites">
				<FetchData />
			</Section>
		</main>
	);
}

export default Favorites;
