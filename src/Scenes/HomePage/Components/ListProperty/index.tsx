import * as React from 'react';
import './style.css';
import SingelHouse from 'Components/SingleHouse';
const houseData: any[] = [{
  name: 'Modern Residence in Downtown NYC',
  address: ' 857 Hapogy St, Brooklyn, NY, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: ''
}, {
  name: 'Penthouse in Downtown Los Angeles',
  address: ' 1234 Becat St, Los Angeles, CA, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: ''
}, {
  name: 'Exotic Victorian House with a view of the Golden Gate Bridge',
  address: ' 39 Reeming Ave, San Francisco, CA, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: ''
}, {
  name: '2-Story House with a swimming pool at the back',
  address: ' 169 Warren St, San Jose, CA, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: ''
}, {
  name: 'Futuristic House near a beach ',
  address: '563 Newton Ave, Huntington Beach, CA , USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: ''
}, {
  name: 'Gated Community 2-Story House with a Large Garage',
  address: ' 169 Copender St, Rowland Heights, CA, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: ''
}];

class ListProperty extends React.Component<{}, {}> {
  render() {
    return (
      <div className="listProperty">
        <div className="row listPropertyHeader">
          <h3>Recently Listed Properties</h3>
          <h5>Feel free to check out some of these houses below!</h5>
        </div>
        <div className="row listPropertyContent">
          {houseData.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListProperty;