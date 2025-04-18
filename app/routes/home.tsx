import type { Route } from "./+types/home";
import { Home as HomePage } from "../pages/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "America's most awared online library platform" },
    { name: "description", content: "Find your favorite book with Library" },
  ];
}

export default function Home() {
  return <HomePage />;
}
