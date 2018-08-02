import React from 'react';
import { connect } from 'dva';
import { Row } from 'antd';
import { Link } from 'dva/router';
import QueueAnim from 'rc-queue-anim';

import styles from './IndexPage.less';

class IndexPage extends React.Component {

  renderNavList = () => {
    if (1 > 0) {
      return (
        <div className={styles.nav}>
          <div className={styles.navName}>导航一</div>
          <div className={styles.navName}>导航二</div>
          <div className={styles.navName}>导航三</div>
          <div className={styles.navName}>导航四</div>
          <div className={styles.navName}>导航五</div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <QueueAnim
          className={styles.basics}
          animConfig={[
            { opacity: [1, 0], translateY: [0, 30] },
            { height: 0 },
          ]}
          ease={['easeOutQuart', 'easeInOutQuart']}
          duration={[550, 450]}
          interval={150}
        >
          {this.renderNavList()}
        </QueueAnim>
      </div>
    );
  }
}

function mapStateToProps({ navigation }) {
  return { navigation };
}

export default connect(mapStateToProps)(IndexPage);
