import React, {Component} from 'react'

export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <section className='jumbotron'>
            <h1> Star Wars! </h1>
              <br />
            <div> Vehicles of Star Wars </div>
          </section>
        </div>
      </div>
  )
  }
}
