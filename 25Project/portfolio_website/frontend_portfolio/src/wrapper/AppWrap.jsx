import React, { useEffect } from 'react'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'
import { useSelector, useDispatch } from 'react-redux'
const AppWrap = (Component, idName, classNames,) => function HOC() {

  const isDarkMode = useSelector((state)=>state.darkmode.isDarkMode)


  useEffect(() => {
    const homeElement = document.querySelector(".app__wrapper");
    if (isDarkMode) {
      homeElement.style.background = "#212121";
      homeElement.style.color = "#212121";

    } else {
      homeElement.style.background = "";
    }
  }, [isDarkMode]);

  return (

    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className='app__wrapper app__flex'>
            <Component />
            <div className='copyright'>
                <p className='p-text'>@2024 Rahul  </p>
                <p className='p-text'>All rights reserved</p>
                <p></p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap