import BlogBox from "@/components/BlogBox";
import FooterPage from "@/components/FooterPage";
import HighLightPage from "@/components/HighLightPage";
import TitleSearch from "@/components/TitleSearch";
import { getBlogs } from "@/lib/data";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="w-full ">
      <TitleSearch />
      <HighLightPage blogs={blogs} />
      <div className="grid lg:grid-cols-3 place-items-center md:grid-cols-2 sm:grid-cols-1">
        {blogs?.length &&
          blogs.map((blog: any) => <BlogBox key={blog._id} blog={blog} />)}
      </div>
      <FooterPage />
    </main>
  );
}
