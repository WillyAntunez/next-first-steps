import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO title",
  description: "SEO description",
  keywords: ["SEO", "keywords"],
};

export const AboutPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-7xl">About page</span>
    </main>
  );
};

export default AboutPage;
