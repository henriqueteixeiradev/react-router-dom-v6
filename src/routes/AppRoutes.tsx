import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  PostsPage,
  PostPage,
  NotFoundPage,
} from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
