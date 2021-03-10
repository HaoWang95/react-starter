import React from 'react';
//import ReactDOM from 'react-dom';

const determineSeason = (lat, mon) => {
    if (mon > 2 && mon < 9) {
        
        return lat > 0 ? 'summer' : 'winter'
    } else if ((mon <= 2 && mon >= 0) || (mon >= 9 && mon <= 11)){
        // eslint-disable-next-line no-unused-expressions
        return lat > 0? 'winter' : 'summer'
    }
}

class SeasonDisplay extends React.Component {
    render() {
        const season = determineSeason(this.props.lat, new Date().getMonth());
        return (
            <div>
                <p>Location: {parseFloat(this.props.lat).toFixed(2)}:{parseFloat(this.props.lng).toFixed(2)}</p>
                <p>Season: {season}</p>
            </div>
        );
    }
}

export default SeasonDisplay