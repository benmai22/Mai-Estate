import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from 'Components/DashboardLayout';
import SingelHouse from 'Components/SingleHouse';

const houseData = {
  name: 'Penthouse in Downtown Los Angeles',
  address: ' 1234 Becat St, Los Angeles, CA, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: ''
};

class MyhousePage extends React.Component<RouteComponentProps<{id: string}>, {}> {
  render() {
    return (
      <div className="myhousePage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Property ({this.props.match.params.id})</h3>
          </div>
          <div className="myHouseWrapper">
           <SingelHouse data={houseData} />
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default MyhousePage;