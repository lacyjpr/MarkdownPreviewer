import React from 'react';

export default function Input () {
    return (
        <textarea className="input row" onChange={this.props.onChange} value={this.props.value}></textarea>
    );
}
