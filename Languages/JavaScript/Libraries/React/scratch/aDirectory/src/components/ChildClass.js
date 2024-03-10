import React from 'react';

class ChildClass extends React.Component {
    render() {
        const paragraph = "text entered into the paragraph tag"
        return (
            <div>
                <h2>{this.props.text}</h2>
                <p>{paragraph}</p>
            </div>
        )
    }
}

export default ChildClass;