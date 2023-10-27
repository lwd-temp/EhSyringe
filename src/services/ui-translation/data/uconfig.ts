import { merge } from '../helper';

merge(
    /^\/uconfig\.php/,
    undefined,
    {
        'Selected Profile:': '当前配置：',
        'Delete Profile': '删除配置',
        'Set as Default': '设为默认',

        'Image Load Settings': '图像加载设置',
        'Do you wish to load images through the Hentai@Home Network, if available?':
            '如果可用，是否希望通过 Hentai@Home 网络加载图像？',
        ' Any client (Recommended)': ' 任意客户端 (推荐)',
        ' Default port clients only (Can be slower. Enable if behind firewall/proxy that blocks outgoing non-standard ports.)':
            ' 仅使用默认端口的客户端 (可能稍慢。当防火墙或代理阻止非标准端口的流量时启用此项。)',
        ' No [Modern/HTTPS] (Donator only. You will not be able to browse as many pages. Recommended only if having severe problems.)':
            ' 否 [现代/HTTPS] (仅限赞助者。配额消耗会加快，只有出现严重的问题时才启用。)',
        ' No [Legacy/HTTP] (Donator only. May not work by default in modern browsers. Recommended for legacy/outdated browsers only.)':
            ' 否 [传统/HTTP] (仅限赞助者。可能无法在现代浏览器中使用，只推荐在过时的浏览器中启用。)',
        'You appear to be browsing the site from ': '看起来您正在 ',
        ' or use a VPN or proxy in this country, which means the site will try to load images from H@H clients in this general geographic region. If this is incorrect, or if you want to use a different region for any reason (like if you are using a split tunneling VPN), you can select a different country below.':
            ' 浏览此网页，或者使用了此处的 VPN/代理，这意味着网站会尝试通过此区域的 H@H 客户端加载图像。如果此结果不正确，或者您希望通过其他地区的 H@H 客户端加载图像 (例如您正在使用分割隧道 VPN)，可以在下方选择一个不同的区域。',
        '\n\t\tBrowsing Country: ': '浏览区域：',
        'Auto-Detect': '自动检测',
        Afghanistan: 'Afghanistan (阿富汗)',
        'Aland Islands': 'Aland Islands (奥兰群岛)',
        Albania: 'Albania (阿尔巴尼亚)',
        Algeria: 'Algeria (阿尔及利亚)',
        'American Samoa': 'American Samoa (美属萨摩亚)',
        Andorra: 'Andorra (安道尔)',
        Angola: 'Angola (安哥拉)',
        Anguilla: 'Anguilla (安圭拉)',
        Antarctica: 'Antarctica (南极洲)',
        'Antigua and Barbuda': 'Antigua and Barbuda (安提瓜和巴布达)',
        Argentina: 'Argentina (阿根廷)',
        Armenia: 'Armenia (亚美尼亚)',
        Aruba: 'Aruba (阿鲁巴)',
        'Asia/Pacific Region': 'Asia/Pacific Region (亚太地区)',
        Australia: 'Australia (澳大利亚)',
        Austria: 'Austria (奥地利)',
        Azerbaijan: 'Azerbaijan (阿塞拜疆)',
        Bahamas: 'Bahamas (巴哈马)',
        Bahrain: 'Bahrain (巴林)',
        Bangladesh: 'Bangladesh (孟加拉国)',
        Barbados: 'Barbados (巴巴多斯)',
        Belarus: 'Belarus (白俄罗斯)',
        Belgium: 'Belgium (比利时)',
        Belize: 'Belize (伯利兹)',
        Benin: 'Benin (贝宁)',
        Bermuda: 'Bermuda (百慕大)',
        Bhutan: 'Bhutan (不丹)',
        Bolivia: 'Bolivia (玻利维亚)',
        'Bonaire Saint Eustatius and Saba': 'Bonaire Saint Eustatius and Saba (博内尔、圣尤斯特歇斯和萨巴)',
        'Bosnia and Herzegovina': 'Bosnia and Herzegovina (波斯尼亚和黑塞哥维那)',
        Botswana: 'Botswana (博茨瓦纳)',
        'Bouvet Island': 'Bouvet Island (布维岛)',
        Brazil: 'Brazil (巴西)',
        'British Indian Ocean Territory': 'British Indian Ocean Territory (英属印度洋领地)',
        'Brunei Darussalam': 'Brunei Darussalam (文莱)',
        Bulgaria: 'Bulgaria (保加利亚)',
        'Burkina Faso': 'Burkina Faso (布基纳法索)',
        Burundi: 'Burundi (布隆迪)',
        Cambodia: 'Cambodia (柬埔寨)',
        Cameroon: 'Cameroon (喀麦隆)',
        Canada: 'Canada (加拿大)',
        'Cape Verde': 'Cape Verde (佛得角)',
        'Cayman Islands': 'Cayman Islands (开曼群岛)',
        'Central African Republic': 'Central African Republic (中非共和国)',
        Chad: 'Chad (乍得)',
        Chile: 'Chile (智利)',
        China: 'China (中国大陆)',
        'Christmas Island': 'Christmas Island (圣诞岛)',
        'Cocos Islands': 'Cocos Islands (科科斯群岛)',
        Colombia: 'Colombia (哥伦比亚)',
        Comoros: 'Comoros (科摩罗)',
        Congo: 'Congo (刚果)',
        'Congo The Democratic Republic of the': 'Congo The Democratic Republic of the (刚果民主共和国)',
        'Cook Islands': 'Cook Islands (库克群岛)',
        'Costa Rica': 'Costa Rica (哥斯达黎加)',
        "Cote D'Ivoire": "Cote D'Ivoire (科特迪瓦)",
        Croatia: 'Croatia (克罗地亚)',
        Cuba: 'Cuba (古巴)',
        Curacao: 'Curacao (库拉索)',
        Cyprus: 'Cyprus (塞浦路斯)',
        'Czech Republic': 'Czech Republic (捷克共和国)',
        Denmark: 'Denmark (丹麦)',
        Djibouti: 'Djibouti (吉布提)',
        Dominica: 'Dominica (多米尼加)',
        'Dominican Republic': 'Dominican Republic (多米尼加共和国)',
        Ecuador: 'Ecuador (厄瓜多尔)',
        Egypt: 'Egypt (埃及)',
        'El Salvador': 'El Salvador (萨尔瓦多)',
        'Equatorial Guinea': 'Equatorial Guinea (赤道几内亚)',
        Eritrea: 'Eritrea (厄立特里亚)',
        Estonia: 'Estonia (爱沙尼亚)',
        Ethiopia: 'Ethiopia (埃塞俄比亚)',
        Europe: 'Europe (欧洲)',
        'Falkland Islands': 'Falkland Islands (马尔维纳斯群岛)',
        'Faroe Islands': 'Faroe Islands (法罗群岛)',
        Fiji: 'Fiji (斐济)',
        Finland: 'Finland (芬兰)',
        France: 'France (法国)',
        'French Guiana': 'French Guiana (法属圭亚那)',
        'French Polynesia': 'French Polynesia (法属波利尼西亚)',
        'French Southern Territories': 'French Southern Territories (法属南部领地)',
        Gabon: 'Gabon (加蓬)',
        Gambia: 'Gambia (冈比亚)',
        Georgia: 'Georgia (格鲁吉亚)',
        Germany: 'Germany (德国)',
        Ghana: 'Ghana (加纳)',
        Gibraltar: 'Gibraltar (直布罗陀)',
        Greece: 'Greece (希腊)',
        Greenland: 'Greenland (格陵兰)',
        Grenada: 'Grenada (格林纳达)',
        Guadeloupe: 'Guadeloupe (瓜德罗普)',
        Guam: 'Guam (关岛)',
        Guatemala: 'Guatemala (危地马拉)',
        Guernsey: 'Guernsey (根西岛)',
        Guinea: 'Guinea (几内亚)',
        'Guinea-Bissau': 'Guinea-Bissau (几内亚比绍)',
        Guyana: 'Guyana (圭亚那)',
        Haiti: 'Haiti (海地)',
        'Heard Island and McDonald Islands': 'Heard Island and McDonald Islands (赫德岛和麦克唐纳群岛)',
        'Holy See (Vatican City State)': 'Holy See (Vatican City State) (梵蒂冈)',
        Honduras: 'Honduras (洪都拉斯)',
        'Hong Kong': 'Hong Kong (香港特别行政区)',
        Hungary: 'Hungary (匈牙利)',
        Iceland: 'Iceland (冰岛)',
        India: 'India (印度)',
        Indonesia: 'Indonesia (印度尼西亚)',
        Iran: 'Iran (伊朗)',
        Iraq: 'Iraq (伊拉克)',
        Ireland: 'Ireland (爱尔兰)',
        'Isle of Man': 'Isle of Man (马恩岛)',
        Israel: 'Israel (以色列)',
        Italy: 'Italy (意大利)',
        Jamaica: 'Jamaica (牙买加)',
        Japan: 'Japan (日本)',
        Jersey: 'Jersey (泽西岛)',
        Jordan: 'Jordan (约旦)',
        Kazakhstan: 'Kazakhstan (哈萨克斯坦)',
        Kenya: 'Kenya (肯尼亚)',
        Kiribati: 'Kiribati (基里巴斯)',
        Kuwait: 'Kuwait (科威特)',
        Kyrgyzstan: 'Kyrgyzstan (吉尔吉斯斯坦)',
        "Lao People's Democratic Republic": "Lao People's Democratic Republic (老挝)",
        Latvia: 'Latvia (拉脱维亚)',
        Lebanon: 'Lebanon (黎巴嫩)',
        Lesotho: 'Lesotho (莱索托)',
        Liberia: 'Liberia (利比里亚)',
        Libya: 'Libya (利比亚)',
        Liechtenstein: 'Liechtenstein (列支敦士登)',
        Lithuania: 'Lithuania (立陶宛)',
        Luxembourg: 'Luxembourg (卢森堡)',
        Macau: 'Macau (澳门特别行政区)',
        Macedonia: 'Macedonia (马其顿)',
        Madagascar: 'Madagascar (马达加斯加)',
        Malawi: 'Malawi (马拉维)',
        Malaysia: 'Malaysia (马来西亚)',
        Maldives: 'Maldives (马尔代夫)',
        Mali: 'Mali (马里)',
        Malta: 'Malta (马耳他)',
        'Marshall Islands': 'Marshall Islands (马绍尔群岛)',
        Martinique: 'Martinique (马提尼克)',
        Mauritania: 'Mauritania (毛里塔尼亚)',
        Mauritius: 'Mauritius (毛里求斯)',
        Mayotte: 'Mayotte (马约特)',
        Mexico: 'Mexico (墨西哥)',
        Micronesia: 'Micronesia (密克罗尼西亚)',
        Moldova: 'Moldova (摩尔多瓦)',
        Monaco: 'Monaco (摩纳哥)',
        Mongolia: 'Mongolia (蒙古)',
        Montenegro: 'Montenegro (黑山)',
        Montserrat: 'Montserrat (蒙特塞拉特)',
        Morocco: 'Morocco (摩洛哥)',
        Mozambique: 'Mozambique (莫桑比克)',
        Myanmar: 'Myanmar (缅甸)',
        Namibia: 'Namibia (纳米比亚)',
        Nauru: 'Nauru (瑙鲁)',
        Nepal: 'Nepal (尼泊尔)',
        Netherlands: 'Netherlands (荷兰)',
        'New Caledonia': 'New Caledonia (新喀里多尼亚)',
        'New Zealand': 'New Zealand (新西兰)',
        Nicaragua: 'Nicaragua (尼加拉瓜)',
        Niger: 'Niger (尼日尔)',
        Nigeria: 'Nigeria (尼日利亚)',
        Niue: 'Niue (纽埃)',
        'Norfolk Island': 'Norfolk Island (诺福克岛)',
        'North Korea': 'North Korea (朝鲜)',
        'Northern Mariana Islands': 'Northern Mariana Islands (北马里亚纳群岛)',
        Norway: 'Norway (挪威)',
        Oman: 'Oman (阿曼)',
        Pakistan: 'Pakistan (巴基斯坦)',
        Palau: 'Palau (帕劳)',
        'Palestinian Territory': 'Palestinian Territory (巴勒斯坦)',
        Panama: 'Panama (巴拿马)',
        'Papua New Guinea': 'Papua New Guinea (巴布亚新几内亚)',
        Paraguay: 'Paraguay (巴拉圭)',
        Peru: 'Peru (秘鲁)',
        Philippines: 'Philippines (菲律宾)',
        'Pitcairn Islands': 'Pitcairn Islands (皮特凯恩群岛)',
        Poland: 'Poland (波兰)',
        Portugal: 'Portugal (葡萄牙)',
        'Puerto Rico': 'Puerto Rico (波多黎各)',
        Qatar: 'Qatar (卡塔尔)',
        Reunion: 'Reunion (留尼汪)',
        Romania: 'Romania (罗马尼亚)',
        'Russian Federation': 'Russian Federation (俄罗斯)',
        Rwanda: 'Rwanda (卢旺达)',
        'Saint Barthelemy': 'Saint Barthelemy (圣巴泰勒米)',
        'Saint Helena': 'Saint Helena (圣赫勒拿)',
        'Saint Kitts and Nevis': 'Saint Kitts and Nevis (圣基茨和尼维斯)',
        'Saint Lucia': 'Saint Lucia (圣卢西亚)',
        'Saint Martin': 'Saint Martin (圣马丁)',
        'Saint Pierre and Miquelon': 'Saint Pierre and Miquelon (圣皮埃尔和密克隆)',
        'Saint Vincent and the Grenadines': 'Saint Vincent and the Grenadines (圣文森特和格林纳丁斯)',
        Samoa: 'Samoa (萨摩亚)',
        'San Marino': 'San Marino (圣马力诺)',
        'Sao Tome and Principe': 'Sao Tome and Principe (圣多美和普林西比)',
        'Saudi Arabia': 'Saudi Arabia (沙特阿拉伯)',
        Senegal: 'Senegal (塞内加尔)',
        Serbia: 'Serbia (塞尔维亚)',
        Seychelles: 'Seychelles (塞舌尔)',
        'Sierra Leone': 'Sierra Leone (塞拉利昂)',
        Singapore: 'Singapore (新加坡)',
        'Sint Maarten': 'Sint Maarten (荷属圣马丁)',
        Slovakia: 'Slovakia (斯洛伐克)',
        Slovenia: 'Slovenia (斯洛文尼亚)',
        'Solomon Islands': 'Solomon Islands (所罗门群岛)',
        Somalia: 'Somalia (索马里)',
        'South Africa': 'South Africa (南非)',
        'South Georgia and the South Sandwich Islands':
            'South Georgia and the South Sandwich Islands (南乔治亚岛和南桑威奇群岛)',
        'South Korea': 'South Korea (韩国)',
        'South Sudan': 'South Sudan (南苏丹)',
        Spain: 'Spain (西班牙)',
        'Sri Lanka': 'Sri Lanka (斯里兰卡)',
        Sudan: 'Sudan (苏丹)',
        Suriname: 'Suriname (苏里南)',
        'Svalbard and Jan Mayen': 'Svalbard and Jan Mayen (斯瓦尔巴和扬马延)',
        Swaziland: 'Swaziland (斯威士兰)',
        Sweden: 'Sweden (瑞典)',
        Switzerland: 'Switzerland (瑞士)',
        'Syrian Arab Republic': 'Syrian Arab Republic (叙利亚)',
        Taiwan: 'Taiwan (中国台湾)',
        Tajikistan: 'Tajikistan (塔吉克斯坦)',
        Tanzania: 'Tanzania (坦桑尼亚)',
        Thailand: 'Thailand (泰国)',
        'Timor-Leste': 'Timor-Leste (东帝汶)',
        Togo: 'Togo (多哥)',
        Tokelau: 'Tokelau (托克劳)',
        Tonga: 'Tonga (汤加)',
        'Trinidad and Tobago': 'Trinidad and Tobago (特立尼达和多巴哥)',
        Tunisia: 'Tunisia (突尼斯)',
        Turkey: 'Turkey (土耳其)',
        Turkmenistan: 'Turkmenistan (土库曼斯坦)',
        'Turks and Caicos Islands': 'Turks and Caicos Islands (特克斯和凯科斯群岛)',
        Tuvalu: 'Tuvalu (图瓦卢)',
        Uganda: 'Uganda (乌干达)',
        Ukraine: 'Ukraine (乌克兰)',
        'United Arab Emirates': 'United Arab Emirates (阿拉伯联合酋长国)',
        'United Kingdom': 'United Kingdom (英国)',
        'United States': 'United States (美国)',
        'United States Minor Outlying Islands': 'United States Minor Outlying Islands (美国本土外小岛屿)',
        Uruguay: 'Uruguay (乌拉圭)',
        Uzbekistan: 'Uzbekistan (乌兹别克斯坦)',
        Vanuatu: 'Vanuatu (瓦努阿图)',
        Venezuela: 'Venezuela (委内瑞拉)',
        Vietnam: 'Vietnam (越南)',
        'Virgin Islands British': 'Virgin Islands British (英属维尔京群岛)',
        'Virgin Islands U.S.': 'Virgin Islands U.S. (美属维尔京群岛)',
        'Wallis and Futuna': 'Wallis and Futuna (瓦利斯和富图纳)',
        'Western Sahara': 'Western Sahara (西撒哈拉)',
        Yemen: 'Yemen (也门)',
        Zambia: 'Zambia (赞比亚)',
        Zimbabwe: 'Zimbabwe (津巴布韦)',

        'Image Size Settings': '图像大小设置',
        'Images are normally resampled to 1280 pixels of horizontal resolution for online viewing. You can select one of the following alternative resolutions.':
            '通常情况下，图像会被重采样到 1280 像素宽度用于在线浏览，您也可以手动指定重采样分辨率。',
        ' Auto': ' 自动',
        'Use original images instead of the resampled versions? Resampled images will still be used if you select a horizonal resolution different than "Auto" above and the image in question is wider, or if the original image is larger than 10 MiB (or 4 MiB for galleries older than one year).':
            '在阅读时优先加载原图而非重采样版本？当选择了“自动”以外的分辨率且原图宽度大于设定值，或原图大于 10 MiB (一年前发布的图库 4 MiB) 时，仍会加载重采样版本。',
        ' Prefer resampled images': ' 优先加载重采样版本',
        ' Prefer original images': ' 优先加载原图',
        'While the site will automatically scale down images to fit your screen width, you can also manually restrict the maximum display size of an image. Like the automatic scaling, this does not resample the image, as the resizing is done browser-side. (0 = no limit)':
            '虽然图像会自动根据窗口缩小，您也可以手动指定最大显示大小。图像仅在浏览器端缩放，并没有被重新采样。(0 为不限制)',
        'Horizontal:': '宽/横向',
        'Vertical:': '高/纵向',
        ' pixels': ' px',

        'Gallery Name Display': '图库显示名称',
        'Many galleries have both an English/Romanized title and a title in Japanese script. Which gallery name would you like as default?':
            '许多图库都同时拥有英文/罗马音标题和日文标题，您希望默认显示哪一个？',
        ' Default Title': ' 默认标题 (英文/罗马音)',
        ' Japanese Title (if available)': ' 日文标题 (如果有)',

        'Archiver Settings': '归档设置',
        'The default behavior for the Archiver is to confirm the cost and selection for original or resampled archive, then present a link that can be clicked or copied elsewhere. You can change this behavior here.':
            '默认归档下载方式为手动选择原始或重采样画质，然后手动点击或复制下载链接。您可以在这里修改归档下载方式。',
        ' Manual Select, Manual Start (Default)': ' 手动选择，手动下载 (默认)',
        ' Manual Select, Auto Start': ' 手动选择，自动下载',
        ' Auto Select Original, Manual Start': ' 自动选择原始画质，手动下载',
        ' Auto Select Original, Auto Start': ' 自动选择原始画质，自动下载',
        ' Auto Select Resample, Manual Start': ' 自动选择重采样画质，手动下载',
        ' Auto Select Resample, Auto Start': ' 自动选择重采样画质，自动下载',

        'Front Page / Search Settings': '首页 / 搜索设置',
        'What categories would you like to show by default on the front page and in searches?':
            '您希望首页和搜索页面默认显示哪些类别？',
        'Which display mode would you like to use on the front and search pages?':
            '您希望首页和搜索页面使用哪种显示模式？',
        ' Minimal': ' 最小化',
        ' Minimal+': ' 最小化 + 关注标签',
        ' Compact': ' 紧凑 + 标签',
        ' Extended': ' 扩展',
        ' Thumbnail': ' 缩略图',
        'Which display style would you like for the search range indicator?': '您希望搜索范围指示器采用哪种显示样式？',
        ' Normal': ' 普通',
        ' Disabled': ' 禁用',

        'Here you can choose and rename your favorite categories.': '您可以在这里重命名您的收藏夹。',
        'Default sort order for galleries on your favorites page:': '收藏页面的默认排序方式？',
        ' By last gallery update time': ' 以图库最近更新时间排序',
        ' By favorited time': ' 以收藏时间排序',

        'Search Result Count': '搜索结果数',
        'How many results would you like per page for the index/search page and torrent search pages? (Hath Perk: Paging Enlargement Required)':
            '索引和搜索页面每页显示多少条数据？ (需要 Hath Perk：「页面扩大」)',
        ' 25 results': ' 25 个',
        ' 50 results': ' 50 个',
        ' 100 results': ' 100 个',

        'Thumbnail Settings': '缩略图设置',
        'How would you like the mouse-over thumbnails on the front page to load when using Minimal or Compact display mode?':
            '在最小化和紧凑列表模式下，您希望鼠标悬停缩略图何时加载？',
        ' On mouse-over (pages load faster, but there may be a slight delay before a thumb appears)':
            ' 鼠标悬停时 (页面加载快，缩略图加载有延迟)',
        ' On page load (pages take longer to load, but there is no delay for loading a thumb after the page has loaded)':
            ' 页面加载时 (页面加载时间更长，但是显示的时候无需等待)',
        'You can set a default thumbnail configuration for all galleries you visit.': '图库详情页缩略图设置。',
        'Size: ': '大小：',
        ' Large': ' 大图',
        'Rows:': '行数：',

        'Thumbnail Scaling': '缩略图缩放',
        '%': ' %',
        'Thumbnails on the thumbnail and extended gallery list views can be scaled to a custom value between 75% and 150%.':
            '在扩展和缩略图列表模式下，图库缩略图可以缩放为 75% 到 150% 之间的自定义值。',

        Ratings: '评分',
        'By default, galleries that you have rated will appear with red stars for ratings of 2 stars and below, green for ratings between 2.5 and 4 stars, and blue for ratings of 4.5 or 5 stars. You can customize this by entering your desired color combination below.':
            '默认情况下，您评为 2 星及以下的图库会显示为红星，2.5 ~ 4 星显示为绿星，4.5 ~ 5 星显示为蓝星。您可以将其设定为其他颜色组合。',
        'Each letter represents one star. The default RRGGB means R(ed) for the first and second star, G(reen) for the third and fourth, and B(lue) for the fifth. You can also use (Y)ellow for the normal stars. Any five-letter R/G/B/Y combo works.':
            '每个字母代表一颗星, 默认的 RRGGB 表示第一第二颗星显示为红色 R(ed)，第三第四颗星显示为绿色 G(reen)，第五颗星显示为蓝色 B(lue)。您也可以使用黄色 (Y)ellow。R/G/B/Y 中任何的五个字母组合都是有效的。',

        'Tag Watching Threshold': '标签订阅阈值',
        'Recently uploaded galleries will be included on the watched screen if it has at least one watched tag with positive weight, and the sum of weights on its watched tags add up to this value or higher. This threshold can be set between 0 and 9999.':
            '您可以将标签加入「我的标签」并设置一个正权重来关注它们。如果一个最近上传的图库所有已关注标签的权重之和大于等于设定值，则它会出现在「订阅」里。此值可以设定为 0 ~ 9999。',

        'Tag Filtering Threshold': '标签过滤阈值',
        'You can soft filter tags by adding them to ': '您可以将标签加入「',
        ' with a negative weight. If a gallery has tags that add up to weight below this value, it is filtered from view. This threshold can be set between 0 and -9999.':
            '」并设置一个负权重来软过滤它们。如果一个图库所有标签的权重之和小于设定值，则它会被过滤。此值可以设定为 0 ~ -9999。',

        'Show Filtered Removal Count': '显示过滤数量',
        'Show the "Your custom filters removed XX galleries from this page" readout?':
            '显示“您的过滤器已从此页面移除 XX 个结果”的消息？',
        ' Yes': ' 是',
        ' No': ' 否',

        'Excluded Languages': '排除语言',
        'If you wish to hide galleries in certain languages from the gallery list and searches, select them from the list below.':
            '如果您希望在图库列表和搜索结果中隐藏某些语言的图库，请从下面的列表中选择它们。',
        'Note that matching galleries will never appear regardless of your search query.':
            '请注意，无论搜索查询如何，匹配的图库都不会出现。',
        Original: '原始',
        Translated: '翻译',
        Rewrite: '改写',
        All: '所有',
        Japanese: '日语',
        English: '英语',
        Chinese: '汉语',
        Dutch: '荷兰语',
        French: '法语',
        German: '德语',
        Hungarian: '匈牙利语',
        Italian: '意大利语',
        Korean: '韩语',
        Polish: '波兰语',
        Portuguese: '葡萄牙语',
        Russian: '俄语',
        Spanish: '西班牙语',
        Thai: '泰语',
        Vietnamese: '越南语',
        'N/A': '无语言',
        Other: '其他',

        'Excluded Uploaders': '排除上传者',
        'If you wish to hide galleries from certain uploaders from the gallery list and searches, add them below. Put one username per line.':
            '如果您希望在图库列表和搜索结果中隐藏某些上传者上传的图库，请把他们的用户名填写在下方，每行一个。',
        'Note that galleries from these uploaders will never appear regardless of your search query.':
            '请注意，无论搜索查询如何，这些上传者上传的图库都不会出现。',
        'You are currently using ': '已使用 ',
        ' of ': '/',
        ' exclusion slots.\n': '。',

        'Viewport Override': '移动端虚拟宽度',
        px: ' px',
        'Allows you to override the virtual width of the site for mobile devices. This is normally determined automatically by your device based on its DPI. Sensible values at 100% thumbnail scale are between 640 and 1400.':
            '允许您覆盖移动设备的虚拟宽度，默认是根据 DPI 自动计算的，100% 缩略图比例下的合理值在 640 到 1400 之间。',

        'Gallery Comments': '图库评论',
        'Sort order for gallery comments:': '评论排序方式：',
        ' Oldest comments first': ' 最早的评论',
        ' Recent comments first': ' 最近的评论',
        ' By highest score': ' 分数最高',
        'Show gallery comment votes:': '显示评论投票数：',
        ' On score hover or click': ' 悬停或点击时',
        ' Always': ' 总是',

        'Gallery Tags': '图库标签',
        'Sort order for gallery tags:': '图库标签排序方式：',
        ' Alphabetical': ' 按字母排序',
        ' By tag power': ' 按标签权重',

        'Gallery Page Numbering': '图库页码',
        'Show gallery page numbers:\n\t': '在图库详情页缩略图下方显示页码：',

        'Multi-Page Viewer': '多页查看器',
        'Always use the Multi-Page Viewer? There will still be a link to manually start it if this is left disabled.':
            '总是使用多页查看器？禁用此选项时，仍可以手动启动多页查看器。',
        ' Nope': ' 否',
        ' Yup': ' 是',
        'Multi-Page Viewer Display Style:': '显示样式：',
        ' Align left; Only scale if image is larger than browser width': ' 左对齐；仅当图像大于浏览器宽度时缩放',
        ' Align center; Only scale if image is larger than browser width': ' 居中对齐；仅当图像大于浏览器宽度时缩放',
        ' Align center; Always scale images to fit browser width': ' 居中对齐；始终缩放图像以适应浏览器宽度',
        'Multi-Page Viewer Thumbnail Pane:': '显示缩略图侧栏：',
        ' Show': ' 显示',
        ' Hide': ' 隐藏',

        Apply: '应用',
        'Settings were updated': '设置更新完毕',
    },
    [[/ \(Default\)$/, ' (默认)']],
);
