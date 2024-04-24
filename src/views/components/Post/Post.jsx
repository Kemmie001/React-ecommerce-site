import { FaArrowRight } from "react-icons/fa";
import { Wrapper } from "../Post/styles";
import { Link } from "react-router-dom";

const Post = ({ title, link }) => {
	return (
		<Wrapper>
			<Link to={link}>
				<div className="post">
					<div className="post-title">
						<h5>{title}</h5>
						<span className="link">
							Read more <FaArrowRight />
						</span>
					</div>
					<div className="post-img">
						<img src="/assets/post1.png" alt="" />
					</div>
				</div>
			</Link>
		</Wrapper>
	);
};

export default Post;
