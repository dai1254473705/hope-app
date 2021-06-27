import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { DoubleRightOutlined } from '@ant-design/icons';
import ArticleTitle from '../ArticleTitle';
import './index.less';

interface IProps {
  isMobile: boolean; //是不是手机
  title: string; //显示的标题
}
class Article extends React.Component<IProps, {}> {
  render() {
    const { isMobile, title } = this.props;
    return (
      <div className="comp-article-content">
        <ArticleTitle
          title={title}
          showMore={true}
          moreLink={''}
          subTitle={'more'}
        />

        <div className="card-group">
          {/* <OverPack> */}
          <TweenOneGroup
            component={Row}
            className="card-tween-group"
            key="ul"
            enter={{
              y: '+=30',
              opacity: 0,
              type: 'from',
              ease: 'easeInOutQuad',
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <div className="comp-card-content" key={item}>
                  <div className="card-image">
                    <img
                      src="http://static.netyali.cn/image/446A1590.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-desc">
                    <p className="card-desc-title">
                      标题啊大发电房啊方式标题啊大发电房啊方式标题啊大发电房啊方式
                    </p>
                    <p className="card-desc-memo">
                      标题啊大发电房啊方式标题啊大发电房啊方式标题啊大发电房啊方式标题啊大发电房啊方式标题啊大发电房啊方式标题啊大发电房啊方式
                    </p>
                  </div>
                </div>
              );
            })}
          </TweenOneGroup>
          {/* </OverPack> */}
        </div>
      </div>
    );
  }
}

export default Article;
