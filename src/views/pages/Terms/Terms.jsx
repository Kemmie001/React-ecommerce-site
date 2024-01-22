import { Wrapper } from "./styles";
import MainLayout from "../../components/Layout/MainLayout";

const Terms = () => {
	const cond = [
		{
			name:
				"Acceptance of Terms and Conditions: By accessing our website and making a purchase, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, please do not use our website.",
			id: 0,
		},
		{
			name:
				"Pricing and Payment: All prices listed on our website are in Naira (NGN)  and are subject to change without notice. We accept payment via  debit card and other payment methods as listed on our website. Payment is required at the time of purchase.",
			id: 1,
		},
		{
			name:
				"Shipping: Our delivery is worldwide. Delivery outside Nigeria takes up to 14 -15 working days while delivery within Nigeria is within 7-10 days.",
			id: 2,
		},
		{
			name:
				"Returns and Exchanges: We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we offer a hassle-free return and exchange policy. You may return or exchange your purchase within 5-7 days of receipt. The item must be in its original condition and packaging for replacement or amendment and a complaint must be lodged to our team within 72 hours of receiving the product you are not satisfied with.",
			id: 3,
		},
		{
			name:
				"Product Information: We make every effort to provide accurate and up-to-date information about our products on our website. However, we do not guarantee the accuracy or completeness of this information. Product images may vary slightly from the actual product due to lighting and other factors.",
			id: 4,
		},
		{
			name:
				"Privacy Policy: We take your privacy seriously and will only use your personal information to process your order and to provide you with information about our products and services. We will not share your information with third parties unless required by law.",
			id: 5,
		},
		{
			name:
				"Intellectual Property: All content on our website, including text, images, logos, and trademarks, is the property of our company or its affiliates and is protected by copyright and other intellectual property laws. You may not use any content from our website without our express written permission.",
			id: 6,
		},
		{
			name:
				"Limitation of Liability: Our liability to you for any damages, including direct, indirect, incidental, special, or consequential damages, arising out of your use of our website or the purchase of our products, is limited to the purchase price of the product in question.",
			id: 7,
		},
		{
			name:
				"Changes to Terms and Conditions: We reserve the right to make changes to these terms and conditions at any time without notice. Your continued use of our website after any changes have been made constitutes your acceptance of the new terms and conditions.",
			id: 8,
		},
	];
	return (
		<MainLayout>
			<Wrapper>
				<div className="about">
					<div className="about-title">
						<h4>Terms and Conditions</h4>
					</div>
					<div className="about-story">
						<h3>
							Welcome to ONIBATA MALL! We are excited to have you as a customer, and we want to make sure
							that you have the best possible shopping experience with us. Please take a moment to review
							our terms and conditions before making any purchases.
						</h3>
						{cond.map((c) => (
							<div key={c.id} className="cond">
								<p></p>
								<p>
									{c.id + 1}. {c.name}
								</p>
							</div>
						))}
						<h4>Thank you for shopping with ONIBATA MALL!</h4>
					</div>
				</div>
			</Wrapper>
		</MainLayout>
	);
};

export default Terms;
