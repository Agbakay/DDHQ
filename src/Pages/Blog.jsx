import React, { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts
  useEffect(() => {
    const url = "https://dettydecemberhq.com/wp-json/wp/v2/posts?_embed";

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetching error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  // Filter posts by search or category
  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((post) =>
        post.categories.includes(parseInt(category))
      );
    }

    // Filter by search text
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
      <div className="lg:px-[8%] w-full hero h-[600px] bg-fixed">
        <div className=" text-center m-auto ">
          <h1 className="pt-32 text-2xl text-white">Detty December Blog</h1>
          <h2 className="text-5xl font-semibold text-white lg:px-[2%] leading-[1.4] mb-5">
            Stay in the Loop: <br />
            Your Ultimate Guide to <br />
            Events, Lifestyle & More!
          </h2>
          <p className="text-white lg:px-[25%] pb-20">
            Discover the hottest events, must-visit destinations, fashion
            trends, and exclusive deals all in one place! From nightlife buzz to
            travel guides, our blog keeps you informed and inspired for every
            adventure.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-10">
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
            {/* You can replace these with dynamic category IDs from WP */}
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

                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div
                  className="text-gray-600 mb-4 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <a
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-block text-orange-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </article>
            );
          })}
        </div>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No posts found. Try a different search or category.
          </p>
        )}
      </div>
    </>
  );
}

export default Blog;
