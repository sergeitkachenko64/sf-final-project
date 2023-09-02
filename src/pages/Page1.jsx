import React from 'react';
import Header from '../components/header/HeaderU';
import Banner from '../components/banner/BannerU';
import Carousel from '../components/carousel/Carousel';
import Picture from '../components/picture/Picture';
import Tariffs from '../components/tariffs/TariffsU';
import Footer from '../components/footer/Footer';

function Page1() {
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

export default Page1;
