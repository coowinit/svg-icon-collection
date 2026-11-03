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
  }
];
