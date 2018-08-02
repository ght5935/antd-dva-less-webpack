/**
 * Created by Jason on 2018/2/5.
 */
import React from 'react';
import { connect } from 'dva';
import {routerRedux} from 'dva/router';

import NavigationPage from '../navigation/IndexPage';


class IndexPage extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'index/getShowIndex'
    });
  }
  renderInitModule = () => {
    if (this.props.index.initModule) {
      switch (this.props.index.initModule.url) {
        case 'realMonitoring':
          return <RealMonitor location={this.props.location} initHash={'realMonitoring'}/>;
          break;
        default:
          return <NavigationPage location={this.props.location} initHash={'/'}/>;
      }
    }
  };

  render() {
    return (
      <div style={{height: '100%', width: '100%', position: 'relative'}}>
         { this.renderInitModule() }
      </div>
    );
  }
}

function mapStateToProps({ index }) {
  return { index };
}

export default connect(mapStateToProps)(IndexPage);
