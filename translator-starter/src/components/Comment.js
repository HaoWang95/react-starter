import React from 'react';
import Faker from 'faker';
//import getLocation from '../utils/getLocation'
//import getCurrentLocation from '../utils/getLocation';

import SeasonDisplay from './SeasonDisplay';


function Comment() {
    //let position = getCurrentLocation();
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author={Faker.name.findName()}
                    authorImage={Faker.image.image()}
                    postDate={new Date(Faker.time.recent()).toUTCString()}
                    post={Faker.lorem.sentence()}
                // lat={position.lat}
                // lng={position.lng}
                />
            </ApprovalCard>

            <CommentDetail
                author={Faker.name.findName()}
                authorImage={Faker.image.image()}
                postDate={new Date(Faker.time.recent()).toUTCString()}
                post={Faker.lorem.sentence()}
            // lat={position.lat}
            // lng={position.lng}
            />
            <CommentDetail
                author={Faker.name.findName()}
                authorImage={Faker.image.image()}
                postDate={new Date(Faker.time.recent()).toUTCString()}
                post={Faker.lorem.sentence()}
            // lat={position.lat}
            // lng={position.lng}
            />
            <LocationComponent />
        </div>
    );
}

class CommentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, lng: null, errMes: null };
        // window.navigator.geolocation.getCurrentPosition(
        //     (pos) => {
        //         this.setState({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        //     },
        //     (err) => {
        //         console.log(err)
        //     }
        // )
    }

    // componentDidMount() {
    //     window.navigator.geolocation.getCurrentPosition(
    //         (pos) => {
    //             this.setState({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    //         },
    //         (err) => {
    //             this.setState({ errMes: err.message })
    //         }
    //     )
    // }

    render() {
        return (
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img alt='avatar' src={this.props.authorImage} />
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        {this.props.author}
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            {this.props.postDate}
                        </span>
                    </div>
                    <div className='post'>
                        <p>{this.props.post}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class ApprovalCard extends React.Component {
    render() {
        return (
            <div className='ui card'>
                <div className='content'>
                    {this.props.children}
                </div>
                <div className='extra content'>
                    <div className='ui two buttons'>
                        <div className='ui basic green button'>Approve</div>
                        <div className='ui basic red button'>Reject</div>
                    </div>
                </div>
            </div>
        );
    }
}

class LocationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, lng: null };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({ lat: pos.coords.latitude, lng: pos.coords.longitude })
            },
            (err) => {
                console.log(err);
                this.setState({ errMes: err.message })
            }
        )
    }

    render() {
        if (this.state.errMes && !this.state.lat && !this.state.lng) {
            return (
                <div>
                    <p>Error: {this.state.errMes}</p>
                </div>
            )
        } else if (!this.state.errMes && this.state.lat && this.state.lng) {
            return (
                <SeasonDisplay lat={this.state.lat} lng = {this.state.lng} />
            )
        } else if (!this.state.errMes && !this.state.lat && !this.state.lng) {
            return (
                <div>
                    <p>Loading location</p>
                </div>
            )
        }
    }
}


export default Comment