import React from 'react';

class ButtonComponent extends React.Component {
    render() {
        return (<button
            onClick={this.props.myFunction}
        >
            {this.props.message}
        </button>);
    }
}

export default ButtonComponent;