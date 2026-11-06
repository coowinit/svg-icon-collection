// Add a new SVG file to icons/ and one item below. Keep filenames unique.
const ICONS = [
  {
    "file": "flag-de.svg",
    "name": "Germany",
    "keywords": "德国 de flag country de"
  },
  {
    "file": "flag-gb.svg",
    "name": "United Kingdom",
    "keywords": "英国 gb flag country en"
  },
  {
    "file": "flag-es.svg",
    "name": "Spain",
    "keywords": "西班牙 es flag country es"
  },
  {
    "file": "flag-fr.svg",
    "name": "France",
    "keywords": "法国 fr flag country fr"
  },
  {
    "file": "flag-in.svg",
    "name": "India",
    "keywords": "印度 in flag country hi"
  },
  {
    "file": "flag-it.svg",
    "name": "Italy",
    "keywords": "意大利 it flag country it"
  },
  {
    "file": "flag-jp.svg",
    "name": "Japan",
    "keywords": "日本 jp flag country ja"
  },
  {
    "file": "flag-kr.svg",
    "name": "South Korea",
    "keywords": "韩国 kr flag country ko"
  },
  {
    "file": "flag-pt.svg",
    "name": "Portugal",
    "keywords": "葡萄牙 pt flag country pt"
  },
  {
    "file": "flag-ru.svg",
    "name": "Russia",
    "keywords": "俄罗斯 ru flag country ru"
  },
  {
    "file": "flag-tr.svg",
    "name": "Turkey",
    "keywords": "土耳其 tr flag country tr"
  },
  {
    "file": "flag-ua.svg",
    "name": "Ukraine",
    "keywords": "乌克兰 ua flag country uk"
  },
  {
    "file": "flag-cn.svg",
    "name": "China",
    "keywords": "中国 cn flag country zh"
  },
  {
    "file": "home.svg",
    "name": "Home",
    "keywords": "home"
  },
  {
    "file": "search.svg",
    "name": "Search",
    "keywords": "search"
  },
  {
    "file": "menu.svg",
    "name": "Menu",
    "keywords": "menu"
  },
  {
    "file": "close.svg",
    "name": "Close",
    "keywords": "close"
  },
  {
    "file": "check.svg",
    "name": "Check",
    "keywords": "check"
  },
  {
    "file": "plus.svg",
    "name": "Plus",
    "keywords": "plus"
  },
  {
    "file": "minus.svg",
    "name": "Minus",
    "keywords": "minus"
  },
  {
    "file": "chevron-down.svg",
    "name": "Chevron Down",
    "keywords": "chevron down"
  },
  {
    "file": "chevron-up.svg",
    "name": "Chevron Up",
    "keywords": "chevron up"
  },
  {
    "file": "chevron-left.svg",
    "name": "Chevron Left",
    "keywords": "chevron left"
  },
  {
    "file": "chevron-right.svg",
    "name": "Chevron Right",
    "keywords": "chevron right"
  },
  {
    "file": "arrow-left.svg",
    "name": "Arrow Left",
    "keywords": "arrow left"
  },
  {
    "file": "arrow-right.svg",
    "name": "Arrow Right",
    "keywords": "arrow right"
  },
  {
    "file": "arrow-up.svg",
    "name": "Arrow Up",
    "keywords": "arrow up"
  },
  {
    "file": "arrow-down.svg",
    "name": "Arrow Down",
    "keywords": "arrow down"
  },
  {
    "file": "external-link.svg",
    "name": "External Link",
    "keywords": "external link"
  },
  {
    "file": "link.svg",
    "name": "Link",
    "keywords": "link"
  },
  {
    "file": "download.svg",
    "name": "Download",
    "keywords": "download"
  },
  {
    "file": "upload.svg",
    "name": "Upload",
    "keywords": "upload"
  },
  {
    "file": "copy.svg",
    "name": "Copy",
    "keywords": "copy"
  },
  {
    "file": "edit.svg",
    "name": "Edit",
    "keywords": "edit"
  },
  {
    "file": "delete.svg",
    "name": "Delete",
    "keywords": "delete"
  },
  {
    "file": "settings.svg",
    "name": "Settings",
    "keywords": "settings"
  },
  {
    "file": "user.svg",
    "name": "User",
    "keywords": "user"
  },
  {
    "file": "users.svg",
    "name": "Users",
    "keywords": "users"
  },
  {
    "file": "mail.svg",
    "name": "Mail",
    "keywords": "mail"
  },
  {
    "file": "phone.svg",
    "name": "Phone",
    "keywords": "phone"
  },
  {
    "file": "globe.svg",
    "name": "Globe",
    "keywords": "globe"
  },
  {
    "file": "location.svg",
    "name": "Location",
    "keywords": "location"
  },
  {
    "file": "calendar.svg",
    "name": "Calendar",
    "keywords": "calendar"
  },
  {
    "file": "clock.svg",
    "name": "Clock",
    "keywords": "clock"
  },
  {
    "file": "heart.svg",
    "name": "Heart",
    "keywords": "heart"
  },
  {
    "file": "star.svg",
    "name": "Star",
    "keywords": "star"
  },
  {
    "file": "info.svg",
    "name": "Info",
    "keywords": "info"
  },
  {
    "file": "alert.svg",
    "name": "Alert",
    "keywords": "alert"
  },
  {
    "file": "image.svg",
    "name": "Image",
    "keywords": "image"
  },
  {
    "file": "camera.svg",
    "name": "Camera",
    "keywords": "camera"
  },
  {
    "file": "play.svg",
    "name": "Play",
    "keywords": "play"
  },
  {
    "file": "pause.svg",
    "name": "Pause",
    "keywords": "pause"
  },
  {
    "file": "file.svg",
    "name": "File",
    "keywords": "file"
  },
  {
    "file": "folder.svg",
    "name": "Folder",
    "keywords": "folder"
  },
  {
    "file": "cart.svg",
    "name": "Cart",
    "keywords": "cart"
  },
  {
    "file": "package.svg",
    "name": "Package",
    "keywords": "package"
  },
  {
    "file": "truck.svg",
    "name": "Truck",
    "keywords": "truck"
  },
  {
    "file": "filter.svg",
    "name": "Filter",
    "keywords": "filter"
  },
  {
    "file": "eye.svg",
    "name": "Eye",
    "keywords": "eye"
  },
  {
    "file": "lock.svg",
    "name": "Lock",
    "keywords": "lock"
  },
  {
    "file": "refresh.svg",
    "name": "Refresh",
    "keywords": "refresh"
  },
  {
    "file": "grid.svg",
    "name": "Grid",
    "keywords": "grid"
  },
  {
    "file": "list.svg",
    "name": "List",
    "keywords": "list"
  },
  {"file":"share.svg","name":"Share","keywords":"分享 社交 media social"},
  {"file":"message-circle.svg","name":"Message Circle","keywords":"消息 私信 chat 社交"},
  {"file":"messages.svg","name":"Messages","keywords":"聊天 对话 社交 评论"},
  {"file":"at-sign.svg","name":"At Sign","keywords":"艾特 @ 社交 邮箱"},
  {"file":"hash.svg","name":"Hashtag","keywords":"井号 话题 社媒 标签"},
  {"file":"thumbs-up.svg","name":"Thumbs Up","keywords":"点赞 喜欢 社交 反馈"},
  {"file":"user-plus.svg","name":"User Plus","keywords":"关注 粉丝 新增用户"},
  {"file":"rss.svg","name":"RSS","keywords":"订阅 信息流 社媒 blog"},
  {"file":"megaphone.svg","name":"Megaphone","keywords":"推广 营销 广播 社交"},
  {"file":"send.svg","name":"Send","keywords":"发送 私信 投稿 纸飞机"},
  {"file":"video.svg","name":"Video","keywords":"视频 社交 直播"},
  {"file":"podcast.svg","name":"Podcast","keywords":"播客 音频 社媒"},
  {"file":"radio.svg","name":"Radio","keywords":"直播 广播 电台 signal"},
  {"file":"bookmark.svg","name":"Bookmark","keywords":"收藏 书签 社交"},
  {"file":"bell.svg","name":"Bell","keywords":"通知 提醒 社交"},
  {"file":"comment.svg","name":"Comment","keywords":"评论 留言 反馈"},
  {"file":"pencil.svg","name":"Pencil","keywords":"铅笔 书写 编辑"},
  {"file":"pen-tool.svg","name":"Pen Tool","keywords":"钢笔工具 贝塞尔 设计 矢量"},
  {"file":"brush.svg","name":"Brush","keywords":"画笔 设计 绘画"},
  {"file":"palette.svg","name":"Palette","keywords":"调色板 颜色 设计"},
  {"file":"crop.svg","name":"Crop","keywords":"裁剪 图片 设计"},
  {"file":"layers.svg","name":"Layers","keywords":"图层 设计 叠加"},
  {"file":"ruler.svg","name":"Ruler","keywords":"标尺 测量 设计"},
  {"file":"wand.svg","name":"Magic Wand","keywords":"魔棒 设计 特效 AI"},
  {"file":"sliders.svg","name":"Sliders","keywords":"调节 参数 设计 滑块"},
  {"file":"code.svg","name":"Code","keywords":"代码 编程 开发"},
  {"file":"terminal.svg","name":"Terminal","keywords":"终端 命令行 开发"},
  {"file":"braces.svg","name":"Braces","keywords":"大括号 JSON 编程"},
  {"file":"bug.svg","name":"Bug","keywords":"漏洞 调试 Debug"},
  {"file":"git-branch.svg","name":"Git Branch","keywords":"分支 版本控制 代码"},
  {"file":"git-merge.svg","name":"Git Merge","keywords":"合并 代码 Git"},
  {"file":"database.svg","name":"Database","keywords":"数据库 SQL 开发"},
  {"file":"server.svg","name":"Server","keywords":"服务器 主机 后端"},
  {"file":"cloud.svg","name":"Cloud","keywords":"云端 云服务 托管"},
  {"file":"api.svg","name":"API","keywords":"接口 API 请求 开发"},
  {"file":"laptop.svg","name":"Laptop","keywords":"笔记本 电脑 设备"},
  {"file":"monitor.svg","name":"Monitor","keywords":"显示器 桌面 设备"},
  {"file":"smartphone.svg","name":"Smartphone","keywords":"手机 移动 设备"},
  {"file":"tablet.svg","name":"Tablet","keywords":"平板 设备"},
  {"file":"keyboard.svg","name":"Keyboard","keywords":"键盘 输入 设备"},
  {"file":"mouse.svg","name":"Mouse","keywords":"鼠标 设备"},
  {"file":"headphones.svg","name":"Headphones","keywords":"耳机 音频 设备"},
  {"file":"printer.svg","name":"Printer","keywords":"打印机 设备 文档"},
  {"file":"file-text.svg","name":"File Text","keywords":"文本文档 文件 TXT"},
  {"file":"file-pdf.svg","name":"File PDF","keywords":"PDF 文档 文件"},
  {"file":"file-spreadsheet.svg","name":"Spreadsheet","keywords":"电子表格 Excel XLSX 数据"},
  {"file":"file-code.svg","name":"File Code","keywords":"源码文件 HTML JS PHP"},
  {"file":"folder-open.svg","name":"Folder Open","keywords":"打开文件夹 目录"},
  {"file":"clipboard.svg","name":"Clipboard","keywords":"剪贴板 清单 文档"},
  {"file":"archive.svg","name":"Archive","keywords":"归档 压缩 zip 文件"},
  {"file":"shopping-bag.svg","name":"Shopping Bag","keywords":"购物袋 商城 电商"},
  {"file":"store.svg","name":"Store","keywords":"商店 门店 电商 商城"},
  {"file":"credit-card.svg","name":"Credit Card","keywords":"银行卡 信用卡 结算"},
  {"file":"wallet.svg","name":"Wallet","keywords":"钱包 支付 金额"},
  {"file":"receipt.svg","name":"Receipt","keywords":"收据 订单 发票"},
  {"file":"tag.svg","name":"Tag","keywords":"价格标签 商品 SKU"},
  {"file":"gift.svg","name":"Gift","keywords":"礼物 促销 优惠"},
  {"file":"barcode.svg","name":"Barcode","keywords":"条形码 商品 物流"},
  {"file":"qr-code.svg","name":"QR Code","keywords":"二维码 商品 扫码"}
];
