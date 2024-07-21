import { NavLink } from 'react-router-dom';

import { routes } from 'src/constants';

import { Icon } from 'src/components/base';
import { List, ListItem } from './styles';

export function Icons() {
	return (
		<List>
			<ListItem>
				<button onClick={() => console.info('search')}>
					<Icon name="search" />
				</button>
			</ListItem>
			<ListItem>
				<NavLink to={routes.favorites.path}>
					<Icon name="favorite" width={22} height={22} />
				</NavLink>
			</ListItem>
			<ListItem>
				<NavLink to={routes.cart.path}>
					<Icon name="bag" />
				</NavLink>
			</ListItem>
		</List>
	);
}
