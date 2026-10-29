/* 網站清單 Site list
 * 加新網站：喺下面 SITES 加多一段 { ... } 就得。
 * To add a site: copy one block below and edit it.
 *   id     : 唯一代號 unique id
 *   url    : 網址 full URL
 *   zh/en  : 中文名 / English name
 *   icon   : ICONS 入面嘅名 (plane, bus, doubledecker, camera, cross, basket, person, globe, shop, bowl)
 *   tag    : 細標籤 small badge (optional), e.g. "🇭🇰 HK"
 *   color  : 圖示底色 tile colour
 */
window.SITES = [
  { id: "hkairport",  url: "https://ittonywong.github.io/hkairport/",  zh: "香港機場航班",   en: "HK Airport Flights",       icon: "plane",        tag: "🇭🇰 HK", color: "#0b3c5d" },
  { id: "aklairport", url: "https://ittonywong.github.io/aklairport/", zh: "奧克蘭機場航班", en: "Auckland Airport Flights", icon: "plane",        tag: "🇳🇿 NZ", color: "#1d4e89" },
  { id: "kmb",        url: "https://ittonywong.github.io/kmb/",        zh: "九巴到站",       en: "KMB Bus Arrivals",         icon: "doubledecker", tag: "",      color: "#b71c1c" },
  { id: "auckland",   url: "https://ittonywong.github.io/auckland/",   zh: "奧克蘭巴士到站", en: "Auckland Bus Arrivals",    icon: "bus",          tag: "",      color: "#00695c" },
  { id: "akltraffic", url: "https://ittonywong.github.io/akltraffic/", zh: "奧克蘭路況鏡頭", en: "Auckland Traffic Cams",    icon: "camera",       tag: "",      color: "#4a4a8a" },
  { id: "havesick",   url: "https://ittonywong.github.io/havesick/",   zh: "急症輪候時間",   en: "Have Sick (Urgent Care)",  icon: "cross",        tag: "",      color: "#c62828" },
  { id: "nzgrocery",  url: "https://ittonywong.github.io/nzgrocery/",  zh: "紐西蘭超市格價", en: "NZ Grocery Prices",        icon: "basket",       tag: "",      color: "#1b5e20" },
  { id: "members",    url: "https://ittonywong.github.io/members/",    zh: "會員",           en: "Members",                  icon: "person",       tag: "",      color: "#5d4037" },
  { id: "isocutestore", url: "https://ittonywong.github.io/isocutestore/", zh: "3D 打印網店", en: "3D Print Shop",           icon: "shop",         tag: "試用",  color: "#e65100" },
  { id: "tonighteatwhatgive", url: "https://ittonywong.github.io/tonighteatwhatgive/", zh: "今晚食乜餸", en: "Tonight's Recipes", icon: "bowl", tag: "", color: "#ad1457" }
];

/* 原創簡單圖示 Original simple icons (viewBox 0 0 48 48, white strokes/fills) */
window.ICONS = {
  plane: '<path fill="currentColor" d="M44 26v-4L27 13V6a3 3 0 0 0-6 0v7L4 22v4l17-4v9l-5 4v3l8-2 8 2v-3l-5-4v-9z"/>',
  bus: '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="9" y="7" width="30" height="30" rx="5"/><path d="M9 25h30M9 15h30"/></g><g fill="currentColor"><circle cx="16" cy="31" r="2.5"/><circle cx="32" cy="31" r="2.5"/><rect x="12" y="37" width="6" height="5" rx="1.5"/><rect x="30" y="37" width="6" height="5" rx="1.5"/></g>',
  doubledecker: '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="10" y="5" width="28" height="34" rx="4"/><path d="M10 21h28"/></g><g fill="currentColor"><rect x="14" y="10" width="20" height="7" rx="1.5"/><rect x="14" y="25" width="20" height="7" rx="1.5"/><rect x="13" y="39" width="6" height="4" rx="1.5"/><rect x="29" y="39" width="6" height="4" rx="1.5"/></g>',
  camera: '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M6 14h22l8 6v8l-8 6H6z"/><path d="M36 22l7-4v12l-7-4"/></g><circle cx="15" cy="24" r="4" fill="currentColor"/>',
  cross: '<path fill="currentColor" d="M18 6h12v12h12v12H30v12H18V30H6V18h12z"/>',
  basket: '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M5 19h38l-4 21H9z"/><path d="M15 19l6-12M33 19l-6-12M18 26v8M24 26v8M30 26v8"/></g>',
  person: '<g fill="currentColor"><circle cx="24" cy="15" r="8"/><path d="M8 42c0-9 7-15 16-15s16 6 16 15z"/></g>',
  globe: '<g fill="none" stroke="currentColor" stroke-width="3"><circle cx="24" cy="24" r="17"/><path d="M7 24h34M24 7c-8 9-8 25 0 34M24 7c8 9 8 25 0 34"/></g>',
  shop: '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M8 18h32l-2 22H10z"/><path d="M16 18V14a8 8 0 0 1 16 0v4"/><path d="M20 26h8"/></g>',
  bowl: '<g fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M8 22h32c0 10-7 16-16 16S8 32 8 22z"/><path d="M14 22c1-6 4-10 10-10s9 4 10 10"/><path d="M24 6v4M18 8l2 3M30 8l-2 3"/></g>'
};
