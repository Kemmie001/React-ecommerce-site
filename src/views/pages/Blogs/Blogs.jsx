import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import BlogCard from "../../components/BlogCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Wrapper } from "../Blogs/styles";

const Blogs = () => {
	const [post, setPost] = useState(null);
	useEffect(() => {
		const responseData = async () => {
			try {
				const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts?page=1`);
				console.log(data?.message?.posts);
				setPost(data?.message?.posts);
			} catch (err) {
				console.log(err);
			}
		};
		responseData();
	}, []);
	return (
		<Wrapper>
			<MainLayout>
				<div style={{ margin: "40px 0px" }}>
					<h1 style={{ textAlign: "center", width: "fit-content", margin: "0 auto" }}>Blogs</h1>
					<div className="flex_cont">
						<div id="card_flex">
							{post?.map((a) => (
								<BlogCard
									key={a}
									title={a.name}
									content={a.content.slice(0, 200)}
									link={`/blogs/${a.id}`}
								/>
							))}
						</div>
					</div>
				</div>
			</MainLayout>
		</Wrapper>
	);
};

export default Blogs;
