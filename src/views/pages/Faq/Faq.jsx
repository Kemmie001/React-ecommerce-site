import React from 'react'
import { Wrapper } from "./styles";
import MainLayout from "../../components/Layout/MainLayout";

const Faq = () => {
  const qa = [
		{
			q:
				" What types of footwear do you sell?",
        a:' We sell a wide variety of footwear, including Leather sneakers, sandals, boots, dress shoes, Corporate shoes (Brogues,Monkstrap, Loafers) and more.',
			id: 0,
		},
		{
			q:
				" What sizes do you offer?",
			
      a:'We offer footwear in a range of sizes, from small to large, including half sizes and wide widths for select styles.',
        id: 1,
		},
		{
			q:
				"How do I determine my shoe size?",
			
      a:'We recommend measuring your foot and referring to our size chart for the most accurate fit.',
        id: 2,
		},
		{
			q:
				"Do you offer free shipping?",
			
      a:'Yes, we offer free standard shipping on orders over a certain amount. Please refer to our shipping policy for more information. Or no, we only offer free shipping when free shipping promotions are available.',
        id: 3,
		},
		{
			q:
				"What is your return policy?",
			
      a:' We offer free returns on all unworn merchandise within a certain timeframe. Please refer to our return policy for more information.',
        id: 4,
		},
		{
			q:
				"Can I track my order?",
			
      a:'Yes, we provide tracking information for all orders. You will receive an email with tracking information once your order has shipped.',
        id: 5,
		},
		{
			q:
				"What payment methods do you accept?",
			
      a:'We accept all major credit cards, PayPal, and Apple Pay.',
        id: 6,
		},
		{
			q:
				"Do you offer any discounts or promotions?",
			
      a:'Yes, we offer discounts and promotions throughout the year. Please sign up for our newsletter to receive updates on our latest deals and offers.',
        id: 7,
		},
		{
			q:
				"How do I care for my footwear? ",
			
      a:'We recommend following the care instructions provided with your footwear. For general care, we suggest cleaning them regularly and using a protective spray or polish to keep them looking their best.',
        id: 8,
		},
	];
  return (
    <MainLayout>
    <Wrapper>
      <div className="about">
        <div className="about-title">
          <h4>ONIBATA MALL FAQ’S</h4>
        </div>
        <div className="about-story">
          {qa.map((c) => (
            <div key={c.id} className="cond">
              <p></p>
              <h4 className='question'>
                Q:{c.q}
              </h4>
              <p className='question'>
                A:{c.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  </MainLayout>
  )
}

export default Faq