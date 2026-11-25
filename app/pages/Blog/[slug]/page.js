import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import blogPosts from "../../../data/blogPosts";
import styles from "../BlogDetails.module.css";

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((blogPost) => blogPost.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.blogDetails}>
      <Link href="/pages/Blog" className={styles.backLink}>
        <FiArrowLeft aria-hidden="true" /> Back to the blog
      </Link>
      <article className={styles.article}>
        <img className={styles.image} src={post.image} alt="" />
        <div className={styles.content}>
          <span className={styles.category}>{post.category}</span>
          <h1>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.body}>
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
