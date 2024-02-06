import styled from "styled-components";

export const Wrapper = styled.div`
	.head-logo {
		background-color: #fff;
		padding: 0.8rem 5%;
		display: flex;
		justify-content: space-between;
		.logo {
			display: block;
			width: 100px;
			img {
				display: block;
				width: 100%;
			}
		}
		.search-wrapper {
			display: flex;
			margin-left: 10px;

			input {
				flex: 1;
				width: 100%;
				margin-right: 10px;
				padding: 10px 10px;
				border: 1px solid var(--primary-color);
				border-radius: 4px;
				outline: var(--primary-color);
			}
			.search-icon {
				display: none;
			}

			.bar {
				display: none;
			}
		}
		@media screen and (max-width: 768px) {
			.search-wrapper {
				position: relative;
				padding-right: 2px;
				flex: 1;
				.bar {
					display: block;
					color: var(--primary-color);
				}
				.search-icon {
					display: block;
					position: absolute;
					right: 38px;
					top: 11px;
					color: var(--primary-color);
				}
			}
			button {
				display: none;
			}
		}
		button {
			flex-basis: 70px;
			cursor: pointer;
			color: #fff;
			border-radius: 4px;
			font-weight: 400;
			padding: 0.5rem;
			background-color: #9e005d;
		}
	}
	@media screen and (max-width: 768px) {
		.overlay.expanded {
			height: 100vh;
			width: 100%;
			top: 0px;
			left: 0;
			position: fixed;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.overlay {
			height: 100vh;
			width: 0%;
			top: 0px;
			left: 0;
			position: fixed;
			background-color: transparent;
		}
		.overlay ul {
			position: fixed;
			top: 0px;
			left: 0;
			width: 40%;
			transform: translateX(-40%);
			height: 100vh;
			visibility: hidden;
			padding: 5%;
			display: flex;
			flex-direction: column;
			padding: 0 5%;
			background: #fff5fb;
		}
		.overlay.expanded ul {
			visibility: visible;
			transform: translateX(0px);
			transition: all 0.2s ease-in-out;
		}
	}
	.bar-cont {
		display: block;
		align-self: center;
		cursor: pointer;
		transition: 0.5s ease-in-out;
		/* position: fixed; */
		z-index: 1;
		right: 6px;
		font-weight: thin;
		font-size: 20px;
	}
	.nav-bar {
		li {
			padding-top: 2rem;
			a {
				text-align: left;
				color: var(--primary-color);
				font-weight: 400;
				font-size: 15px;
			}
		}
		@media screen and (min-width: 768px) {
            z-index: 3;
			display: flex;
			background: #fff5fb;
			padding: 0 5%;
			flex-direction: row;
			width: 100%;
			height: 65px;
			align-items: center;
			gap: 5%;
			.logo {
				display: none;
			}
			li {
				padding-top: 0;
			}
		}
	}
`;

export const Content = styled.div``;
