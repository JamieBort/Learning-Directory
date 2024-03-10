import React from 'react';
import '../index.css';

class ListComponent extends React.Component {
    render() {
        return (
            <div id="Listcomponent">
                <p>{this.props.text}</p>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default ListComponent;