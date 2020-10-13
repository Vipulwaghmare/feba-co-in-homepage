import React from 'react'
import Card from './Card'
import items from '../items'

const Main = (props) => {

    return(
        <main className="main">
        {console.log("PE",props)}
            <div className="main-title">
                <p><strong>Bridal Makeup Artist</strong></p>
                <p>Showing <strong>{items.length} results</strong></p>
            </div>
            <div className="card-main">
                {items.map(item=>{
                    return(
                        <Card 
                            key= {item.name}
                            name={item.name}
                            vendor={item.vendor}
                            image={item.image}
                            city={item.city}
                            rating={item.rating}
                            price={item.price}
                            show={item.show}
                        />
                    )
                })}
            </div>
            <div className="pagination">
                <button className="pag-button">&lt;</button>
                <button className="pag-button">1</button>
                <button className="pag-button">&gt;</button>
            </div>
        </main>
    )
}

export default Main