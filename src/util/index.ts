/**
 * 打开浏览器新窗口
 */
export const openNewWindow = (url: string) => {
  const newWindow = window.open('_blank');
  setTimeout(() => {
    newWindow && (newWindow.location.href = url);
  }, 0);
};

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
