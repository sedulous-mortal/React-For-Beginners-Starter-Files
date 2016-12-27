import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event){
        event.preventDefault();
        //first grab the text from teh box
        console.log(this.storeInput.value);
        //second we're going to transition
        //from / to /store/:storeID
        console.log('You changed the URL!');
    }

    render(){
        return(
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name"
            defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
           <button type="submit">Visit Store -> </button>
            </form>
        )
    }
}

export default StorePicker;
