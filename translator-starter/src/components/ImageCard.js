import React from 'react'


class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0}
    }

    componentDidMount(){
        //console.log(this.imageRef.current.clientHeight)
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans: spans})
    }

    render(){
        return (
            <div style = {{gridRowEnd:`span ${this.state.spans}`}}>
                <img
                    alt = {this.props.image.description}
                    src = {this.props.image.urls.regular}
                    ref = {this.imageRef}
                />
            </div>
            
        );
    }
}


export default ImageCard