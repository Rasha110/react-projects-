import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-button'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view'
import menus from "./components/tree-view/data";

function App() {


  return (
    <>
      
      <Accordian/>

<RandomColor/>
<StarRating/>
<ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5}/>
<LoadMoreData/>
<TreeView menus={menus}/>
    </>
  )
}

export default App
