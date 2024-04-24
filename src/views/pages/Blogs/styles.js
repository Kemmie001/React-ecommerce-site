import styled from "styled-components";

export const Wrapper = styled.div`
	.flex_cont {
		display: flex;
		flexdirection: column;
		min-height: 100vh;
		justifycontent: center;
		alignitems: center;
	}

	#card_flex {
		padding: 30px 12px;
		margin: 0 auto;
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		justify-content: center;
		height: 100%;
		@media screen and (max-width: 768px) {
			flex-direction: column;
			max-width: 400px;
			gap: 16px;

		}
	}
`;

export const Content = styled.div``;
