import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    goToStore(){
        //first grab the text from teh box
        console.log(this.storeInput.value);
        //second we're going to transition
        //from / to /store/:storeID
        console.log('You changed the URL!');
    }

    render(){
        return(
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name"
            defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
           <button type="submit">Visit Store -> </button>
            </form>
        )
    }
}

export default StorePicker;
