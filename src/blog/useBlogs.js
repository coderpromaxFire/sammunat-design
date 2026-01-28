// src/blog/useBlogs.js

import { useEffect, useState } from "react";
import blogData from "./blogData";

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API delay (optional)
    const timer = setTimeout(() => {
      setBlogs(blogData);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return { blogs, loading };
}