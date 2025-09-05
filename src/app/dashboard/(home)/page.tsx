import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Viral Thumbnails - Creobots",
};

export default async function Home() {
  return <Content />;
}
