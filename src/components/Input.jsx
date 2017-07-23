import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <textarea className="input row" onChange={this.props.onChange} value={this.props.value}></textarea>
        );
    }


}


export default Input;
