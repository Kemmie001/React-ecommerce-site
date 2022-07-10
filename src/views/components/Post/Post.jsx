import { FaArrowRight } from "react-icons/fa";
import { Wrapper } from "../Post/styles";

const Post = () => {
    return ( 
        <Wrapper>
            <div className="post">
                <div className="post-title">
                    <h5>
                    How to dress confidently for a business meeting  
                    </h5>
                    <span className="link">
                    <a href="">Read more </a> <FaArrowRight/>
                    </span>
                </div>
                <div className="post-img">
                    <img src="/assets/post1.png" alt="" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Post;