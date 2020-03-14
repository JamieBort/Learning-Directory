import React, {Component} from 'react';

export default class VehicleList extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let vehicles = this.props.vehicles.map((vehicle) => {
      return (
        <div className="col-md-4" key={vehicle.name}>
          <div className="card">
            <div className="card-block">
              <p>
                Vehicle: {vehicle.name}
              </p>
              <p>
                Model: {vehicle.model}
              </p>
              <div className="card">
                <ul className="list-group">
                  <li className="list-group-item">
                    Manufacturer: {vehicle.manufacturer}
                  </li>
                  <li className="list-group-item">
                    Class: {vehicle.class}
                  </li>
                  <li className="list-group-item">
                    Passengers: {vehicle.passengers}
                  </li>
                  <li className="list-group-item">
                    Crew: {vehicle.crew}
                  </li>
                  <li className="list-group-item">
                    Length: {vehicle.length}
                  </li>
                  <li className="list-group-item">
                    Max-Speed: {vehicle.max_atmosphering_speed}
                  </li>
                  <li className="list-group-item">
                    Cargo-Capactiy: {vehicle.cargo_capacity}
                  </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <section className="vehicle_list">
        <div className="row">
          {vehicles}
        </div>
      </section>
    )
  }
}
