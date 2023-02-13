import React, {Component} from 'react';
import {connect} from "react-redux";

class ReduxCounter extends Component {

    render() {

        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger;
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(ReduxCounter);