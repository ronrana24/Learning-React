import Accordian from "./components/accordian";
import LightDarkMode from "./components/light-dark-mode";
// import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-button";
import QrCode from "./components/qr-code";
import RandomColour from "./components/random-colour";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
// import TreeView from "./components/tree-view";
// import treeData from "./components/tree-view/data";

function App() {
  return (
    <>
      <ScrollIndicator url="https://dummyjson.com/products" />
      <Accordian />
      <RandomColour />
      <StarRating />
      {/* <ImageSlider
        url="https://api.unsplash.com/photos/?client_id=rHN-l4PLmGzVeCEW5ibB4UuVxXtjsG1ihwEIWg25V1w&page=1&per_page="
        limit={5}
      /> */}
      <LoadMoreButton />
      {/* <TreeView menus={treeData} /> */}
      <QrCode />
      <LightDarkMode />
    </>
  );
}

export default App;
