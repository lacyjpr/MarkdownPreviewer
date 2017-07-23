import React from 'react';


class Output extends React.Component {
    render() {
        return (
            <div className="output row" dangerouslySetInnerHTML={this.props.markDown} />
        );
    }
}

export default Output;
