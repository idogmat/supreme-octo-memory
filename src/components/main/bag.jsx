import React from 'react'
import b from './bags.module.css'
import heart from '../../assets/images/heart.png'
import message from '../../assets/images/message.png'
class Bag extends React.Component {
    render() {
        return (<div className={b.element}>
            <div className={b.likesComments}>
                <div><img src={heart} alt=""/><span>{this.props.likes}</span></div>
                <div><img src={message} alt=""/><span>{this.props.comments}</span></div>
            </div>
            <img src={require(`../../assets/images/bags/bag-${this.props.id}.png`)} alt={'bag'+this.props.id}/>
            <p className={b.service}>{this.props.service}</p>
            <p className={b.price}>{'$' + ' ' + this.props.price}</p>
            <button className={b.buyBtn}>Add to Cart</button>

        </div>)
    }
}

export default Bag;
