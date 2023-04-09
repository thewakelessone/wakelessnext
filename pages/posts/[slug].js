import ReactMarkdown from 'react-markdown';
import { getAllPublished, getPost } from "../../lib/notion";

const Post = ({ post }) => {
  return (
    <section>
      <h2>{post.metadata.title}</h2>
      <span>{post.metadata.date}</span>
      <p>{post.metadata.tags.join(', ')}</p>
      <ReactMarkdown>{post.markdown}</ReactMarkdown>
      <p>TODO: link to Notion open to this post</p>
    </section>
  );
};

/*
Similarly to the blog overview page, you will be pre-rendering each post page.

In /pages/posts/[slug].js, add the getStaticProps() function after the Post component and call the getSingleBlogPostBySlug function to fetch the blog post from Notion.
*/

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

 return {
    props: {
      post,
    },
    revalidate: 60
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;