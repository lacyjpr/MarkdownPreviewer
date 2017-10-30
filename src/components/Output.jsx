import React from 'react';


export default function Output () {
    return (
        <div className="output row" dangerouslySetInnerHTML={this.props.markDown} />
    );
}
