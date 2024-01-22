import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";

const AboutUs = () => {
	const part = [
		{ name: "/assets/partner1.png", id: 0 },
		{ name: "/assets/partner2.png", id: 2 },
		{ name: "/assets/partner3.png", id: 3 },
		{ name: "/assets/partner4.png", id: 4 },
		{ name: "/assets/partner5.png", id: 5 },
		{ name: "/assets/partner6.png", id: 6 },
		{ name: "/assets/partner7.jpeg", id: 7 },
		{ name: "/assets/partner8.jpeg", id: 8 },
		{ name: "/assets/partner9.jpeg", id: 9 },
		{ name: "/assets/partner10.jpeg", id: 10 },
		{ name: "/assets/partner11.jpeg", id: 11 },
		{ name: "/assets/partner12.jpeg", id: 12 },
	];
	return (
		<MainLayout>
			<Wrapper>
				<div className="about">
					<div className="about-title">
						<h4>About Us</h4>
					</div>
					<div className="about-story">
						<p>
							Onibata mall is a home of authentic handcraftyed footwares made by only expectional and
							credible Nigerian Footware brand.
						</p>
						<br />
						<p>
							{" "}
							Our product are mainly Nigerian - made Hand-Crafted Footwares that commands respect from
							anyone and boost your confidence any where you go
						</p>
						<br />
						<p>
							Buying shoes in Nigerian is very 89% risky .At Onibat Mall , our priority is to help you save
							time and aviod the uncertaintaies and risks that comes with buying shoes online{" "}
						</p>
					</div>
					<div className="about-title">
						<h4>Paternerships </h4>
					</div>
					<div className="partner">
						{part.map((p) => (
							<div className="partner-logo" key={p.id}>
								<img src={p.name} alt="" />
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</MainLayout>
	);
};

export default AboutUs;
