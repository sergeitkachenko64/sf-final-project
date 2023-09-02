import React from 'react';
import Header from '../components/header/HeaderA';
import Banner from '../components/banner/BannerA';
import Carousel from '../components/carousel/Carousel';
import Picture from '../components/picture/Picture';
import Tariffs from '../components/tariffs/Tariffs';
import Footer from '../components/footer/Footer';

function Page3() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Carousel />
				<Picture />
				<Tariffs />
			</main>
			<Footer />
		</>
	);
}

export default Page3;
