import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blogData";

function App() {
  return (
    <>
      <Header />
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </>
  );
}

export default App;