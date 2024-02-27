// import { useState } from 'react'
import Accordion from "./components/accordion/Accordion"
import ImageSlider from "./components/image-slider"
import RandomColor from "./components/RandomColor"
import StarRating from "./components/star-rating"
import { LoadMoreData } from "./components/load-more-data"
import TreeView from "./components/tree-view"
import menus from "./components/tree-view/data"
function App() {
  const url = "https://picsum.photos/v2/list";

  return (
    <>
    {/* Accordion components */}
      {/* <Accordion /> */}

      {/* Random color component */}
        {/* <RandomColor /> */}

       {/* star rating component  */}
       {/* <StarRating noOfStars={4}/> */}

       {/* image slider */}
       {/* <ImageSlider url={url} page={"1"} limit={'10'}/> */}

       {/* load more image */}
       {/* <LoadMoreData /> */}

       {/* Tree TreeView */}
       <TreeView menus={menus}/>

    </>
  )
}

export default App
