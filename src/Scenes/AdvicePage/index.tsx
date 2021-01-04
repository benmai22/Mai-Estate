import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from 'Components/DashboardLayout';
import NewItem from 'Scenes/NewsPage/Components/NewItem';

class AdvicePage extends React.Component<RouteComponentProps<{type: string}>, {}> {
  listNew = [
    {
      linkImage: 'http://monstermathclub.com/wp-content/uploads/2017/02/nice-homes-great-nice-houses-on-the-beach.jpg',
      title: 'Miniature House',
      address: 'San Francisco',
      date: '12/14/2020',
      content: 'Need help reinnovating your house? We can provide a list of companies within your area!'
    },
    {
      linkImage: 'https://cdn-images-1.medium.com/max/1600/1*v38MEf_ygKKV6yemrICgDA.jpeg',
      title: 'Mid-Sized House',
      address: 'New York',
      date: '08/23/2018',
      content: 'Need help reinnovating your house? We can provide a list of companies within your area!'
    },
    {
      linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/e9/61/d5/e961d52aa9a87bc47a365e6c593421db.jpg',
      title: 'Mansion',
      address: 'Los Angeles',
      date: '10/14/2019',
      content: 'Need help reinnovating your house? We can provide a list of companies within your area!'
    },
    {
      linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/a8/6a/f7/a86af7857e40acb712bbdd0add98b18c.jpg',
      title: '2-Story House',
      address: 'Berkeley',
      date: '11/14/2020',
      content: 'Need help reinnovating your house? We can provide a list of companies within your area!'
    }
  ];
  render() {
    return (
      <div className="advicePage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Advices ({this.props.match.params.type})</h3>
          </div>
          <div className="dashboardBody row">
              {/* <div className="bigItemWrapper">
                <BigItem linkImage={this.linkBigItem} />
              </div> */}
              <div className="newItemWrapper container">
                {this.listNew.map((item, index) => {
                  return (
                    <div className="col-xs-12 col-sm-12 col-md-6" key={index}>
                      <NewItem data={item} />
                    </div>
                  );
                })}
              </div>
            </div>
        </Dashboard>
      </div>
    );
  }
}

export default AdvicePage;