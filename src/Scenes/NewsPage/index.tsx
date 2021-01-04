import * as React from 'react';
import './style.css';
import Dashboard from 'Components/DashboardLayout';
import { RouteComponentProps } from 'react-router-dom';
// import BigItem from './Components/BigItem';
import NewItem from './Components/NewItem';

class NewsPage extends React.Component<RouteComponentProps<{}>, {}> {
  listNew = [
    {
      linkImage: 'http://monstermathclub.com/wp-content/uploads/2017/02/nice-homes-great-nice-houses-on-the-beach.jpg',
      title: 'Mansion on the Hollywood Hills',
      address: 'Los Angeles',
      date: '1/03/2021',
      content: ''
    },
    {
      linkImage: 'https://cdn-images-1.medium.com/max/1600/1*v38MEf_ygKKV6yemrICgDA.jpeg',
      title: 'San Francisco Penthouse',
      address: 'San Francisco',
      date: '12/24/2020',
      content: ''
    },
    {
      linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/e9/61/d5/e961d52aa9a87bc47a365e6c593421db.jpg',
      title: 'Portland Traditional Designed House',
      address: 'Oregon',
      date: '11/23/2018',
      content: ''
    },
    {
      linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/a8/6a/f7/a86af7857e40acb712bbdd0add98b18c.jpg',
      title: 'Victorian House in SF',
      address: 'San Francisco',
      date: '8/14/2019',
      content: ''
    }
  ];
  render() {
    return (
      <div className="newsPage">
        <Dashboard >
          <div className="newsWrapper">
            <div className="dashboardTitle">
              <h3>Projects</h3>
              <h5>We'd love to find out more about you. It'll help us make
                sure our website and apps tick the right boxes.</h5>
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
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default NewsPage;