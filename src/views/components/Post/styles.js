import styled from "styled-components";

export const Wrapper = styled.div`
	.post {
		cursor: pointer;
		margin-top: 2rem;
		display: flex;
		background: linear-gradient(194.26deg, #fff5fb 10.13%, rgba(255, 245, 251, 0) 77.83%);
		border: 1px solid #9e005d;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		overflow: hidden;
		gap: 20px;
		height:70%;
		@media screen and (max-width: 768px){
			flex-direction: column;
			max-width: 400px;

}
		}

		.post-title {
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: start;
			height: 100%;
			flex-direction: column;
			@media screen and (max-width: 768px){
				max-width: 400px;
	}
		}

		h5 {
			font-size: 18px;
			font-weight: 500;
			padding-bottom: 1rem;
			color: #9e005d;
		}

		.link {
			display: flex;
			align-items: center;
		}

		a {
			padding-right: 3px;
			font-weight: 500;
			color: #000;
		}

		.post-img {
			object-fit: cover;
			height: 100%;
			width: 100%;
			background-color: green;
			}
	}
`;

export const Content = styled.div``;
