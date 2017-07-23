import React from 'react';


class Output extends React.Component {
    render() {
        return (
            <div className="output" dangerouslySetInnerHTML={this.props.markDown} />
        );
    }
}

export default Output;
