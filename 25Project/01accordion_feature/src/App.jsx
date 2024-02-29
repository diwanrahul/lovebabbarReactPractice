// import { useState } from 'react'
import Accordion from "./components/accordion/Accordion"
import ImageSlider from "./components/image-slider"
import RandomColor from "./components/RandomColor"
import StarRating from "./components/star-rating"
import { LoadMoreData } from "./components/load-more-data"
import TreeView from "./components/tree-view"
import menus from "./components/tree-view/data"
import QRCodeGenerator from "./components/QR-code-generator"
import LightDarkTheme from "./components/light-dark-theme"
import ScrollIndicator from "./components/scroll-indicator"
import TabTest from "./components/custom-tabs/tab-test"
import ModalTest from "./components/custom-modal-popup/modal-test"
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
       {/* <TreeView menus={menus}/> */}

       {/* QR code Generator */}
       {/* <QRCodeGenerator /> */}

       {/* light dark them */}
       {/* <LightDarkTheme />  */}

       {/* ScrollIndicator */}
       {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

       {/* custom tabs component */}
       {/* <TabTest /> */}


       {/* custom modal components */}
       <ModalTest />

    </>
  )
}

export default App
