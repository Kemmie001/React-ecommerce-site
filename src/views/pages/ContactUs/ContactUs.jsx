import React from "react";
import MainLayout from "../../components/Layout/MainLayout";

import { Wrapper } from "./styles";

const ContactUs = () => {
	return (
		<MainLayout>
			<Wrapper>
				<div className="about">
					<div className="about-title">
						<h4>Contact Us</h4>
					</div>
					<div className="about-story">
						<h3>Phone: 09135255802</h3>
						<h3>Whatsapp: 09080788447</h3>
					</div>
				</div>
			</Wrapper>
		</MainLayout>
	);
};

export default ContactUs;
