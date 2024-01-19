/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import removeTourContext from './context'
import './card.css'
export default function Card({ id, name, info, image, price }) {
  const removeTour = useContext(removeTourContext);
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  const readmorehandle = () => {
    setReadmore(!readmore);
  };

  return (
    <div className='card'>
      <div >
        <img src={image} alt="picture of city" className='image' />
      </div>


      <div className='tour-info'>
        <h3 className='tour-price'>{price}</h3>
        <h3 className='tour-name'>{name}</h3>
      </div>


      <div className='desc'>
        {description}
        <span className='read-more' onClick={readmorehandle} style={{ cursor: 'pointer', color: 'blue', fontSize:"0.8rem" }}>
          {readmore ? 'show less' : 'read more'}
        </span>
      </div>


      <button className='btn-red'
      onClick={() => removeTour(id)}
      >Not interested</button>


    </div>
  );
}
