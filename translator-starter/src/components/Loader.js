import React from 'react';

// use th ui library appropriately solves quite lots of problems
class Loader extends React.Component {
    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui text loader">{this.props.msg}</div>
            </div>
        )
    }
}

Loader.defaultProps = {
    msg: 'Loading...'
}

export default Loader;