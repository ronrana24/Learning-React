import Accordian from "./components/accordian";
// import GithubProfileFinder from "./components/github-finder";
import LightDarkMode from "./components/light-dark-mode";
// import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-button";
import QrCode from "./components/qr-code";
import RandomColour from "./components/random-colour";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutoComplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
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
      {/* <GithubProfileFinder /> */}
      <SearchAutoComplete />
      <TicTacToe />
    </>
  );
}

export default App;
