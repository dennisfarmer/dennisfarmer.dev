import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Coming Soon^(tm)",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: LayoutProps) {
  return <div className="lg:mx-96 sm:mx-32 mx-10 block">{children}</div>;
}
