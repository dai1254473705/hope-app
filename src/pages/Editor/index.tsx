// 引入编辑器样式
import 'braft-editor/dist/index.css';
import 'braft-editor/dist/output.css';
import 'braft-extensions/dist/table.css';
import './less/index.less';

import React, { Component } from 'react';
import {
  Breadcrumb,
  Divider,
  message,
  Button,
  Layout,
  Form,
  Upload,
} from 'antd';
import { ContentUtils } from 'braft-utils';
import Table from 'braft-extensions/dist/table';
import BraftEditor from 'braft-editor';
import { Link } from 'umi';
import { PictureOutlined } from '@ant-design/icons';
import Utils from '@/util';

const { Content } = Layout;

const options = {
  defaultColumns: 3, // 默认列数
  defaultRows: 3, // 默认行数
  withDropdown: true, // 插入表格前是否弹出下拉菜单
  exportAttrString: '', // 指定输出HTML时附加到table标签上的属性字符串
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
};
BraftEditor.use(Table(options));

interface IProps {
  match: {
    params: {
      id?: number;
    };
  };
}
interface IState {
  editorState: {
    toRAW: Function;
    toHTML: Function;
  };
  loading: boolean;
  visible: boolean;
  title: string;
  chooseType: string;
}
export default class EditorPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // state
    this.state = {
      editorState: BraftEditor.createEditorState(null),
      chooseType: 'chooseType',
      loading: false,
      visible: false,
      title: '新增文章',
    };
  }
  componentDidMount() {
    console.log(this.props, 'props');
  }
  // 监听内容改变
  private handleEditorChange = (editorState: any) => {
    console.log(editorState.toHTML(), 'editorState');
    this.setState({ editorState });
  };
  // 提交前验证参数
  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlExtends = this.state.editorState.toRAW();
    const htmlContent = this.state.editorState.toHTML();
    const { id } = this.props.match.params;
    const reqData: any = {
      html: htmlContent,
      extends: JSON.stringify(htmlExtends),
      editor: 'braft-editor',
      uid: Utils.cookie.get(Utils.cookieName.uid) || '',
      text_num: htmlContent.replace(Utils.regexp.Unified_Ideograph, '').length,
    };
    // 请登录
    // if (!reqData.uid) {
    //   return message.warning('请先登录');
    // }
    if (id) {
      reqData.id = id;
    }
    if (!id) {
      message.warning('当前是新增文章');
    }
    // 判断类型是否存在
    if (!reqData.type) {
      return message.warning('文章所属分类必填');
    }
    // const result = await Service.article.articleUpsert({method: 'POST',...reqData});

    // 到列表页
    if (!id) {
      // this.props.history.push({ pathname: '/article/list/' });
    }
    message.warning('result.message');
  };
  /**
   * 上传图片前的处理方法
   * @memberof UploadImage
   * @parma { Object } file 文件
   */
  beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只能上传 JPG/PNG 格式!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error('必须小于 5MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  // 上传图片
  handleChange = (info: any) => {
    console.log(info, 'infoinfoinfo');
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.setState({ loading: false });
      // 判断是否成功
      const result = info.file.response;
      if (result.code === '000000' && result.data) {
        message.success(result.message);
        // 上传图片
        this.setState({
          editorState: ContentUtils.insertMedias(this.state.editorState, [
            {
              type: 'IMAGE',
              url: `http://${result.data}`,
            },
          ]),
        });
        return;
      }
      message.success('上传完成，失败！');
    }
  };
  render() {
    const { editorState } = this.state;
    const extendControls: any = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <Upload
            accept="image/*"
            showUploadList={false}
            data={{
              qtoken: Utils.cookie.get(Utils.cookieName.qtoken) || '',
              uid: Utils.cookie.get(Utils.cookieName.uid) || '',
              type: this.state.chooseType,
            }}
            action="/hope/api/v1/image/upload"
            beforeUpload={this.beforeUpload}
            onChange={this.handleChange}
          >
            {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
            <button
              type="button"
              className="control-item button upload-button"
              data-title="插入图片"
            >
              <PictureOutlined />
            </button>
          </Upload>
        ),
      },
    ];
    return (
      <Layout className="spider">
        <Breadcrumb className="breadCrumbWrapper">
          <Breadcrumb.Item>
            <Link to={{ pathname: '/article/list/' }}>文章</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>braft-editor编辑器</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="my-component">
          <Divider>
            下面开始{' '}
            <Button
              type="primary"
              onClick={this.submitContent}
              className="save-btn"
            >
              保存
            </Button>{' '}
            你的表演~
          </Divider>
          <BraftEditor
            id="editor-id-1"
            value={editorState}
            onChange={this.handleEditorChange}
            onSave={this.submitContent}
            extendControls={extendControls}
          />
        </Content>
      </Layout>
    );
  }
}
