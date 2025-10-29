import { create } from "zustand";

const useBlogStore = create((set, get) => ({
  posts: [],
  loading: false,
  error: null,
  page: 1,
  perPage: 6,
  totalPages: 0,
  category: "",
  date: "",
  selectedPost: null,

  fetchPosts: async () => {
    const { page, perPage, category, date } = get();
    set({ loading: true, error: null });

    try {
      let url = `https://dettydecemberhq.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}`;
      if (category) url += `&categories=${category}`;
      if (date)
        url += `&after=${date}-01-01T00:00:00&before=${date}-12-31T23:59:59`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch posts");

      const data = await res.json();
      const totalPages = parseInt(res.headers.get("x-wp-totalpages") || 1);

      set({ posts: data, totalPages, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchPostById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://dettydecemberhq.com/wp-json/wp/v2/posts/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch post");
      const data = await res.json();
      set({ selectedPost: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  setCategory: (category) => set({ category, page: 1 }),
  setDate: (date) => set({ date, page: 1 }),
  setPage: (page) => set({ page }),
}));

export default useBlogStore;
