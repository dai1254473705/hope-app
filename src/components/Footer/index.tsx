import React from 'react';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import './index.less';

const qrcodeFe = require('../../../static/footer/qrcode_fe.jpeg');
const qrcodePhoto = require('../../../static/footer/qrcode_photo.jpg');

const menu = [
  {
    title: '网站首页',
    url: 'http://photo.netyali.cn/',
  },
  {
    title: '摄影',
    url: '',
  },
  {
    title: '前端',
    url: 'http://www.netyali.cn/',
  },
];
const footerFe = [
  {
    title: '前端面试题',
    url: 'https://www.netyali.cn/interview/',
  },
  {
    title: '原生js',
    url: 'https://www.netyali.cn/nativejs/',
  },
  {
    title: 'git使用指南',
    url: 'https://www.netyali.cn/git/',
  },
  {
    title: '前端资源分享',
    url: 'https://www.netyali.cn/resources',
  },
];

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="comp-footer-content">
        <div className="footer-menu">
          {menu.map((item) => (
            <a
              href={item.url}
              key={item.title}
              target="_blank"
              className="footer-menu-item"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="footer-content">
          <div className="footer-left">
            <div className="qr-code" key="1">
              <p>摄影公众号</p>
              <img src={qrcodePhoto} alt="" />
            </div>
            <div className="qr-code" key="2">
              <p>前端公众号</p>
              <img src={qrcodeFe} alt="" />
            </div>
          </div>
          <div className="footer-right">
            <div className="link-group">
              <dl>
                <dt className="link-title">前端</dt>
                {footerFe.map((item) => (
                  <dd className="link-title-item">
                    <a href={item.url} target="_blank" key={item.title}>
                      {item.title}
                    </a>
                  </dd>
                ))}
              </dl>
            </div>
            <div className="link-group">
              <dl>
                <dt className="link-title">摄影</dt>
                {footerFe.map((item) => (
                  <dd className="link-title-item">
                    <a href={item.url} target="_blank" key={item.title}>
                      {item.title}
                    </a>
                  </dd>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          京ICP备2020043737号-1 Copyright © 2018 前端小喵
        </div>
      </div>
    );
  }
}

export default Footer;
