import React from 'react';
import 'semantic-ui-css/semantic.min.css';


class SearchBar extends React.Component{
   constructor(props){
       super(props);
       this.state = {search: ''};
       this.onFormSubmit = this.onFormSubmit.bind(this);
   }

   onFormSubmit(event){
       // eslint-disable-next-line no-restricted-globals
       event.preventDefault();
       //console.log(this.state.search)
       this.props.onSubmit(this.state.search)
   } 

    render(){
        return (
            <div className = 'ui segment'>
                <form className = 'ui form' onSubmit = {this.onFormSubmit}>
                    <div className = 'field'>
                        <label>search</label>
                        <input 
                            placeholder='search'
                            value = {this.state.search}
                            onChange = {(e) => this.setState({search: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar