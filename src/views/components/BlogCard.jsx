import React from "react";
import { Markup } from "react-render-markup";
import { Link } from "react-router-dom";
const BlogCard = ({ title, content, link }) => {
	const allowed = ["strong", "em", "p"];
	return (
		<Link to={link}>
			<div
				id="card"
				style={{
					backgroundColor: "white",
					borderRadius: "10px",
					border: "1px solid #9e005d",
					overflow: "hidden",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					maxWidth: "350px",
					margin: "0px auto",
				}}
			>
				<div id="card_img" style={{}}>
					<img src="/assets/post1.png" alt="" />
				</div>

				<div
					style={{
						padding: "10px 10px",
						display: "flex",
						flexDirection: "column",
						height: "100%",
					}}
					id="card_text"
				>
					<h3 style={{ margin: "6px 0px" }}>{title}</h3>
					<Markup style={{ margin: "auto 0px", fontSize: "14px" }} allowed={allowed} markup={content} />
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
