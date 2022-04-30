import "./App.css";
import Content from "./component/Content/Content";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-[85vw] relative mx-auto flex flex-row items-center justify-between">
        <Profile />
        <Content />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
