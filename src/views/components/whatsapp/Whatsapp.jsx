import React from "react";
import { Wrapper } from "./styles";

const Whatsapp = () => {
	return (
		<Wrapper>
			<div>
				<a href="https://wa.me/2349080788447" style={{ color: "black" }}>
					<div className="chat-container">
						<div>
							<p>Hi, How can we be of Help?</p>
							<p className="bold-font">Chat with us</p>
						</div>
						<img src="/assets/icon.png" alt="whatsapp-icon" width="60px" height="60px" />
					</div>
				</a>
			</div>
		</Wrapper>
	);
};

export default Whatsapp;
