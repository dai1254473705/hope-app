import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner1 from './Banner1';
import Teams0 from './Teams0';
import Article from '@/components/Article';
import Feature2 from './Feature2';
import Nav from './Nav';
import Feature8 from './Feature8';
import Feature7 from './Feature7';
import Footer from './Footer';
import Footer1 from '@/components/Footer';

import {
  Banner10DataSource,
  Teams00DataSource,
  Feature20DataSource,
  Nav30DataSource,
  Feature80DataSource,
  Feature70DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      // <Nav
      //   id="Nav3_0"
      //   key="Nav3_0"
      //   dataSource={Nav30DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Article key="article_09" title="推荐文章" />,
      <Article key="article_10" title="推荐图片" />,
      // <Feature2
      //   id="Feature2_0"
      //   key="Feature2_0"
      //   dataSource={Feature20DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // <Feature8
      //   id="Feature8_0"
      //   key="Feature8_0"
      //   dataSource={Feature80DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      // <Feature7
      //   id="Feature7_0"
      //   key="Feature7_0"
      //   dataSource={Feature70DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Footer1 key="Footer_0" />,
    ];
    return (
      <div className="templates-wrapper">
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
