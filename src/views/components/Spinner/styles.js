import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.loading-spinner {
		width: 20px;
		height: 20px;
		border: 2px solid #9e005d;
		border-top: 2px solid #ffffff; /* Black */
		border-radius: 50%;
		animation: spinner 1.5s linear infinite;
	}
`;

export const Content = styled.div``;
