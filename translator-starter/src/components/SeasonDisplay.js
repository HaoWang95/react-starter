import React from 'react';
import "semantic-ui-css/semantic.min.css";
import '../css/SeasonDisplay.css';
import Loader from './Loader'
//import ReactDOM from 'react-dom';

const seasonConfig = {
    summer:{
        text: 'It\'s summer',
        iconName: 'sun'
    },
    winter: {
        text: 'It\'s winter',
        iconName: 'snowflake'
    },
}

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
        //const icon = (season === 'winter') ? 'snowflake':'sun';
        // className, and use react ui 
        const {text, iconName} = seasonConfig[season];
        return (
            <div className = {`season-display ${season}`}>
                <p>Location: {parseFloat(this.props.lat).toFixed(2)}:{parseFloat(this.props.lng).toFixed(2)}</p>
                <p>Season: {text}</p>
                <i className = {`icon-left massive ${iconName} icon`}></i>
                <i className = {`icon-right massive ${iconName} icon`}></i>
            </div>
        );
    }
}

export default SeasonDisplay