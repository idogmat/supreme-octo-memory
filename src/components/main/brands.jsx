import React from "react";
import b from './brands.module.css'
import phone from'../../assets/images/iPhone.png'
const Brands = (props) => {
    return (
        <div className={b.ourBrands}>
            <div className={b.info}>
                <h3 className={b.h3}>Our Brands</h3>
                <p className={b.title}>Small Shoes 2017 new Arrivals mini <br/>
                    Messenger <span>Classic Shoes</span></p>
                <p className={b.text}>In porttitor elit ac mi placerat hendrerit. Morbi accumsan, erat in ullamcorper consectetur, nisi
                    erat efficitur eros, sagittis tristique odio turpis vitae dui. Vestibulum gravida est ut erat
                    pretium, non pretium diam feugiat. Integer egestas suscipit lorem ac fermentum. Integer at mauris
                    vitae justo sagittis dapibus. Pellentesque sit amet nisl vitae orci vehicula faucibus. Fusce et lat,
                    feugiat est. </p>
            </div>
            <div className={b.phone}>
                <img src={phone} alt="phone"/>
            </div>
        </div>
    )
}
export default Brands;
