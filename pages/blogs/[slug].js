import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div>This is the blog post with slug {slug}</div>;
};

export default BlogPost;