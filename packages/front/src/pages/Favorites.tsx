import { FetchData, Section } from 'src/components';

import { routes } from 'src/constants';

const { id, title } = routes.favorites;

function Favorites() {
  return (
    <main>
      <Section id={id} title={title}>
        <FetchData />
      </Section>
    </main>
  );
}

export default Favorites;
