import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all posts for pagination navigation
    fetch("https://dettydecemberhq.com/wp-json/wp/v2/posts?_embed&per_page=100")
      .then((res) => res.json())
      .then((data) => setAllPosts(data))
      .catch(() => {});

    // Fetch current post by slug
    fetch(`https://dettydecemberhq.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading)
    return <p className="text-center text-gray-600 mt-10">Loading post…</p>;
  if (!post)
    return (
      <p className="text-center text-red-500 mt-10">
        Post not found. <Link to="/blog">Go back</Link>
      </p>
    );

  const featuredImg = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // Find current post index for pagination
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const nextPost = allPosts[currentIndex - 1]; // WordPress returns posts in descending order
  const prevPost = allPosts[currentIndex + 1];

  return (
    <>
      <div className="max-w-4xl mx-auto px-5 py-10">
        <Link
          to="/blog"
          className="text-orange-600 font-medium hover:underline mb-5 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1
          className="text-3xl font-bold mb-10"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {featuredImg && (
          <img
            src={featuredImg}
            alt={post.title.rendered}
            className="w-full h-80 object-cover rounded-lg mb-10"
          />
        )}

        <p className="text-sm text-gray-500 mb-3 font-bold">
          📆
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Blog content */}
        <div
          className="prose max-w-none text-gray-700 m-10"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Style links inside post content */}
        <style>
          {`
          .prose a {
            color: #16a34a; /* Tailwind's green-600 */
            font-weight: 600;
            text-decoration: underline;
          }

          .prose a:hover {
            color: #15803d; /* green-700 */
          }

          .prose p {
            margin-bottom: 1.2rem;
          }
        `}
        </style>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-16 border-t border-gray-300 pt-8">
          {prevPost ? (
            <button
              onClick={() => navigate(`/blog/${prevPost.slug}`)}
              className="text-green-600 font-semibold hover:underline"
            >
              ← {prevPost.title.rendered.replace(/(<([^>]+)>)/gi, "")}
            </button>
          ) : (
            <span />
          )}

          {nextPost ? (
            <button
              onClick={() => navigate(`/blog/${nextPost.slug}`)}
              className="text-green-600 font-semibold hover:underline"
            >
              {nextPost.title.rendered.replace(/(<([^>]+)>)/gi, "")} →
            </button>
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
