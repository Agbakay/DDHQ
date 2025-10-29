import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://dettydecemberhq.com/wp-json/wp/v2/posts?_embed";
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (category !== "all") {
      filtered = filtered.filter((post) =>
        post.categories.includes(parseInt(category))
      );
    }

    if (search) {
      filtered = filtered.filter((post) =>
        post.title.rendered.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [search, category, posts]);

  if (loading)
    return <p className="text-center text-gray-600 mt-10">Loading posts…</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-10">Error: {error.message}</p>
    );

  return (
    <>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Good one</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-10">
          <input
            type="text"
            placeholder="Search by title..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="2">Lifestyle</option>
            <option value="3">Music</option>
            <option value="4">Events</option>
          </select>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const featuredImg =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col"
              >
                {featuredImg && (
                  <img
                    src={featuredImg}
                    alt={post.title.rendered}
                    className="rounded-md mb-4 w-full h-48 object-cover"
                  />
                )}
                <h2
                  className="text-xl font-semibold mb-3 text-gray-800 hover:text-orange-600 transition"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                  className="text-gray-600 mb-4 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-auto inline-block text-orange-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No posts found. Try a different search or category.
          </p>
        )}
      </div>
    </>
  );
}

export default BlogList;
