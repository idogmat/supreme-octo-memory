import React from 'react'
import Bag from './bag'
import b from './bags.module.css'

const Bags = (props) => {
    let BagElement = props.bags.bags.map(b => <Bag
        key={b.id}
        id={b.id}
        price={b.price}
        service={b.service}
        img={b.img}
        likes={b.likes}
        comments={b.comments}
    />);
    return (<div>
        <div className={b.bagsSection}>
            <div className={b.helloTrends}>
                <h3>Trendy Arrivals</h3>
            </div>
            <div className={b.bagsElements}>
                {BagElement}
            </div>
        </div>
    </div>)
}

export default Bags;
