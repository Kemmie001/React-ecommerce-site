import Post from "../../../components/Post/Post";
import { Wrapper } from "./styles";

const Blog
 = () => {
    return (  
        <Wrapper>
            <div className="blog" id="blog">
                <div className="title" >
                <h3 >
                    Blog
                </h3>
                </div>
                <div className="posts">
                    <Post/>
                    <Post/>
                </div>   
                <div className="features">
                <h3 >
                    Features
                </h3>
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
}
 
export default Blog
;