import React from "react";
import styled from "styled-components";

function Section({ title, description, backgroundImg, lftBtnText, rtBtnText }) {
	return (
		<Wrap bgImage={backgroundImg}>
			<ItemText>
				<h1>{title}</h1>
				<p>{description}</p>
			</ItemText>
			<Buttons>
				<ButtonGroup>
					<LeftButton>{lftBtnText}</LeftButton>
					{rtBtnText && <RightButton>{rtBtnText}</RightButton>}
				</ButtonGroup>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
}

export default Section;
const Wrap = styled.div`
	height: 100vh;
	weight: 100vw;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Buttons = styled.div``;

const ItemText = styled.div`
	text-align: center;
	padding-top: 15vh;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 758px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	margin: 8px;
	cursor: pointer;
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color: black;
`;

const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
	overflow-x: hidden;
`;
