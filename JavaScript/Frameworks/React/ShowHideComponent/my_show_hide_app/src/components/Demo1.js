import React, { Component } from "react";

class Demo1 extends Component {
    constructor() { // Why isn't props passed in here?
        super(); // Why isn't props passed in here?
        this.state = {
            name: "React"
        }
    }

    render() {
        return (
            <div>
                <div>This is the Demo1 component</div>
                <hr />
            </div>
        )
    }
}

export default Demo1;