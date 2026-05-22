Page({
  data: {
    // TODO: 黑客松现场把这里改成你们部署后的 H5 URL
    // 例如：https://<your-domain>/nuanshou/index.html
    url: "https://example.com/nuanshou/h5/index.html"
  },
  onLoad(query) {
    // 支持通过参数覆盖：/pages/webview/webview?url=<encoded>
    if (query && query.url) {
      this.setData({ url: decodeURIComponent(query.url) });
    }
  }
});
