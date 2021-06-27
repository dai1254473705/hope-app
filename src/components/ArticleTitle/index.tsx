import React from 'react';
import { DoubleRightOutlined } from '@ant-design/icons';
import './index.less';

interface IProps {
  title: string; //左侧标题
  subTitle: string; //右侧标题
  showMore: boolean; //显示右侧更错
  moreLink: string; //更多点击的跳转链接
}
class ArticleTitle extends React.Component<IProps, {}> {
  render() {
    const { title, subTitle, showMore, moreLink } = this.props;
    return (
      <div className="comp-article-content">
        <div className="comp-title-content">
          <span className="comp-title">{title}</span>
          {showMore && (
            <span className="comp-title-right">
              {subTitle}
              <DoubleRightOutlined />
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default ArticleTitle;
