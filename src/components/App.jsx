import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blogData";

function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
