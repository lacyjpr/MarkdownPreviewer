import React from 'react';
import Input from './Input';
import Output from './Output';
import marked from 'marked';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'Markdown Previewer\n==================\n\n# Heading 1\n## Heading 2 \n### Heading 3\n#### Heading 4\n##### Heading 5\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to make a line break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nOrdered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n\n *[Wikipedia](https://www.wikipedia.org/)*'
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