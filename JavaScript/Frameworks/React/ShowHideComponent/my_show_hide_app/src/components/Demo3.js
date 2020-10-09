import React, { Component } from "react";

class Demo3 extends Component{
    constructor(){ // Why isn't props passed in here?
        super(); // Why isn't props passed in here?
        this.state={
            // name: "React2"
        }
    }

    render() {
        return (
            <div>
                <div>This is the Demo3 component</div>
                <hr />
            </div>
        )
    }
}

export default Demo3;