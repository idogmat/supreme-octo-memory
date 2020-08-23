import React from "react";
import w from "./watchs.module.css";
import Watch from "./watch";
import {withRouter, Route} from "react-router-dom";
import Fashion from "./Fashion";
import { Tabs, Tab, Panel } from '@bumaga/tabs'
// import {NavLink} from "react-router-dom/modules/NavLink";

const Watches = (props) => {
    let WatchElement = props.watches.watches.map(w => <Watch
        key={w.id}
        id={w.id}
        price={w.price}
        service={w.service}
        likes={w.likes}
        comments={w.comments}
    />);
    let WatchElement2 = props.watches.watches2.map(w => <Watch
        key={w.id}
        id={w.id}
        price={w.price}
        service={w.service}
        likes={w.likes}
        comments={w.comments}
    />);
    let WatchElement3 = props.watches.watches3.map(w => <Watch
        key={w.id}
        id={w.id}
        price={w.price}
        service={w.service}
        likes={w.likes}
        comments={w.comments}
    />);
    return (<div className={w.watchSection}>
            <div className={w.helloTrends}>
                <h3>Our Showcase</h3>
            </div>
            <Tabs >
                <div className={w.filter}>
                    <Tab><button className={w.filterBtn}>Fashion</button></Tab>
                    <Tab><button className={w.filterBtn}>Furnitures</button></Tab>
                    <Tab><button className={w.filterBtn}>Watches</button></Tab>
                    <Tab><button className={w.filterBtn}>Mobile</button></Tab>
                    <Tab><button className={w.filterBtn}>Cloth</button></Tab>
                    <Tab><button className={w.filterBtn}>Toys</button></Tab>
                </div>
                <Panel><div className={w.watchElements}>{WatchElement}</div></Panel>
                <Panel><div className={w.watchElements}>{WatchElement3}</div></Panel>
                <Panel><div className={w.watchElements}>{WatchElement2}</div></Panel>
                <Panel><div className={w.watchElements}>{WatchElement3}</div></Panel>
                <Panel><div className={w.watchElements}>{WatchElement}</div></Panel>
                <Panel><div className={w.watchElements}>{WatchElement2}</div></Panel>
            </Tabs>
        </div>)
}


export default Watches;
