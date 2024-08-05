import { FetchData, Section } from 'src/components';
import { routes } from 'src/constants';

const { id, title } = routes.catalog;

function Catalog() {
  return (
    <main>
      <Section id={id} title={title}>
        <FetchData />
      </Section>
    </main>
  );
}

export default Catalog;
