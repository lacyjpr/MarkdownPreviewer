import React from 'react';
import Input from './Input';
import Output from './Output';
import marked from 'marked';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '# test'
        };
        this.handleChange = this.handleChange.bind(this);
        this.setState = this.setState.bind(this);	
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            text: e.target.value
        });
    }

    //credit: https://stackoverflow.com/questions/34686523/using-marked-in-react	
    getMarkdown() {
        var markdown = marked(this.state.text, {sanitize: true});
        return {
            __html: markdown
        };
    }
    render() {
        return (
            <div>
                <Input onChange={this.handleChange} value={this.state.text}/>
                <Output markDown={this.getMarkdown()}/>
            </div>
        );
    }
}

export default Container;