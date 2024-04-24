import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../components/Layout/MainLayout";
import { Markup } from "react-render-markup";

const ReadBlog = () => {
	const allowed = ["strong", "em", "p"];

	const [blogDets, setBlogDets] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const response = async () => {
			const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/post?post=${id}`);
			console.log(data?.message);
			setBlogDets(data?.message);
		};
		response();
	}, [id]);
	return (
		<MainLayout>
			<div style={{ backgroundColor: "#FFF5FB", minHeight: "100vh", paddingTop: "60px", margin:"0px 10px" }}>
				<h1
					style={{ width: "fit-content", maxWidth: "500px", margin: "20px auto", textAlign: "center" }}
				>
					{blogDets?.name}
				</h1>
				<div
					classname="blog_img"
					style={{
						height: "350px",
						overflow: "hidden",
						maxWidth: "500px",
						margin: "40px auto",
					}}
				>
					<img src="/assets/post1.png" alt="" style={{ objectFit: "cover" }} />
				</div>
				<div style={{ maxWidth: "1000px", margin: "20px auto" }}>
					<Markup allowed={allowed} markup={blogDets?.content} />
				</div>
			</div>
		</MainLayout>
	);
};

export default ReadBlog;
