import SectionHeader from "../SectionHeader"
import PostList from "./PostList"
import data from '../../../_data/db.json';


const Blog = () => {
  const posts = data.posts; // Access the posts directly from the imported JSON data
  return (
    <section className="section" id="blog">
        <div className="container mx-auto">
            <SectionHeader pretitle='Our Blog' title='Latest News' />
            {/** post list */}
            <PostList posts={posts} />
        </div>
    </section>
  );
};

export default Blog;