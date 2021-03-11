import React from 'react'
import ImageCard from './ImageCard'
import '../css/ImageList.css'

// class ImageList extends React.Component{
//     render(){
//         return(
//             <div>{this.props.images.map( 
//                 img => <img 
//                         src = {img.urls.small} 
//                         key = {img.id}
//                         alt = {img.description}
//                         />)}
//             </div>
//         )
//     }
// }

class ImageList extends React.Component{
    render(){
        return(
            <div className = 'image-list'>
                {
                    this.props.images.map(
                        (img) => <ImageCard image = {img} key = {img.id}/>
                    )
                }            
            </div>
        )
    }
}

export default ImageList