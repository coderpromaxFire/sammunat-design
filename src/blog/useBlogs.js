// src/blog/useBlogs.js

import { useEffect, useState } from "react";

const BLOG_API_URL = "https://script.google.com/macros/s/AKfycbxyj3LR3jpT_Q8gaZ51BhUYWF0ASS_-oR1TCBkVb_0rpRQOVG7-TA6a74JYuKRX8UU/exec";

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BLOG_API_URL)
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading blogs:", err);
        setLoading(false);
      });
  }, []);

  return { blogs, loading };
}
