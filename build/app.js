if (typeof document === 'undefined') {
    var React = require("react");
}

var Message = React.createClass({displayName: "Message",
    propTypes: {
        name: React.PropTypes.string,
        content: React.PropTypes.string
    },
    render: function() {
        var nameStyle = {
            fontWeight: "bold"
        };
        
        return React.createElement("li", null, 
            React.createElement("span", {style: nameStyle}, this.props.name, ": "), this.props.content
        );
    }   
});

var MessageList = React.createClass({displayName: "MessageList",
    propTypes: {
        messages: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string,
                content: React.PropTypes.string
            })
        )
    },
    render: function() {
        var messages = this.props.messages.map(function(message, index)  {
            return React.createElement(Message, React.__spread({key: index},  message));
        });
        return React.createElement("ul", React.__spread({},  this.props), 
            messages
        );
    }
});

var MessageApp = React.createClass({displayName: "MessageApp",
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
        this.setState({ messages:messages });
    },
    render: function() {
        var style = {
            fontSize: 20,
            fontFamily: "sans-serif"
        };
        return React.createElement("div", null, 
            React.createElement(MessageList, {style: style, messages: this.state.messages}), 
            React.createElement("input", {ref: "textBox", type: "text"}), React.createElement("button", {onClick: this.handleClick}, "add")
        );
    }
});

if (typeof document !== 'undefined') {
    React.render(React.createElement(MessageApp, null), document.getElementById("app"));
}

var app1 = React.renderToString(React.createElement(MessageApp, null));

console.log(app1);
