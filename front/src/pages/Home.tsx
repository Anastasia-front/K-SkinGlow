import { AboutUs, Bestseller, Hero, InstagramSection, NewArrivals, Wrapper } from '../components';

function Home() {
	return (
		<main>
			<Wrapper>
				<Hero />
				<Bestseller />
				<NewArrivals />
				<AboutUs />
				<InstagramSection />
			</Wrapper>
		</main>
	);
}

export default Home;
