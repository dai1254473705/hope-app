#!/bin/bash
# 通过脚本自动执行部署

# 1. 打包到dist

npm run build

# 2. 切换到fecat项目根目录
cd /Users/daiyunzhou/code/hope/fecat

# 2.1 更新远程代码
git pull

# 3. 删除docs文件下全部文件（github pages 可以指定静态资源在项目的docs目录下）
rm -rf docs/

# 4. 将vuepress项目打包好的dist复制到当前项目（fecat）根目录下
cp -r /Users/daiyunzhou/code/hope/wechat-vue-markdown/dist ./

# 5. 修改fecat项目下的dist文件名为docs
mv dist/ docs/

# 6.将CNAME放到docs中
cp -r ./CNAME ./docs/

# 7. add 本地代码
git add .

# 8. 提交代码
git commit -m "auto commit code"

# 9. 推送到远程分支
git push
