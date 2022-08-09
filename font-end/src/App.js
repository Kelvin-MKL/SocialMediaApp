import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSection from "./components/rightSection";
import LeftSection from "./components/leftSection";
import MiddleSection from "./components/middleSection";
import TopSection from "./components/topSection";

function App() {
  return (
    <>
      <div className='containerTop'>
        <TopSection />
        <div className='containerMiddle'>
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
    </>
  );
}

export default App;
