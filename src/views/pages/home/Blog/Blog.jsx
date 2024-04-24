import { useEffect, useState } from "react";
import Post from "../../../components/Post/Post";
import { Wrapper } from "./styles";
import axios from "axios";
const Blog = () => {
	const [post, setPost] = useState(null);

	useEffect(() => {
		const responseData = async () => {
			try {
				const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts?page=1&limit=2`);
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
			<div className="blog" id="blog">
				<div className="title">
					<h3>Blog</h3>
				</div>
				<div className="posts">
					{post?.map((p) => (
						<Post title={p.name} link={`/blogs/${p.id}`} key={p.id} />
					))}
				</div>
				<div className="features">
					<h3>Features</h3>
					<div className="">
						<div className="feature">
							<img src="/assets/feat3.png" alt="" />
						</div>
						<div className="feature">
							<img src="/assets/feat2.png" alt="" />
						</div>
						<div className="feature">
							<img src="/assets/feat1.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Blog;
