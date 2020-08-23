import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getItems, sortItems} from "../../store/mainReducer";
import Bags from "./bags";
import Watches from "./watches";
import Brands from "./brands";


class MainContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <>
                <Bags {...this.bags} bags={this.props.state}/>
                <Brands/>
                <Watches {...this.watches}
                         watches={this.props.state}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    state: state.mainReducer
});

export default compose(connect(mapStateToProps))(MainContainer);


