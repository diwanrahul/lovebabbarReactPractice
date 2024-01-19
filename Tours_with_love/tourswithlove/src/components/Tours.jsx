/* eslint-disable react/prop-types */
import Card from "./Card"
import '../components/tours.css'

export default function Tours({tours}) {
    
  return (
    <div className="container" >
        <div>
           <h1 className="title"> Tours with Love</h1>
        </div>

        <div className="cards">
            <div>
                {
                    tours.map((tour) => (
                        <Card {...tour} key={tour.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
