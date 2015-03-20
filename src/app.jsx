if (typeof document === 'undefined') {
    var React = require("react");
}

var Message = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        content: React.PropTypes.string
    },
    render: function() {
        var nameStyle = {
            fontWeight: "bold"
        };
        
        return <li>
            <span style={nameStyle}>{this.props.name}: </span>{this.props.content}
        </li>;
    }   
});

var MessageList = React.createClass({
    propTypes: {
        messages: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string,
                content: React.PropTypes.string
            })
        )
    },
    render: function() {
        var messages = this.props.messages.map((message, index) => {
            return <Message key={index} {...message}/>;
        });
        return <ul {...this.props}>
            {messages}
        </ul>;
    }
});

var MessageApp = React.createClass({
    getInitialState: function() {
        return {
            messages: [
                {
                    name: "kevin",
                    content: "hello, world"
                }
            ]
        };
    },
    handleClick: function() {
        var messages = this.state.messages.slice();
        messages.push({
            name: "kevin",
            content: this.refs.textBox.getDOMNode().value
        });
        this.setState({ messages });
    },
    render: function() {
        var style = {
            fontSize: 20,
            fontFamily: "sans-serif"
        };
        return <div>
            <MessageList style={style} messages={this.state.messages}/>
            <input ref="textBox" type="text"/><button onClick={this.handleClick}>add</button>
        </div>;
    }
});

if (typeof document !== 'undefined') {
    React.render(<MessageApp/>, document.getElementById("app"));
}

var app1 = React.renderToString(<MessageApp/>);

console.log(app1);
