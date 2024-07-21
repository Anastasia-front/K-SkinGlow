import { Section } from 'src/components';
import { aboutUsParagraphs } from 'src/mockups';
import { Container, List, ListItem } from './styles';

import { ourDirectorAnastasia as source } from 'src/assets';
import { getAltFromSource } from 'src/helpers';

export function AboutUs() {
	return (
		<Section title="About Us">
			<Container>
				<List>
					{aboutUsParagraphs.map((p, index) => (
						<ListItem key={index}>{p}</ListItem>
					))}
				</List>
				<img src={source} width={588} height={450} alt={getAltFromSource(source)} />
			</Container>
		</Section>
	);
}
