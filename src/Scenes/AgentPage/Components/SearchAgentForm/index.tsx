import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import AgentInfo from '../AgentInfo';

interface SearchAgentFormStates {
  resultTab: 'agencies' | 'agents';
}

class SearchAgentForm extends React.Component<{}, SearchAgentFormStates> {
  agentList = [
    {
      avatar: '',
      name: 'Jared Frankle',
      title: 'Agent',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: '',
      name: 'Nick White',
      title: 'Agent',
      address: 'San Francisco, CA, USA'
    },
    {
      avatar: '',
      name: 'Harold Boche',
      title: 'Agent',
      address: 'Rowland Heights, CA, USA'
    },
    {
      avatar: '',
      name: 'Jonathan Nguyen',
      title: 'Agent',
      address: 'Oakland, CA, USA'
    },
    {
      avatar: '',
      name: 'Rebecca Colon',
      title: 'Agent',
      address: 'Piedmont, CA, USA'
    },
    {
      avatar: '',
      name: 'Jerry Tran',
      title: 'Agent',
      address: 'Irvine, CA, USA'
    },
    {
      avatar: '',
      name: 'Matthew Joo',
      title: 'Agent',
      address: 'Arcadia, CA, USA'
    },
    {
      avatar: '',
      name: 'Jessica Franco',
      title: 'Agent',
      address: 'Los Angeles, CA, USA'
    },
    {
      avatar: '',
      name: 'James Gonzales',
      title: 'Agent',
      address: 'Sacramento, CA, USA'
    },
    {
      avatar: '',
      name: 'Samantha Balubut',
      title: 'Agent',
      address: 'San Jose, CA, USA'
    }
  ];
  constructor() {
    super();
    this.state = {
      resultTab: 'agents'
    };
  }
  changeResultTab = (tab: 'agencies' | 'agents') => {
    if (tab !== this.state.resultTab) {
      this.setState({
        resultTab: tab
      });
    }
  }
  resultAgencies = () => {
    return (
      <h2>Agencies</h2>
    );
  }
  resultAgents = () => {
    return (
      <ul className="agentsResult">
        {this.agentList.map((item, index) => {
          return (
            <li key={index}>
              <AgentInfo avatar={item.avatar} name={item.name} title={item.title} address={item.address} />
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <div className="dashboardTitle">
          <h3>Find Agent</h3>
          <h5>We'd love to find out more about you. It'll help us make
sure our website and apps tick the right boxes.</h5>
        </div>
        <div className="searchAgentForm">
          <div className="input-group searchForm">
            <input type="text" name="" id="" className="form-control" />
            <span className="input-group-btn"><button className="btn btn-green"><Icon name="search" /></button></span>
          </div>
          <div className="resultTab">
            <ul>
              <li
                className={this.state.resultTab === 'agents' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('agents')}
              >
                <a><Icon name="map-o" /> Agents</a>
              </li>
              <li
                className={this.state.resultTab === 'agencies' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('agencies')}
              >
                <a><Icon name="th-list" /> Agencies</a>
              </li>
            </ul>
          </div>
          <div className="resultBody">
            <h3>Result:</h3>
            {this.state.resultTab === 'agents' ? this.resultAgents() : this.resultAgencies()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAgentForm;