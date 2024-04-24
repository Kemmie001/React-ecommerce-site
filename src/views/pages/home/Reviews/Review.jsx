import { FaStar } from "react-icons/fa";
import { Wrapper } from "./styles";

const Review = () => {
  const revs = [
    {
      name: "Seun Adenle",
      state: "Abuja, Nigeria",
      comment:
        "Onibata mall! My Whole experience with this brand has been amazing! Every product received are perfectly fit. I got exactly what I ordered.",
      id: 0,
    },
    {
      name: "Phizle",
      state: "Ogun, Nigeria",
      comment:
        "It’s the swiftness in delivery and excellent customer service for me! I love your designs so damn much. I have been patronizing Onibata mall since 2020 and I have never for once regretted I chose them. Keep up the Good work!",
      id: 1,
    },
    {
      name: "Shadrach Damilare",
      state: "Lagos, Nigeria",
      comment:
        "Quality shoes only from Onibata mall! Right from the time I ordered a Black velvet loafer down to my recent order; I can boldly say that their products and customer service are top notch. ",
      id: 2,
    },
    {
      name: "Vecthor",
      state: "Akure, Nigeria",
      comment:
        "Amazing Brand! Customer support team always ready to listen to the intentions of customers and deliver products that meets expectations. Fresh products always!",
      id: 3,
    },
    {
      name: "Oluwole Jacob",
      state: "Akure, Nigeria",
      comment:
        "I have been enjoying the product I ordered from Onibata mall for over a year now and I have no issues with the Monkstrap Shoe. Exceptional Products Always.",
      id: 4,
    },
    {
      name: "Adedeji Oluwaferanmi",
      state: "Akure, Nigeria",
      comment:
        "Onibata mall delivers the best. I have been buying my slides and sandals consistently from Onibata mall for over a year now. Amazing Brand!",
      id: 5,
    },
    {
      name: "Valerie",
      state: "Lagos, Nigeria",
      comment:
        "Lovely customer service and Flexibilty! Long Lasting products always! E dey last well.",
      id: 6,
    },
    {
      name: "Imam Bamgbopa",
      state: "Lagos, Nigeria",
      comment:
        "The Quality and Craftiness of their products are impeccable. Awesome pacakgaing and its effortless interacting with the customer support team. Always there to attend customer’s need.",
      id: 7,
    },
    {
      name: "Oluwaseun Adekoya",
      state: "Washington, D.C.",
      comment:
        "Onibata mall should start making plans to get shoes abroad for me! have been patronizing Onibata mall for over 3 years now: Close to four (4) people made a comment on my shoes I absolutely love Onibata Mall.",
      id: 8,
    },
    {
      name: "Samuel Ogunsola",
      state: "Manitoba ,Canada",
      comment:
        "Customer service at onibata mall is top notch, I love how interactive the customer support team is .They constantly gave me updates all through the delivery process and they also delivered what I ordered.",
      id: 9,
    },
  ];
  return (
    <Wrapper>
      <div className="review-sect">
        <div className="title">
          <h3>Reviews</h3>
        </div>
        <div className="reviews">
          {revs.map((r) => (
            <div className="review" key={r.id}>
              <div>
                <h5>{r.name}</h5>
                <span className="location">{r.state}</span>
                <span className="stars">
                  {Array(4)
                    .fill("")
                    .map(() => (
                      <FaStar />
                    ))}
                </span>
                <p>{r.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Review;
