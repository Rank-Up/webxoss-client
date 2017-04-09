'use strict';
window.Localize = (function () {

// Load translations
(function () {
	function get(url, succ, err) {
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.onload = function () {
			if (xhr.status === 200) {
				succ(xhr.response);
			} else {
				if (err) err(xhr);
			}
		}
		xhr.onerror = function () {
			if (err) err(xhr);
		};
		xhr.open('GET', url, true);
		xhr.send();
	}
	window.CardInfo_jp = Object.create(CardInfo);
	window.CardInfo_zh = Object.create(CardInfo);
	window.CardInfo_en = Object.create(CardInfo);
	window.CardInfo_ko = Object.create(CardInfo);
	window.CardInfo_ru = Object.create(CardInfo);
	window.CardInfo_it = Object.create(CardInfo);
	var dir = location.pathname.match(/\/DeckEditor\/?$/) ? '../lang/' : './lang/'
	get(dir + 'CardInfo_en.json', function (translation) {
		for (var pid in translation) {
			var tran = translation[pid];
			var info = Object.create(CardInfo_jp[pid]);
			for (var prop in tran) {
				info[prop] = tran[prop];
			}
			window.CardInfo_en[pid] = info;
			window.CardInfo_it[pid] = info;
		}
	})
	get(dir + 'CardInfo_zh_CN.json', function (translation) {
		for (var pid in translation) {
			var tran = translation[pid];
			var info = Object.create(CardInfo_jp[pid]);
			for (var prop in tran) {
				info[prop] = tran[prop];
			}
			window.CardInfo_zh[pid] = info;
		}
	})
	get(dir + 'CardInfo_ru.json', function (translation) {
		for (var pid in translation) {
			var tran = translation[pid];
			var info = Object.create(CardInfo_jp[pid]);
			for (var prop in tran) {
				info[prop] = tran[prop];
			}
			window.CardInfo_ru[pid] = info;
		}
	})
	get(dir + 'CardInfo_ko.json', function (translation) {
		for (var pid in translation) {
			var tran = translation[pid];
			var info = Object.create(CardInfo_jp[pid]);
			for (var prop in tran) {
				info[prop] = tran[prop];
			}
			window.CardInfo_ko[pid] = info;
		}
	})
})();

var map_zh_CN = {
	common: {
		'OK': '确定',
		'CANCEL': '取消',
		'NO_CARDS': '没有卡牌',
		'OR': '或'
	},
	_misc: {
		'DIALOG_TITLE_EFFECTS': '多个效果发动,选择一个优先处理',
		// 'NO_TARGET': '没有目标',
		'NO_OPTIONS': '无法%s',
		// 'GIVE_UP_TARGET': '不选择目标',
		'GIVE_UP': '不%s',
		'GUARD_TRUE': '有',
		'GUARD_FALSE': '无',
		'LIMITING': '%s限定',
		'WAIT': '等待对方操作',
		'CLASS_SEPARATOR': ':',
		'CROSS_NAME_QUOTE_LEFT': '《',
		'CROSS_NAME_QUOTE_RIGHT': '》',
		'CROSS_LEFT': '【CROSS】%s的左侧',
		'CROSS_RIGHT': '【CROSS】%s的右侧',
		'CROSS_AND': '【CROSS】%s的左侧 和 %s的右侧',
		'CROSS_OR': '或',
		'GUARD_DESCRIPTION': '【防御】（从手牌舍弃此牌，将分身的1次攻击无效化）',
		'MULTI_ENER_DESCRIPTION': '【常】：【万花色】（支付费用时，这张牌视为持有所有颜色）'
	},
	'buttonTitle': {
		'OK': '确定',
		'CANCEL': '取消',
		'LEVEL0_LRIG': '设置分身',
		'DISCARD_AND_REDRAW': '换牌',
		'CHARGE': '充能',
		'GROW': '成长',
		'SUMMON_SIGNI': '召唤',
		'SUMMON_SIGNI_ZONE': '召唤区',
		'BANISH': '破坏',
		'BOUNCE': '返回手牌',
		'TRASH': '废弃',
		'TRASH_SIGNI': '废弃',
		'USE_SPELL': '使用',
		'SPELL_EFFECT': '选择魔法效果',
		'USE_ARTS': '使用必杀',
		'ARTS_EFFECT': '选择必杀效果',
		'SPELL_CUT_IN': '使用魔法切入',
		'USE_ACTION_EFFECT': '起动效果',
		'SEEK': '探寻',
		'SET_ORDER': '设置顺序',
		'SIGNI_ATTACK': '攻击',
		'LRIG_ATTACK': '攻击',
		'GUARD': '防御',
		'DISCARD': '舍弃',
		'DECLARE': '宣言',
		'PAY': '支付',
		'PAY_EXCEED': '超越',
		'DOWN': '横置',
		'UP': '竖置',
		'TARGET': '目标',
		'PAY_ENER': '支付能量',
		'LAUNCH': '发动',
		'EFFECTS': '优先处理',
		'CONFIRM': '确认',
		'END_SELECT': '完成选择',
		'END_ENER_PHASE': '结束充能阶段',
		'END_GROW_PHASE': '结束成长阶段',
		'END_MAIN_PHASE': '结束主要阶段',
		'END_ARTS_STEP': '结束必杀使用步骤',
		'END_SIGNI_ATTACK_STEP': '结束精灵攻击步骤',
		'END_LRIG_ATTACK_STEP': '结束分身攻击步骤',
		'VIEW': '查看',
		'ADD_TO_HAND': '加入手牌',
		'COLOR': '颜色',
		'CHOOSE_EFFECT': '选择效果',
		'CHOOSE_ZONE': '选择区域',
		'RESET_SIGNI_ZONE': '重新配置',
		'CHARM_CARD': '魅饰卡',
		'TRASH_CHARM': '废弃魅饰',
		'REVEAL': '公开',
		'PUT_TO_TOP': '放置到卡组顶',
		'PUT_TO_BOTTOM': '放置到卡组底',
		'REVEAL_MORE': '多公开几张卡',
		'PROTECT': '保护',
		'_SHIRONAKUJI': '-6000',
		'CLASS': '类别',
		'PAY_WHITE_INSTEAD': '代替白色费用',
		'TRASH_OSAKI': '废弃御先狐',
		'RESONA': '共鸣',
		'CRASH': '击溃',
		'PLAYER': '玩家',
		'PUT_TO_CHECK_ZONE': '放置到检查区',
		'PUT_TO_ENER_ZONE': '放置到能量区',
		'CONFIRM_REFRESH_SELF': '我方卡组重构\n请确认废弃区',
		'CONFIRM_REFRESH_OPPONENT': '对方卡组重构\n请确认废弃区'
	},
	'noOptions': {
		'TARGET': '没有目标'
	},
	'giveUp': {
		'TARGET': '不选择目标',
		'SUMMON_SIGNI_ZONE': '取消'
	},
	'gameText': {
		'white': '白色',
		'black': '黑色',
		'red': '红色',
		'blue': '蓝色',
		'green': '绿色',
		'colorless': '无色',
		'ADD_TO_HAND': '加入手牌',
		'SUMMON': '出场',
		'DOWN': '横置',
		'UP': '竖置',
		'SHOW_EFFECTS_DIALOG_TITLE': '效果',
		'PUT_TO_TOP': '放置到卡组顶',
		'PUT_TO_BOTTOM': '放置到卡组底',
		'SELF': '自己',
		'OPPONENT': '对战对手',
		'PUT_TO_ENER_ZONE': '放置到能量区',
		'CONFIRM_ENCORE': '要支付回响费用吗？',
		'CONFIRM_BET': '要赌上硬币吗？',
		'MAIN_DECK': '卡组',
		'HAND': '手牌',
		'SIGNI_ZONE': '精灵区',
		'TRASH_ZONE': '废弃区',
		'LIFE_CLOTH': '生命护甲',
		'SELECT_DONE': '完成选择'
	},
	'prop': {
		'cardType': '种类',
		'classes': '类别',
		'level': '等级',
		'color': '颜色',
		'limit': '界限',
		'power': '力量',
		'limting': '限定',
		'guard': '防御',
		'cost': '费用',
		'timmings': '时点',
		'effects': '效果',
		'burst': '爆发'
	},
	'cardType': {
		'LRIG': '分身',
		'SIGNI': '精灵',
		'SPELL': '魔法',
		'ARTS': '必杀',
		'RESONA': '共鸣'
	},
	'color': {
		'white': '白',
		'black': '黑',
		'red': '红',
		'blue': '蓝',
		'green': '绿',
		'colorless': '无'
	},
	'costColor': {
		'costWhite': '白',
		'costBlack': '黑',
		'costRed': '红',
		'costBlue': '蓝',
		'costGreen': '绿',
		'costColorless': '无'
	},
	'timming': {
		'mainPhase': '【主要阶段】',
		'attackPhase': '【攻击阶段】',
		'spellCutIn': '【魔法切入】'
	},
	'class': {
		'タマ': '小玉',
		'花代': '花代',
		'ユヅキ': '游月',
		'ピルルク': '皮璐璐可',
		'エルドラ': '艾尔德拉',
		'ミルルン': '米璐璐恩',
		'緑子': '绿子',
		'アン': '安',
		'ウリス': '乌莉丝',
		'イオナ': '伊绪奈',
		'ウムル': '乌姆尔',
		'リメンバ': '小忆', // TODO: 甲壳虫化
		'タウィル': '塔维尔', // TODO: 甲壳虫化
		'サシェ': '莎榭', // TODO: 甲壳虫化
		'ミュウ': '缪', // TODO: 甲壳虫化
		'アイヤイ': '艾娅伊', // TODO: 甲壳虫化
		'アルフォウ': '阿尔芙', // TODO: 甲壳虫化
		'ハナレ': '离', // TODO: 甲壳虫化
		'リル': '莉露',
		'メル': '梅露',
		'精像': '精像',
		'天使': '天使',
		'悪魔': '恶魔',
		'美巧': '美巧',
		'精武': '精武',
		'アーム': '武装',
		'ウェポン': '武器',
		'武勇': '武勇',
		'調理': '调理',
		'遊具': '游具',
		'毒牙': '毒牙',
		'精羅': '精罗',
		'鉱石': '矿石',
		'宝石': '宝石',
		'植物': '植物',
		'原子': '原子',
		'宇宙': '宇宙',
		'精械': '精械',
		'電機': '电机',
		'古代兵器': '古代兵器',
		'迷宮': '迷宫',
		'精生': '精生',
		'水獣': '水兽',
		'空獣': '空兽',
		'地獣': '地兽',
		'龍獣': '龙兽',
		'凶蟲': '凶虫',
		'精元': '精元'
	},
	DOM: {
		'index': {
			// 'link-support-webxoss': {
			// 	textContent: 'WEBXOSS需要您的帮助!',
			// 	href: 'about.html#support'
			// },
			'link-version': '<决死的记忆 莉露>',
			'label-nickname': '您的昵称:',
			'input-nickame': {
				placeholder: '昵称'
			},
			'link-edit-deck': '编辑卡组',
			'label-bgm': '音乐',
			'label-sound-effect': '音效',
			'label-room-list': '房间列表:',
			'span-play-replay': '录像回放',
			'label-create-room-password': '房间密码:',
			'label-mayus-room': '茧的房间',
			'label-create-room': '创建房间:',
			'input-room-name': {
				placeholder: '房间名字'
			},
			'button-create-room': '创建',
			'link-about': {
				textContent: '关于我们',
				href: 'about.html'
			},
			'link-service': {
				textContent: '服务条款',
				href: 'service.html'
			},
			'link-disclaimer': {
				textContent: '免责声明',
				href: 'service.html#disclaimer'
			},
			'link-supporters': {
				textContent: '捐赠者名单',
				href: 'supporters.html'
			},
			'span-leave-room': '<<返回',
			'label-live': '直播',
			// 'label-room': '房间:',
			// 'label-host': '主机:',
			// 'label-guest': '客机:',
			'label-ready': '准备',
			// 'label-deck': '牌组:',
			'button-replay-step': '下一步',
			'button-replay-auto': '自动播放',
			'span-surrender': '投降',
			'span-leave-game': '离开',
			'chat-input': {
				placeholder: '在此处聊天'
			},
			'label-replay-list': '录像列表:',
			'label-replay-file': '录像文件:',
			'button-replay-return': '返回',
			'reconnect-title': '连接已断开!',
			'reconnect-retry': '正在重新连接...',
			'wait-for-reconnect-title': '对手的连接已断开!',
			'wait-for-reconnect-retry': '正在等待重新连接...',
			'wait-for-reconnect-button-drop': '放弃等待',
			'span-set-proxy': '设置代理',
			'proxy-title': '设置代理',
			'proxy-description': '使用代理后,你与WEBXOSS服务器之间的数据将由代理服务器转发. 通常情况下,你不必设置代理,但如果掉线情况频繁发生,代理可能会有所帮助.',
			'proxy-noproxy': '不使用代理 (东京)',
			'proxy-cloudflare': 'CloudFlare',
			'proxy-provide': '提供代理服务器...',
			'proxy-button-ok': '确定',
			'msgbox-button-ok': '确定',
			'msgbox-button-cancel': '取消'
		},
		'DeckEditor': {
			'link-back-to-webxoss': '完成编辑',
			'label-select-deck': '选择牌组:',
			'button-delete-deck': '删除',
			'button-rename': '重命名',
			'label-new-deck': '新建牌组:',
			'input-new-deck-name': {
				placeholder: '牌组名字',
			},
			'button-new-deck': '新建',
			'button-copy-deck': '复制',
			'button-import-export': '导入/导出',
			'main-deck-title': '主卡组',
			'main-deck-mayus-room': '茧的房间',
			'main-deck-burst-title': '爆发:',
			'lrig-deck-title': 'LRIG卡组',
			'label-import-from-file': '从文件导入:',
			'label-export-to-file': '导出到文件:',
			'button-export': '导出',
			'button-text': '显示文本',
			'button-export-code': '显示代码',
			'button-import-code': '导入代码',
			'button-import-export-cancel': '取消',
			'search-input': {
				placeholder: '输入关键字以搜索'
			},
			'link-search-tips': {
				textContent: '搜索技巧',
				href: 'SearchTips.html'
			},
			'search-show-more': '显示更多'
		}
	},
	'index': {
		'REQUIRE_UPDATE': '客户端版本与服务器不匹配!\n更新后才能进行游戏!',
		'UPDATING': '正在更新...',
		'UPDATE_READY': '更新完毕,点击此处完成更新!',
		'NET_WORK_ERROR': '网络错误.',
		'DISCONNECTED': '连接已断开',
		'NO_VALID_DECK': '没有可用的卡组!\n请先编辑卡组!',
		'OPPONENT_DISCONNECTED': '对手断开了连接!',
		'SELF_DISCONNECTED': '己方断开了连接!',
		'PLEASE_INPUT_A_NICKNAME': '请输入昵称!',
		'PLEASE_INPUT_A_ROOM_NAME': '请输入房间名字!',
		'FAILED_TO_READ_DECK': '读取卡组失败!',
		'NEW_GUEST': '%s进入了房间',
		'GUEST_LEFT': '%s离开了房间',
		'READY': '对手已经做好准备',
		'UNREADY': '对手取消了准备',
		'INPUT_PASSWORD': '请输入房间密码',
		'WRONG_PASSWORD': '密码错误!',
		'NOT_CONNECTED': '未与服务器建立连接!\n请稍后重试!',
		'SUPPORT_URL': 'about.html#support',
		'CONFIRM_SURRENDER': '确定要投降吗?',
		'SURRENDERED': '你投降了!',
		'OPPONENT_SURRENDERED': '对手投降了!',
		'CONFIRM_CLOSE': '游戏正在进行,您确定要离开吗?',
		'DROPPED': '对战对手已经离开了游戏',
		'SAVE_REPLAY': '保存录像',
		'FAILED_TO_PARSE_REPLAY': '解析文件失败!',
		'UNSUPPORTED_REPLAY_VERSION': '不支持的录像版本!\n请升级你的客户端!',
		'PROVIDE_PROXY_SERVER': '你愿意为WEBXOSS提供代理服务吗?\n联系webxoss@gmail.com吧!\nWEBXOSS将在你的帮助下变得更棒!',
		'FETCHING_DATA': '正在读取数据...\n点击"确定"取消操作.',
		'FAILED_TO_FETCH_DATA': '读取数据失败!'
	},
	'editor': {
		'PLEASE_INPUT_A_DECK_NAME': '请输入牌组名字!',
		'DECK_NAME': '新的卡组名字',
		'DECK_NAME_ALREADY_EXISTS': '卡组"%s"已存在!',
		'FAILED_TO_PARSE_FILE': '解析文件失败!',
		'FAILED_TO_PARSE_CODE': '解析代码失败!',
		'CONFIRM_DELETE_DECK': '确定要删除卡组"%s"吗?'
	}
};

var map_en = {
	common: {
		'OK': 'OK',
		'CANCEL': 'CANCEL',
		'NO_CARDS': 'No cards',
		'or': 'or'
	},
	_misc: {
		'DIALOG_TITLE_EFFECTS': 'Multiple effects have been triggered\nChoose one to resolve.',
		// 'NO_TARGET': 'No targets',
		'NO_OPTIONS': 'Unable to %s',
		// 'GIVE_UP_TARGET': 'Don\'t select',
		'GIVE_UP': 'Don\'t %s',
		'GUARD_TRUE': 'Yes',
		'GUARD_FALSE': 'No',
		'LIMITING': '%s Only',
		'WAIT': 'Waiting...',
		'CLASS_SEPARATOR': ':\n',
		'CROSS_NAME_QUOTE_LEFT': '"',
		'CROSS_NAME_QUOTE_RIGHT': '"',
		'CROSS_LEFT': '>Cross< %s Left',
		'CROSS_RIGHT': '>Cross< %s Right',
		'CROSS_AND': '>Cross< %s Right and %s Left',
		'CROSS_OR': ' or ',
		'GUARD_DESCRIPTION': '[Guard] (By discarding this card from your hand, disable one of a LRIG\'s attacks)',
		'MULTI_ENER_DESCRIPTION': '[Constant]: [Multi Ener] (When you pay a cost, treat this card as if it has all colors)'
	},
	'buttonTitle': {
		'OK': 'OK',
		'CANCEL': 'CANCEL',
		'LEVEL0_LRIG': 'Set up LRIG',
		'DISCARD_AND_REDRAW': 'Mulligan',
		'CHARGE': 'Charge',
		'GROW': 'Grow',
		'SUMMON_SIGNI': 'Summon',
		'SUMMON_SIGNI_ZONE': 'Zone',
		'BANISH': 'Banish',
		'BOUNCE': 'Bounce',
		'TRASH': 'Trash',
		'TRASH_SIGNI': 'Trash',
		'USE_SPELL': 'Use SPEL',
		'SPELL_EFFECT': 'Select SPELL effect',
		'USE_ARTS': 'Use ARTS',
		'ARTS_EFFECT': 'Select ARTS effect',
		'SPELL_CUT_IN': 'Spell cut-in',
		'USE_ACTION_EFFECT': 'Action effect',
		'SEEK': 'Search',
		'SET_ORDER': 'Set order',
		'SIGNI_ATTACK': 'Attack',
		'LRIG_ATTACK': 'Attack',
		'GUARD': 'Guard',
		'DISCARD': 'Discard',
		'DECLARE': 'Declare',
		'PAY': 'Pay',
		'PAY_EXCEED': 'Exceed',
		'DOWN': 'Down',
		'UP': 'Up',
		'TARGET': 'Target',
		'PAY_ENER': 'Pay ener',
		'LAUNCH': 'Launch',
		'EFFECTS': 'Effects',
		'CONFIRM': 'Confirm',
		'END_SELECT': 'End select',
		'END_ENER_PHASE': 'End Ener Phase',
		'END_GROW_PHASE': 'End Grow Phase',
		'END_MAIN_PHASE': 'End Main Phase',
		'END_ARTS_STEP': 'End ARTS Step',
		'END_SIGNI_ATTACK_STEP': 'End SIGNI Attack Step',
		'END_LRIG_ATTACK_STEP': 'End LRIG Attack Step',
		'VIEW': 'View',
		'ADD_TO_HAND': 'Add to hand',
		'COLOR': 'Color',
		'CHOOSE_EFFECT': 'Choose Effect',
		'CHOOSE_ZONE': 'Choose Zone',
		'RESET_SIGNI_ZONE': 'Replace',
		'CHARM_CARD': 'Charm',
		'TRASH_CHARM': 'Trash Charm',
		'REVEAL': 'Reveal',
		'PUT_TO_TOP': 'Put to top',
		'PUT_TO_BOTTOM': 'Put to bottom',
		'REVEAL_MORE': 'Reveal more cards',
		'PROTECT': 'Protect',
		'_SHIRONAKUJI': '-6000',
		'CLASS': 'class',
		'PAY_WHITE_INSTEAD': 'Pay [White] instead',
		'TRASH_OSAKI': 'Trash Osaki',
		'RESONA': 'Resona',
		'CRASH': 'Crash',
		'PLAYER': 'Player',
		'PUT_TO_CHECK_ZONE': 'Put to Check Zone',
		'PUT_TO_ENER_ZONE': 'Put to Ener Zone',
		'CONFIRM_REFRESH_SELF': 'Deck refesh\nConfirm your trash',
		'CONFIRM_REFRESH_OPPONENT': 'Deck refesh\nConfirm opponent\'s trash'
	},
	'noOptions': {
		'TARGET': 'No targets'
	},
	'giveUp': {
		'TARGET': 'Don\'t select',
		'SUMMON_SIGNI_ZONE': 'Cancel'
	},
	'gameText': {
		'white': 'white',
		'black': 'black',
		'red': 'red',
		'blue': 'blue',
		'green': 'green',
		'colorless': 'colorless',
		'ADD_TO_HAND': 'Add to hand',
		'SUMMON': 'Summon',
		'DOWN': 'Down',
		'UP': 'Up',
		'SHOW_EFFECTS_DIALOG_TITLE': 'Effect',
		'PUT_TO_TOP': 'Put to top',
		'PUT_TO_BOTTOM': 'Put to bottom',
		'SELF': 'Me',
		'OPPONENT': 'Opponent',
		'PUT_TO_ENER_ZONE': 'Put to Ener Zone',
		'CONFIRM_ENCORE': 'Do you want to pay for Encore?',
		'CONFIRM_BET': 'Do you want to bet?',
		'MAIN_DECK': 'Main Deck',
		'HAND': 'Hand',
		'SIGNI_ZONE': 'SIGNI Zone',
		'TRASH_ZONE': 'Trash Zone',
		'LIFE_CLOTH': 'Life Cloth',
		'SELECT_DONE': 'End select'
	},
	'prop': {
		'cardType': 'Type',
		'classes': 'Class',
		'level': 'Level',
		'color': 'Color',
		'limit': 'Limit',
		'power': 'Power',
		'limting': 'Limiting',
		'guard': 'Guard',
		'cost': 'Cost',
		'timmings': 'Timing',
		'effects': 'Abilities',
		'burst': 'Life Burst'
	},
	'cardType': {
		'LRIG': 'LRIG',
		'SIGNI': 'SIGNI',
		'SPELL': 'SPELL',
		'ARTS': 'ARTS',
		'RESONA': 'RESONA'
	},
	'color': {
		'white': 'White',
		'black': 'Black',
		'red': 'Red',
		'blue': 'Blue',
		'green': 'Green',
		'colorless': 'Colorless'
	},
	'costColor': {
		'costWhite': 'White',
		'costBlack': 'Black',
		'costRed': 'Red',
		'costBlue': 'Blue',
		'costGreen': 'Green',
		'costColorless': 'Colorless'
	},
	'timming': {
		'mainPhase': '[Main Phase]',
		'attackPhase': '[Attack Phase]',
		'spellCutIn': '[Spell Cut-In]'
	},
	'class': {
		'タマ': 'Tama',
		'花代': 'Hanayo',
		'ユヅキ': 'Yuzuki',
		'ピルルク': 'Piruluk',
		'エルドラ': 'Eldora',
		'ミルルン': 'Mirurun',
		'緑子': 'Midoriko',
		'アン': 'Anne',
		'ウリス': 'Ulith',
		'イオナ': 'Iona',
		'ウムル': 'Umuru',
		'リメンバ': 'Remember',
		'タウィル': 'Tawil',
		'サシェ': 'Sashe',
		'ミュウ': 'Myuu',
		'アイヤイ': 'Aiyai',
		'アルフォウ': 'Alfou',
		'ハナレ': 'Hanare',
		'リル': 'Ril',
		'メル': 'Mel',
		'精像': 'Image',
		'天使': 'Angel',
		'悪魔': 'Devil',
		'美巧': 'Beautiful Technique',
		'精武': 'War',
		'アーム': 'Arm',
		'ウェポン': 'Weapon',
		'武勇': 'Valor',
		'調理': 'Cooking',
		'遊具': 'Playground Equipment',
		'毒牙': 'Poison Fang',
		'精羅': 'Nature',
		'鉱石': 'Ore',
		'宝石': 'Gem',
		'植物': 'Plant',
		'原子': 'Atom',
		'宇宙': 'Space',
		'精械': 'Machine',
		'電機': 'Electric',
		'古代兵器': 'Ancient Weapon',
		'迷宮': 'Labyrinth',
		'精生': 'Living',
		'水獣': 'Water Beast',
		'空獣': 'Sky Beast',
		'地獣': 'Earth Beast',
		'龍獣': 'Dragon Beast',
		'凶蟲': 'Misfortune Insect',
		'精元': 'Origin'
	},
	DOM: {
		'index': {
			// 'link-support-webxoss': {
			// 	textContent: 'WEBXOSS NEEDS YOUR HELP!',
			// 	href: 'about_en.html#support'
			// },
			'link-version': '<Ril, Memory of Desperation>',
			'label-nickname': 'Nickname:',
			'input-nickame': {
				placeholder: 'nickname'
			},
			'link-edit-deck': 'DeckEditor',
			'label-bgm': 'BGM',
			'label-sound-effect': 'SE',
			'label-room-list': 'Room list:',
			'span-play-replay': 'Watch Replay',
			'label-create-room-password': 'Password:',
			'label-mayus-room': 'Mayu\'s Room',
			'label-create-room': 'Create Room:',
			'input-room-name': {
				placeholder: 'room name'
			},
			'button-create-room': 'create',
			'link-about': {
				textContent: 'About',
				href: 'about_en.html'
			},
			'link-service': {
				textContent: 'Terms',
				href: 'service_en.html'
			},
			'link-disclaimer': {
				textContent: 'Disclaimer',
				href: 'service_en.html#disclaimer'
			},
			'link-supporters': {
				textContent: 'Supporters',
				href: 'supporters_en.html'
			},
			'span-leave-room': '<<Return',
			'label-live': 'LIVE',
			// 'label-room': 'Room:',
			// 'label-host': 'Host:',
			// 'label-guest': 'Guest:',
			'label-ready': 'Ready',
			// 'label-deck': 'Deck:',
			'button-replay-step': 'STEP',
			'button-replay-auto': 'AUTO',
			'span-surrender': 'Surrender',
			'span-leave-game': 'Leave',
			'chat-input': {
				placeholder: 'Chat here...'
			},
			'label-replay-list': 'Replay list:',
			'label-replay-file': 'Replay file:',
			'button-replay-return': 'Return',
			'reconnect-title': 'You are disconnected!',
			'reconnect-retry': 'Reconnecting...',
			'wait-for-reconnect-title': 'Your opponent is disconnected!',
			'wait-for-reconnect-retry': 'Waiting for reconnection...',
			'wait-for-reconnect-button-drop': 'Drop',
			'span-set-proxy': 'Set Proxy',
			'proxy-title': 'Proxy',
			'proxy-description': 'If your connection to WEBXOSS server is not stable, you can try a proxy.',
			'proxy-noproxy': 'No Proxy (Tokyo)',
			'proxy-cloudflare': 'CloudFlare',
			'proxy-provide': 'Provide a server...',
			'proxy-button-ok': 'OK',
			'msgbox-button-ok': 'OK',
			'msgbox-button-cancel': 'Cancel'
		},
		'DeckEditor': {
			'link-back-to-webxoss': 'Done',
			'label-select-deck': 'Select deck:',
			'button-delete-deck': 'Delete',
			'button-rename': 'Rename',
			'label-new-deck': 'New deck:',
			'input-new-deck-name': {
				placeholder: 'deck name',
			},
			'button-new-deck': 'Add',
			'button-copy-deck': 'Duplicate',
			'button-import-export': 'Import/Export',
			'main-deck-title': 'Main Deck',
			'main-deck-mayus-room': 'Mayu\'s Room',
			'main-deck-burst-title': 'Burst: ',
			'lrig-deck-title': 'LRIG Deck',
			'label-import-from-file': 'Import file:',
			'label-export-to-file': 'Export file:',
			'button-export': 'Export',
			'button-text': 'Show text',
			'button-export-code': 'Show code',
			'button-import-code': 'Import code',
			'button-import-export-cancel': 'Cancel',
			'search-input': {
				placeholder: 'Search here...'
			},
			'link-search-tips': {
				textContent: 'Search tips',
				href: 'SearchTips_en.html'
			},
			'search-show-more': 'Show more'
		}
	},
	'index': {
		'REQUIRE_UPDATE': 'A new version is required!\nTo start a game, you must update the client!',
		'UPDATING': 'Updating...',
		'UPDATE_READY': 'Updated, click here to apply!',
		'NET_WORK_ERROR': 'Network error.',
		'DISCONNECTED': 'Disconnected',
		'NO_VALID_DECK': 'No valid deck!\nPlease edit your deck!',
		'OPPONENT_DISCONNECTED': 'Your opponent is disconnected!',
		'SELF_DISCONNECTED': 'The player is disconnected!',
		'PLEASE_INPUT_A_NICKNAME': 'Please enter a nickname!',
		'PLEASE_INPUT_A_ROOM_NAME': 'Please enter a room name!',
		'FAILED_TO_READ_DECK': 'Failed to read deck!',
		'NEW_GUEST': '%s joins the room.',
		'GUEST_LEFT': '%s left the room.',
		'READY': 'Ready to open!',
		'UNREADY': 'Unready',
		'INPUT_PASSWORD': 'Enter the password',
		'WRONG_PASSWORD': 'Wrong password!',
		'NOT_CONNECTED': 'Not connected to server yet!\nPlease retry later!',
		'SUPPORT_URL': 'about_en.html#support',
		'CONFIRM_SURRENDER': 'Are you sure to surrender?',
		'SURRENDERED': 'You have surrendered!',
		'OPPONENT_SURRENDERED': 'Your opponent surrendered!',
		'CONFIRM_CLOSE': 'Are you sure to leave?',
		'DROPPED': 'You are dropped.',
		'SAVE_REPLAY': 'Save replay',
		'FAILED_TO_PARSE_REPLAY': 'Failed to parse replay file!',
		'UNSUPPORTED_REPLAY_VERSION': 'Unsupported replay version!\nPlease update your client!',
		'PROVIDE_PROXY_SERVER': 'Would you like to provide us a proxy server?\nPlease contact webxoss@gmail.com !\nWEBXOSS will be more awesome with your help!',
		'FETCHING_DATA': 'Fetching data...\nClick "OK" to cancel.',
		'FAILED_TO_FETCH_DATA': 'Failed to fetch data!'
	},
	'editor': {
		'PLEASE_INPUT_A_DECK_NAME': 'Please enter a deck name!',
		'DECK_NAME': 'Deck name:',
		'DECK_NAME_ALREADY_EXISTS': 'Deck "%s" already exists!',
		'FAILED_TO_PARSE_FILE': 'Failed to parse file!',
		'FAILED_TO_PARSE_CODE': 'Failed to parse code!',
		'CONFIRM_DELETE_DECK': 'Are you sure to delete "%s"?'
	}
};

var map_jp = {
	common: {
		'OK': 'OK',
		'CANCEL': 'キャンセル',
		'NO_CARDS': 'カードはありません',
		'or': 'または'
	},
	_misc: {
		'DIALOG_TITLE_EFFECTS': '複数の効果が同時に発動しています。\n先に処理するのを一つ選びなさい。',
		// 'NO_TARGET': '目標はありません',
		'NO_OPTIONS': '%sできません',
		// 'GIVE_UP_TARGET': '選びません',
		'GIVE_UP': '%sしない',
		'GUARD_TRUE': '有',
		'GUARD_FALSE': '-',
		'LIMITING': '%s限定',
		'WAIT': '対戦相手は考え中',
		'CLASS_SEPARATOR': ':',
		'CROSS_NAME_QUOTE_LEFT': '《',
		'CROSS_NAME_QUOTE_RIGHT': '》',
		'CROSS_LEFT': '【クロス】%sの左',
		'CROSS_RIGHT': '【クロス】%sの右',
		'CROSS_AND': '【クロス】%sの左 かつ %sの右',
		'CROSS_OR': 'か',
		'GUARD_DESCRIPTION': '【ガード】（このカードを手札から捨てることで、ルリグの攻撃を一度無効にする）',
		'MULTI_ENER_DESCRIPTION': '【常時能力】：【マルチエナ】（コストを支払う際に、このカードは全ての色を持つかのように扱う）'
	},
	'buttonTitle': {
		'OK': 'OK',
		'CANCEL': 'キャンセル',
		'LEVEL0_LRIG': 'ルリグセット',
		'DISCARD_AND_REDRAW': '引き直す',
		'CHARGE': 'チャージ',
		'GROW': 'グロウ',
		'SUMMON_SIGNI': '場に出す',
		'SUMMON_SIGNI_ZONE': 'シグニゾーン',
		'BANISH': 'バニッシュ',
		'BOUNCE': '手札に戻る',
		// 'TRASH': 'トラッシュに置く',
		'TRASH': 'トラッシュ',
		// 'TRASH_SIGNI': 'トラッシュに置く',
		'TRASH_SIGNI': 'トラッシュ',
		'USE_SPELL': '使用',
		'SPELL_EFFECT': '効果を選び',
		'USE_ARTS': 'アーツ使用',
		'ARTS_EFFECT': '効果を選び',
		// 'SPELL_CUT_IN': 'スペルカットイン',
		'SPELL_CUT_IN': 'カットイン',
		'USE_ACTION_EFFECT': '起動能力',
		'SEEK': '探す',
		'SET_ORDER': '順番を決める',
		'SIGNI_ATTACK': 'アタック',
		'LRIG_ATTACK': 'アタック',
		'GUARD': 'ガード',
		'DISCARD': '捨てる',
		'DECLARE': '宣言',
		'PAY': '支払う',
		'PAY_EXCEED': 'エクシード',
		'DOWN': 'ダウン',
		'UP': 'アップ',
		'TARGET': '目標',
		'PAY_ENER': 'エナを支払う',
		'LAUNCH': '発動',
		'EFFECTS': '先に処理',
		'CONFIRM': '確認',
		'END_SELECT': '選択完成',
		'END_ENER_PHASE': 'エナフェイズ終了',
		'END_GROW_PHASE': 'グロウフェイズ終了',
		'END_MAIN_PHASE': 'メインフェイズ終了',
		'END_ARTS_STEP': 'アーツステップ終了',
		// 'END_SIGNI_ATTACK_STEP': 'シグニアタックステップ終了',
		'END_SIGNI_ATTACK_STEP': 'ステップ終了',
		// 'END_LRIG_ATTACK_STEP': 'ルリグアタックステップ終了',
		'END_LRIG_ATTACK_STEP': 'ステップ終了',
		'VIEW': '見る',
		'ADD_TO_HAND': '手札に加える',
		'COLOR': '色',
		'CHOOSE_EFFECT': '効果を選び',
		'CHOOSE_ZONE': 'Choose Zone',
		'RESET_SIGNI_ZONE': '配置',
		'CHARM_CARD': 'チャーム',
		'TRASH_CHARM': 'TRASH_CHARM',
		'REVEAL': '公開',
		'PUT_TO_TOP': '上に置く',
		'PUT_TO_BOTTOM': '下に置く',
		'REVEAL_MORE': '多くのカードを公開ます',
		'PROTECT': '守る',
		'_SHIRONAKUJI': '-6000',
		'CLASS': 'クラス',
		'PAY_WHITE_INSTEAD': '白を代わりに支払う',
		'TRASH_OSAKI': 'オサキ',
		'RESONA': 'レゾナ',
		'CRASH': 'クラッシュ',
		'PLAYER': 'プレイヤー',
		'PUT_TO_CHECK_ZONE': 'チェックゾーンに置く',
		'PUT_TO_ENER_ZONE': 'エナゾーンに置く',
		'CONFIRM_REFRESH_SELF': 'リフレッシュ\nあなたのトラッシュを確認',
		'CONFIRM_REFRESH_OPPONENT': 'リフレッシュ\n相手のトラッシュを確認'
	},
	'noOptions': {
		// 'SPELL_CUT_IN': 'カットインできません',
		// 'GUARD': 'ガードできません',
		// '発動できません': '発動できません',
		'TARGET': '目標はありません'
	},
	'giveUp': {
		// 'SPELL_CUT_IN': 'カットインしない',
		// 'GUARD': 'ガードしない',
		// 'TARGET': '選択しない',
		// 'LAUNCH': '発動しない',
		// 'EFFECTS': '処理しない',
		'TARGET': '選ばない',
		'SUMMON_SIGNI_ZONE': 'キャンセル',
		'DISCARD_AND_REDRAW': '引き直さない',
		'SEEK': '探さない'
	},
	'gameText': {
		'white': '白',
		'black': '黒',
		'red': '赤',
		'blue': '青',
		'green': '緑',
		'colorless': '無',
		'ADD_TO_HAND': '手札に加える',
		'SUMMON': '場に出す',
		'DOWN': 'ダウン',
		'UP': 'アップ',
		'SHOW_EFFECTS_DIALOG_TITLE': '効果',
		'PUT_TO_TOP': '上に置く',
		'PUT_TO_BOTTOM': '下に置く',
		'SELF': '自分',
		'OPPONENT': '対戦相手',
		'PUT_TO_ENER_ZONE': 'エナゾーンに置く',
		'CONFIRM_ENCORE': 'アンコールを使用しますか？',
		'CONFIRM_BET': 'ベットしますか？',
		'MAIN_DECK': 'デッキ',
		'HAND': '手札',
		'SIGNI_ZONE': 'シグニゾーン',
		'TRASH_ZONE': 'トラッシュ',
		'LIFE_CLOTH': 'ライフクロス',
		'SELECT_DONE': '選択完成'
	},
	'prop': {
		'cardType': '種類',
		'classes': 'タイプ',
		'level': 'レベル',
		'color': '色',
		'limit': 'リミット',
		'power': 'パワー',
		'limting': '限定条件',
		'guard': 'ガード',
		'cost': 'コスト',
		'timmings': 'タイミング',
		'effects': '効果',
		'burst': 'ライフバースト'
	},
	'cardType': {
		'LRIG': 'ルリグ',
		'SIGNI': 'シグニ',
		'SPELL': 'スペル',
		'ARTS': 'アーツ',
		'RESONA': 'レゾナ'
	},
	'color': {
		'white': '白',
		'black': '黒',
		'red': '赤',
		'blue': '青',
		'green': '緑',
		'colorless': '無'
	},
	'costColor': {
		'costWhite': '白',
		'costBlack': '黒',
		'costRed': '赤',
		'costBlue': '青',
		'costGreen': '緑',
		'costColorless': '無'
	},
	'timming': {
		'mainPhase': '【メインフェイズ】',
		'attackPhase': '【アタックフェイズ】',
		'spellCutIn': '【スペルカットイン】'
	},
	'class': {
		'タマ': 'タマ',
		'花代': '花代',
		'ユヅキ': 'ユヅキ',
		'ピルルク': 'ピルルク',
		'エルドラ': 'エルドラ',
		'ミルルン': 'ミルルン',
		'緑子': '緑子',
		'アン': 'アン',
		'ウリス': 'ウリス',
		'イオナ': 'イオナ',
		'ウムル': 'ウムル',
		'リメンバ': 'リメンバ',
		'タウィル': 'タウィル',
		'サシェ': 'サシェ',
		'ミュウ': 'ミュウ',
		'アイヤイ': 'アイヤイ',
		'アルフォウ': 'アルフォウ',
		'ハナレ': 'ハナレ',
		'リル': 'リル',
		'メル': 'メル',
		'精像': '精像',
		'天使': '天使',
		'悪魔': '悪魔',
		'美巧': '美巧',
		'精武': '精武',
		'アーム': 'アーム',
		'ウェポン': 'ウェポン',
		'武勇': '勇武',
		'調理': '调理',
		'遊具': '遊具',
		'毒牙': '毒牙',
		'精羅': '精羅',
		'鉱石': '鉱石',
		'宝石': '宝石',
		'植物': '植物',
		'原子': '原子',
		'宇宙': '宇宙',
		'精械': '精械',
		'電機': '電機',
		'古代兵器': '古代兵器',
		'迷宮': '迷宮',
		'精生': '精生',
		'水獣': '水獣',
		'空獣': '空獣',
		'地獣': '地獣',
		'龍獣': '龍獣',
		'凶蟲': '凶蟲',
		'精元': '精元'
	},
	DOM: {
		'index': {
			// 'link-support-webxoss': {
			// 	textContent: 'WEBXOSS NEEDS YOUR HELP!',
			// 	href: 'about_en.html#support'
			// },
			'link-version': '<決死の記憶　リル>',
			// 'label-nickname': 'あなたのニックネーム:',
			'label-nickname': 'ニックネーム:',
			'input-nickame': {
				placeholder: 'ニックネーム'
			},
			'link-edit-deck': 'デッキ構築',
			'label-bgm': 'BGM',
			'label-sound-effect': 'SE',
			'label-room-list': '部屋リスト:',
			'span-play-replay': 'リプレイ再生',
			'label-create-room-password': 'パスワード:',
			'label-mayus-room': '繭の部屋',
			'label-create-room': '部屋を作る:',
			'input-room-name': {
				placeholder: '部屋の名前'
			},
			'button-create-room': '完成',
			'link-about': {
				// textContent: 'このサイトについて',
				textContent: 'About',
				href: 'about_en.html'
			},
			// 'link-service': 'サービスについて',
			'link-service': {
				textContent: 'Terms',
				href: 'service_en.html'
			},
			// 'link-disclaimer': '責任取りについて',
			'link-disclaimer': {
				textContent: 'Disclaimer',
				href: 'service_en.html#disclaimer'
			},
			'link-supporters': {
				// textContent: 'サポーターリスト',
				textContent: 'Supporters',
				href: 'supporters_en.html'
			},
			'span-leave-room': '<<戻る',
			'label-live': 'LIVE',
			// 'label-room': '部屋:',
			// 'label-host': 'ホスト:',
			// 'label-guest': 'ゲスト:',
			'label-ready': '準備',
			// 'label-deck': 'デッキ:',
			'button-replay-step': 'STEP',
			'button-replay-auto': 'AUTO',
			'span-surrender': '投了する',
			'span-leave-game': '戻る',
			'chat-input': {
				placeholder: 'ここでチャットする'
			},
			'label-replay-list': 'リプレイリスト:',
			'label-replay-file': 'ファイル:',
			'button-replay-return': '戻る',
			'reconnect-title': 'リンクが切断されました。',
			'reconnect-retry': '再接続中…',
			'wait-for-reconnect-title': '対戦相手が切断されました。',
			'wait-for-reconnect-retry': '再接続を待っています...',
			'wait-for-reconnect-button-drop': '待たない',
			'span-set-proxy': 'Set Proxy',
			'proxy-title': 'Proxy',
			'proxy-description': 'If your connection to WEBXOSS server is not stable, you can try a proxy.',
			'proxy-noproxy': 'No Proxy (Tokyo)',
			'proxy-cloudflare': 'CloudFlare',
			'proxy-provide': 'Provide a server...',
			'proxy-button-ok': 'OK',
			'msgbox-button-ok': 'OK',
			'msgbox-button-cancel': 'キャンセル'
		},
		'DeckEditor': {
			'link-back-to-webxoss': '構築完成',
			'label-select-deck': 'デッキを選ぶ:',
			'button-delete-deck': 'デリート',
			'button-rename': 'リネーム',
			'label-new-deck': '新しいデッキ:',
			'input-new-deck-name': {
				placeholder: 'デッキ名',
			},
			'button-new-deck': '新築',
			'button-copy-deck': '複製',
			'button-import-export': 'インポート/エクスポート',
			'main-deck-title': 'メインデッキ',
			'main-deck-mayus-room': '繭の部屋',
			'main-deck-burst-title': 'ライフバースト:',
			'lrig-deck-title': 'ルリグデッキ',
			'label-import-from-file': 'ファイルからインポート:',
			'label-export-to-file': 'ファイルにエクスポート:',
			'button-export': 'エクスポート',
			'button-text': 'テキストを表示',
			'button-export-code': 'コードを表示',
			'button-import-code': 'コードをインポート',
			'button-import-export-cancel': 'キャンセル',
			'search-input': {
				placeholder: 'キーワードで検索'
			},
			'link-search-tips': {
				textContent: 'ヒント',
				href: 'SearchTips_en.html'
			},
			'search-show-more': 'もっと表す…'
		}
	},
	'index': {
		'REQUIRE_UPDATE': '新しいバージョンが必要です。\nクライアントを更新してください。',
		'UPDATING': '更新中…',
		// 'UPDATE_READY': 'アップデート終了しました。ここでクリックと完成する。',
		'UPDATE_READY': '更新完了しました。ここでクリックと完成する。',
		'NET_WORK_ERROR': 'ネットワークにエラーがあります。',
		'DISCONNECTED': 'リンク切断されました。',
		'NO_VALID_DECK': 'まずデッキを作りなさい。',
		'OPPONENT_DISCONNECTED': '対戦相手が切断されました。',
		'SELF_DISCONNECTED': '対戦者が切断されました。',
		'PLEASE_INPUT_A_NICKNAME': 'ニックネームを入力して下さい。',
		'PLEASE_INPUT_A_ROOM_NAME': '部屋名を入力して下さい。',
		'FAILED_TO_READ_DECK': 'デッキローディングは失敗しました。',
		'NEW_GUEST': '%s部屋に入りました',
		'GUEST_LEFT': '%s部屋を出ました',
		'READY': '対戦相手は準備ができています。',
		'UNREADY': 'Unready',
		'INPUT_PASSWORD': 'パスワード',
		'WRONG_PASSWORD': 'パスワードが正しくありません。',
		'NOT_CONNECTED': 'まだサーバに接続されていません。\n後でもう一度お試しください。',
		'SUPPORT_URL': 'about_en.html#support',
		'CONFIRM_SURRENDER': '投了てもよろしいですか？',
		'SURRENDERED': 'あなたは投了しました。',
		'OPPONENT_SURRENDERED': '対戦相手は投了しました。',
		'CONFIRM_CLOSE': 'ゲームを離れてもよろしいですか?',
		'DROPPED': '対戦相手は、もうゲームから離れた。',
		'SAVE_REPLAY': 'リプレイを保存',
		'FAILED_TO_PARSE_REPLAY': 'ファイル解析は失敗しました。',
		'UNSUPPORTED_REPLAY_VERSION': 'Unsupported replay version!\nPlease update your client!',
		'PROVIDE_PROXY_SERVER': 'Would you like to provide us a proxy server?\nPlease contact webxoss@gmail.com !\nWEBXOSS will be more awesome with your help!',
		'FETCHING_DATA': 'Fetching data...\nClick "OK" to cancel.',
		'FAILED_TO_FETCH_DATA': 'Failed to fetch data!'
	},
	'editor': {
		'PLEASE_INPUT_A_DECK_NAME': 'デッキ名を入力して下さい。',
		'DECK_NAME': 'デッキ名',
		'DECK_NAME_ALREADY_EXISTS': 'デッキ"%s"は既に存在しました。',
		'FAILED_TO_PARSE_FILE': 'ファイル解析は失敗しました。',
		'FAILED_TO_PARSE_CODE': 'コード解析は失敗しました。',
		'CONFIRM_DELETE_DECK': 'Are you sure to delete "%s"?'
	}
};

var map_ru = {
	common: {
		'OK': 'OK',
		'CANCEL': 'Отмена',
		'NO_CARDS': 'Нет карт',
		'or': 'or'
	},
	_misc: {
		'DIALOG_TITLE_EFFECTS': 'Сработало несколько способностей.\nВыберите какую выполнить.',
		// 'NO_TARGET': 'No targets',
		'NO_OPTIONS': 'Не могу %s',
		// 'GIVE_UP_TARGET': 'Don\'t select',
		'GIVE_UP': 'Не %s',
		'GUARD_TRUE': 'Да',
		'GUARD_FALSE': 'Нет',
		'LIMITING': 'Лишь для %s',
		'WAIT': 'Ожидание...',
		'CLASS_SEPARATOR': ':\n',
		'CROSS_NAME_QUOTE_LEFT': '"',
		'CROSS_NAME_QUOTE_RIGHT': '"',
		'CROSS_LEFT': '>Связь< слева от %s',
		'CROSS_RIGHT': '>Связь< справа от %s',
		'CROSS_AND': '>Cross< %s Right and %s Left',
		'CROSS_OR': ' или ',
		// 'CROSS_LEFT': '>Связь< слева от "%s"',
		// 'CROSS_RIGHT': '>Связь< справа от "%s"',
		'GUARD_DESCRIPTION': '[Защита] (Сбросив эту карту со своей руки, отмените атаку одной ИДЕЛ.)',
		'MULTI_ENER_DESCRIPTION': '[Постоянно]: [Мульти-энер] (Когда Вы платите цену, считается, что эта карта относится ко всем цветам.)'
	},
	'buttonTitle': {
		'OK': 'OK',
		'CANCEL': 'Отмена',
		'LEVEL0_LRIG': 'Выбрать ИДЕЛ',
		'DISCARD_AND_REDRAW': 'Заменить',
		'CHARGE': 'Зарядить',
		'GROW': 'Рост',
		'SUMMON_SIGNI': 'призвать',
		'SUMMON_SIGNI_ZONE': 'Зона',
		'BANISH': 'стереть',
		'BOUNCE': 'Вернуть',
		'TRASH': 'убрать',
		'TRASH_SIGNI': 'Убрать',
		'USE_SPELL': 'Использовать Магию',
		'SPELL_EFFECT': 'Выберите эффект Магии',
		'USE_ARTS': 'Использовать Умения',
		'ARTS_EFFECT': 'Выберите эффект Умения',
		'SPELL_CUT_IN': 'Ответить',
		'USE_ACTION_EFFECT': 'Действие',
		'SEEK': 'Искать',
		'SET_ORDER': 'Порядок',
		'SIGNI_ATTACK': 'Атаковать',
		'LRIG_ATTACK': 'Атаковать',
		'GUARD': 'защититься',
		'DISCARD': 'сбросить',
		'DECLARE': 'Назвать',
		'PAY': 'Заплатить',
		'PAY_EXCEED': 'Выход за грань',
		'DOWN': 'Положить',
		'UP': 'Поднять',
		'TARGET': 'выбрать',
		'PAY_ENER': 'заплатить энер',
		'LAUNCH': 'использовать',
		'EFFECTS': 'Эффекты',
		'CONFIRM': 'Подтвердить',
		'END_SELECT': 'Завершить выбор',
		'END_ENER_PHASE': 'Конец энер-фазы',
		'END_GROW_PHASE': 'Конец фазы роста',
		'END_MAIN_PHASE': 'Конец основной фазы',
		'END_ARTS_STEP': 'Конец шага Умений',
		'END_SIGNI_ATTACK_STEP': 'Конец шага атаки Записей',
		'END_LRIG_ATTACK_STEP': 'Конец шага атаки ИДЕЛ',
		'VIEW': 'Посмотреть',
		'ADD_TO_HAND': 'Взять в руку',
		'COLOR': 'Цвет',
		'CHOOSE_EFFECT': 'Выберите эффект',
		'CHOOSE_ZONE': 'Выберите зону',
		'RESET_SIGNI_ZONE': 'Заменить',
		'CHARM_CARD': 'Чары',
		'TRASH_CHARM': 'Убрать Чары',
		'REVEAL': 'Показать',
		'PUT_TO_TOP': 'Поместить наверх',
		'PUT_TO_BOTTOM': 'Поместить вниз',
		'REVEAL_MORE': 'Показать больше карт',
		'PROTECT': 'Защитить',
		'_SHIRONAKUJI': '-6000',
		'CLASS': 'класс',
		'PAY_WHITE_INSTEAD': 'Заплатить [Белую] взамен',
		'TRASH_OSAKI': 'Убрать Osaki',
		'RESONA': 'Отглас',
		'CRASH': 'Разрушить',
		'PLAYER': 'Игрок',
		'PUT_TO_CHECK_ZONE': 'Поместить в зону проверки',
		'PUT_TO_ENER_ZONE': 'Поместить в энер-зону',
		'CONFIRM_REFRESH_SELF': 'Обновление колоды\nОзнакомьтесь со сбросом',
		'CONFIRM_REFRESH_OPPONENT': 'Обновление колоды\nОзнакомьтесь со сбросом'
	},
	'noOptions': {
		'TARGET': 'Нет целей'
	},
	'giveUp': {
		'TARGET': 'Не выбирать',
		'SUMMON_SIGNI_ZONE': 'Отмена'
	},
	'gameText': {
		'white': 'белая',
		'black': 'чёрная',
		'red': 'красная',
		'blue': 'синяя',
		'green': 'зелёная',
		'colorless': 'бесцветная',
		'ADD_TO_HAND': 'Взять в руку',
		'SUMMON': 'Призвать',
		'DOWN': 'Положить',
		'UP': 'Поднять',
		'SHOW_EFFECTS_DIALOG_TITLE': 'Эффект',
		'PUT_TO_TOP': 'Поместить наверх',
		'PUT_TO_BOTTOM': 'Поместить вниз',
		'SELF': 'Я',
		'OPPONENT': 'Противник',
		'PUT_TO_ENER_ZONE': 'Поместить в энер-зону',
		'CONFIRM_ENCORE': 'Заплатить за Продление?',
		'CONFIRM_BET': 'Сделать ставку?',
		'MAIN_DECK': 'Основная колода',
		'HAND': 'руку',
		'SIGNI_ZONE': 'Зону Записей',
		'TRASH_ZONE': 'сброс',
		'LIFE_CLOTH': 'Жизненная материя',
		'SELECT_DONE': 'Завершить'
	},
	'prop': {
		'cardType': 'Тип',
		'classes': 'Класс',
		'level': 'Уровень',
		'color': 'Цвет',
		'limit': 'Лимит',
		'power': 'Сила',
		'limting': 'Ограничения',
		'guard': 'Защита',
		'cost': 'Цена',
		'timmings': 'Момент',
		'effects': 'Способности',
		'burst': 'вспышка'
	},
	'cardType': {
		'LRIG': 'ИДЕЛ',
		'SIGNI': 'Запись',
		'SPELL': 'Магия',
		'ARTS': 'Умение',
		'RESONA': 'Отголосок'
	},
	'color': {
		'white': 'Белая',
		'black': 'Чёрная',
		'red': 'Красная',
		'blue': 'Синяя',
		'green': 'Зелёная',
		'colorless': 'Бесцветная'
	},
	'costColor': {
		'costWhite': 'Белая',
		'costBlack': 'Чёрная',
		'costRed': 'Красная',
		'costBlue': 'Синяя',
		'costGreen': 'Зелёная',
		'costColorless': 'Бесцветная'
	},
	'timming': {
		'mainPhase': '[Основная фаза]',
		'attackPhase': '[Фаза атаки]',
		'spellCutIn': '[Ответ на магию]'
	},
	'class': {
		'タマ': 'Tama',
		'花代': 'Hanayo',
		'ユヅキ': 'Yuzuki',
		'ピルルク': 'Piruluk',
		'エルドラ': 'Eldora',
		'ミルルン': 'Mirurun',
		'緑子': 'Midoriko',
		'アン': 'Anne',
		'ウリス': 'Ulith',
		'イオナ': 'Iona',
		'ウムル': 'Umr',
		'リメンバ': 'Remember',
		'タウィル': 'Tawil',
		'サシェ': 'Sashe',
		'ミュウ': 'Myuu',
		'アイヤイ': 'Aiyai',
		'アルフォウ': 'Alfou',
		'ハナレ': 'Hanare',
		'リル': 'Ril',
		'メル': 'Mel',
		'精像': 'Миф',
		'天使': 'Ангел',
		'悪魔': 'Демон',
		'美巧': 'Прекрасный навык',
		'精武': 'Война',
		'アーム': 'Вооружение',
		'ウェポン': 'Снаряд',
		'武勇': 'Доблестная',
		'調理': 'Кулинарная',
		'遊具': 'Игровой предмет',
		'毒牙': 'Ядовитый клык',
		'精羅': 'Естество',
		'鉱石': 'Руда',
		'宝石': 'Драгоценность',
		'植物': 'Растение',
		'原子': 'Атом',
		'宇宙': 'Космос',
		'精械': 'Механика',
		'電機': 'Электромашина',
		'古代兵器': 'Древнее оружие',
		'迷宮': 'Лабиринт',
		'精生': 'Существо',
		'水獣': 'Водный зверь',
		'空獣': 'Небесный зверь',
		'地獣': 'Земной зверь',
		'龍獣': 'Драконоподобный зверь',
		'凶蟲': 'Злобное насекомое',
		'精元': 'Первородный'
	},
	DOM: {
		'index': {
			// 'link-support-webxoss': {
			// 	textContent: 'WEBXOSS НУЖДАЕТСЯ В ПОМОЩИ!',
			// 	href: 'supporters_en.html'
			// },
			'link-version': '<Ril, Memory of Desperation>',
			'label-nickname': 'Никнейм:',
			'input-nickame': {
				placeholder: 'никнейм'
			},
			'link-edit-deck': 'РедакторКолоды',
			'label-bgm': 'BGM',
			'label-sound-effect': 'SE',
			'label-room-list': 'Список комнат',
			'span-play-replay': 'Посмотреть повтор',
			'label-create-room-password': 'Пароль:',
			'label-mayus-room': '繭の部屋',
			'label-create-room': 'Создать комнату:',
			'input-room-name': {
				placeholder: 'имя комнаты'
			},
			'button-create-room': 'создать',
			'link-about': {
				textContent: 'О клиенте',
				href: 'about_en.html'
			},
			'link-service': {
				textContent: 'Положения',
				href: 'service_en.html'
			},
			'link-disclaimer': {
				textContent: 'Дисклеймер',
				href: 'service_en.html#disclaimer'
			},
			'link-supporters': {
				textContent: 'Пожертвования',
				href: 'supporters_en.html'
			},
			'span-leave-room': '<<Вернуться',
			'label-live': 'LIVE',
			// 'label-room': 'Комната:',
			// 'label-host': 'Хост:',
			// 'label-guest': 'Гость:',
			'label-ready': 'Готов',
			// 'label-deck': 'Колода:',
			'button-replay-step': 'ДАЛЕЕ',
			'button-replay-auto': 'АВТО',
			'span-surrender': 'Сдаться',
			'span-leave-game': 'Выйти',
			'chat-input': {
				placeholder: 'Сообщение...'
			},
			'label-replay-list': 'Список повторов:',
			'label-replay-file': 'Файл повтора:',
			'button-replay-return': 'Вернуться',
			'reconnect-title': 'Соединение потеряно!',
			'reconnect-retry': 'Переподключение...',
			'wait-for-reconnect-title': 'Оппонент потерял соединение!',
			'wait-for-reconnect-retry': 'Ожидание переподключения...',
			'wait-for-reconnect-button-drop': 'Уйти',
			'span-set-proxy': 'Установить Proxy',
			'proxy-title': 'Proxy',
			'proxy-description': 'Если Ваше соединение с WEBXOSS нестабильно, можете использовать Proxy.',
			'proxy-noproxy': 'Без Proxy (Tokyo)',
			'proxy-cloudflare': 'CloudFlare',
			'proxy-provide': 'Свой сервер...',
			'proxy-button-ok': 'OK',
			'msgbox-button-ok': 'OK',
			'msgbox-button-cancel': 'Отмена'
		},
		'DeckEditor': {
			'link-back-to-webxoss': 'Готово',
			'label-select-deck': 'Выберите колоду:',
			'button-delete-deck': 'Удалить',
			'button-rename': 'Переименовать',
			'label-new-deck': 'Новая колода:',
			'input-new-deck-name': {
				placeholder: 'имя колоды',
			},
			'button-new-deck': 'Добавить',
			'button-copy-deck': 'Дублировать',
			'button-import-export': 'Загрузить/Выгрузить',
			'main-deck-title': 'Основная колода',
			'main-deck-mayus-room': 'Комната Маю',
			'main-deck-burst-title': 'Вспышки: ',
			'lrig-deck-title': 'ИДЕЛ-колода',
			'label-import-from-file': 'Загрузить файл:',
			'label-export-to-file': 'Выгрузить файл:',
			'button-export': 'Выгрузить',
			'button-text': 'Показать текстом',
			'button-export-code': 'Показать код',
			'button-import-code': 'Импортировать код',
			'button-import-export-cancel': 'Отмена',
			'search-input': {
				placeholder: 'Искать...'
			},
			'link-search-tips': {
				textContent: 'Памятка по поиску',
				href: 'SearchTips_en.html'
			},
			'search-show-more': 'Показать ещё'
		}
	},
	'index': {
		'REQUIRE_UPDATE': 'Нужна новая версия!\nЧтобы начать игру, необходимо обновить клиент!',
		'UPDATING': 'Обновляю...',
		'UPDATE_READY': 'Обновлено, нажмите для применения!',
		'NET_WORK_ERROR': 'Ошибка сети.',
		'DISCONNECTED': 'Потеря соединения',
		'NO_VALID_DECK': 'Нет доступной колоды!\nОтредактируйте свою колоду!',
		'OPPONENT_DISCONNECTED': 'Противник потерял соединение!',
		'SELF_DISCONNECTED': 'Игрок потерял соединение!',
		'PLEASE_INPUT_A_NICKNAME': 'Введите свой никнейм!',
		'PLEASE_INPUT_A_ROOM_NAME': 'Введите имя комнаты!',
		'FAILED_TO_READ_DECK': 'Не удалось прочитать колоду!',
		'NEW_GUEST': '%s вошёл в комнату.',
		'GUEST_LEFT': '%s покинул комнату.',
		'READY': 'Готов открывать!',
		'UNREADY': 'Не готов',
		'INPUT_PASSWORD': 'Введите пароль',
		'WRONG_PASSWORD': 'Неверный пароль!',
		'NOT_CONNECTED': 'Нет соединения с сервером!\nПожалуйста, попробуйте позже!',
		'SUPPORT_URL': 'about_en.html#support',
		'CONFIRM_SURRENDER': 'Вы точно хотите сдаться?',
		'SURRENDERED': 'Вы сдались!',
		'OPPONENT_SURRENDERED': 'Противник сдался!',
		'CONFIRM_CLOSE': 'Вы точно хотите уйти?',
		'DROPPED': 'Противник ушёл.',
		'SAVE_REPLAY': 'Сохранить повтор',
		'FAILED_TO_PARSE_REPLAY': 'Не удалось разобрать повтор!',
		'UNSUPPORTED_REPLAY_VERSION': 'Неподдерживаемая версия повтора!\nОбновите клиент!',
		'PROVIDE_PROXY_SERVER': 'Желаете предоставить свой Proxy-сервер?\nСвяжитесь с webxoss@gmail.com !\nWEBXOSS с Вашей помощью станет лучше!',
		'FETCHING_DATA': 'Загрузка данных...\nНажмите "OK" для отмены.',
		'FAILED_TO_FETCH_DATA': 'Не удалось загрузить!'
	},
	'editor': {
		'PLEASE_INPUT_A_DECK_NAME': 'Введите имя колоды!',
		'DECK_NAME': 'Имя колоды:',
		'DECK_NAME_ALREADY_EXISTS': 'Колода с именем "%s" уже существует!',
		'FAILED_TO_PARSE_FILE': 'Не удалось разобрать файл!',
		'FAILED_TO_PARSE_CODE': 'Не удалось разобрать код!',
		'CONFIRM_DELETE_DECK': 'Вы точно хотите удалить "%s"?'
	}
};

var map_it = {
	common: {
		'OK': 'OK',
		'CANCEL': 'CANCEL',
		'NO_CARDS': 'No cards',
		'or': 'or'
	},
	_misc: {
		'DIALOG_TITLE_EFFECTS': 'Piu effetti sono stati attivati\nScegline uno da risolvere.',
		// 'NO_TARGET': 'Nessun bersaglio',
		'NO_OPTIONS': 'Non hai %s',
		// 'GIVE_UP_TARGET': 'Non selezionare',
		'GIVE_UP': 'Non %s',
		'GUARD_TRUE': 'Si',
		'GUARD_FALSE': 'No',
		'LIMITING': '%s Only',
		'WAIT': 'In attesa...',
		'CLASS_SEPARATOR': ':\n',
		'CROSS_NAME_QUOTE_LEFT': '"',
		'CROSS_NAME_QUOTE_RIGHT': '"',
		'CROSS_LEFT': '>Cross< %s Sinistra',
		'CROSS_RIGHT': '>Cross< %s Destra',
		'CROSS_AND': '>Cross< %s Right and %s Left',
		'CROSS_OR': ' o ',
		'GUARD_DESCRIPTION': '[Guard] (Scartando questa carta dalla tua mano annulla un attacco di una LRIG)',
		'MULTI_ENER_DESCRIPTION': '[Constant]: [Multi Ener] (Mentre paghi un costo tratta questa carta come se fosse di un qualsiasi colore)'
	},
	'buttonTitle': {
		'OK': 'OK',
		'CANCEL': 'Annulla',
		'LEVEL0_LRIG': 'Seleziona LRIG',
		'DISCARD_AND_REDRAW': 'Mulligan',
		'CHARGE': 'Carica',
		'GROW': 'Grow',
		'SUMMON_SIGNI': 'Evoca',
		'SUMMON_SIGNI_ZONE': 'Zona',
		'BANISH': 'Bandisci',
		'BOUNCE': 'Rimbalza',
		'TRASH': 'Scarti',
		'TRASH_SIGNI': 'Scarta',
		'USE_SPELL': 'Usa SPELL',
		'SPELL_EFFECT': 'Scegli che effetto attivare',
		'USE_ARTS': 'Usa ARTS',
		'ARTS_EFFECT': 'Scegli che effetto attivare',
		'SPELL_CUT_IN': 'Spell cut-in',
		'USE_ACTION_EFFECT': 'Azione',
		'SEEK': 'Cerca',
		'SET_ORDER': 'Ordina',
		'SIGNI_ATTACK': 'Attacca',
		'LRIG_ATTACK': 'Attacca',
		'GUARD': 'Guard',
		'DISCARD': 'Scarta',
		'DECLARE': 'Dichiara',
		'PAY': 'Paga',
		'PAY_EXCEED': 'Exceed',
		'DOWN': 'Down',
		'UP': 'Up',
		'TARGET': 'Bersaglia',
		'PAY_ENER': 'Paga Ener',
		'LAUNCH': 'Lancia',
		'EFFECTS': 'Effetti',
		'CONFIRM': 'Conferma',
		'END_SELECT': 'Termina',
		'END_ENER_PHASE': 'Fine Ener Phase',
		'END_GROW_PHASE': 'Fine Grow Phase',
		'END_MAIN_PHASE': 'Fine Main Phase',
		'END_ARTS_STEP': 'Fine ARTS Step',
		'END_SIGNI_ATTACK_STEP': 'Fine SIGNI Attack Step',
		'END_LRIG_ATTACK_STEP': 'Fine LRIG Attack Step',
		'VIEW': 'Dettagli',
		'ADD_TO_HAND': 'Aggiungi alla mano',
		'COLOR': 'Colore',
		'CHOOSE_EFFECT': 'Seleziona effetto',
		'CHOOSE_ZONE': 'Seleziona Zona',
		'RESET_SIGNI_ZONE': 'Sostituisci',
		'CHARM_CARD': 'Charm',
		'TRASH_CHARM': 'Scarta Charm',
		'REVEAL': 'Rivela',
		'PUT_TO_TOP': 'Metti in cima',
		'PUT_TO_BOTTOM': 'Metti in fondo',
		'REVEAL_MORE': 'Rivela altre carte',
		'PROTECT': 'Protect',
		'_SHIRONAKUJI': '-6000',
		'CLASS': 'classe',
		'PAY_WHITE_INSTEAD': 'Paga [White] invece',
		'TRASH_OSAKI': 'Scarta Osaki',
		'RESONA': 'Resona',
		'CRASH': 'Crash',
		'PLAYER': 'Player',
		'PUT_TO_CHECK_ZONE': 'Sposta nella Check Zone',
		'PUT_TO_ENER_ZONE': 'Sposta nella Ener Zone',
		'CONFIRM_REFRESH_SELF': 'Deck refresh\nConferma',
		'CONFIRM_REFRESH_OPPONENT': 'Deck refresh avversario\nConferma'
	},
	'noOptions': {
		'TARGET': 'Nessun bersaglio'
	},
	'giveUp': {
		'TARGET': 'Non selezionare',
		'SUMMON_SIGNI_ZONE': 'Cancella'
	},
	'gameText': {
		'white': 'white',
		'black': 'black',
		'red': 'red',
		'blue': 'blue',
		'green': 'green',
		'colorless': 'colorless',
		'ADD_TO_HAND': 'Aggiungi alla mano',
		'SUMMON': 'Evoca',
		'DOWN': 'Down',
		'UP': 'Up',
		'SHOW_EFFECTS_DIALOG_TITLE': 'Effetto',
		'PUT_TO_TOP': 'Metti in cima',
		'PUT_TO_BOTTOM': 'Metti in fondo',
		'SELF': 'Giocatore',
		'OPPONENT': 'Avversario',
		'PUT_TO_ENER_ZONE': 'Metti nella Ener Zone',
		'CONFIRM_ENCORE': 'Vuoi pagare il costo di Encore?',
		'CONFIRM_BET': 'Do you want to bet?',
		'MAIN_DECK': 'Main Deck',
		'HAND': 'Hand',
		'SIGNI_ZONE': 'SIGNI Zone',
		'TRASH_ZONE': 'Trash Zone',
		'LIFE_CLOTH': 'Life Cloth',
		'SELECT_DONE': 'Termina'
	},
	'prop': {
		'cardType': 'Tipo',
		'classes': 'Classe',
		'level': 'Livello',
		'color': 'Colore',
		'limit': 'Limite',
		'power': 'Power',
		'limting': 'Limitazione',
		'guard': 'Guard',
		'cost': 'Costo',
		'timmings': 'Timing',
		'effects': 'Abilita',
		'burst': 'Life Burst'
	},
	'cardType': {
		'LRIG': 'LRIG',
		'SIGNI': 'SIGNI',
		'SPELL': 'SPELL',
		'ARTS': 'ARTS',
		'RESONA': 'RESONA'
	},
	'color': {
		'white': 'White',
		'black': 'Black',
		'red': 'Red',
		'blue': 'Blue',
		'green': 'Green',
		'colorless': 'Colorless'
	},
	'costColor': {
		'costWhite': 'White',
		'costBlack': 'Black',
		'costRed': 'Red',
		'costBlue': 'Blue',
		'costGreen': 'Green',
		'costColorless': 'Colorless'
	},
	'timming': {
		'mainPhase': '[Main Phase]',
		'attackPhase': '[Attack Phase]',
		'spellCutIn': '[Spell Cut-In]'
	},
	'class': {
		'タマ': 'Tama',
		'花代': 'Hanayo',
		'ユヅキ': 'Yuzuki',
		'ピルルク': 'Piruluk',
		'エルドラ': 'Eldora',
		'ミルルン': 'Mirurun',
		'緑子': 'Midoriko',
		'アン': 'Anne',
		'ウリス': 'Ulith',
		'イオナ': 'Iona',
		'ウムル': 'Umuru',
		'リメンバ': 'Remember',
		'タウィル': 'Tawil',
		'サシェ': 'Sashe',
		'ミュウ': 'Myuu',
		'アイヤイ': 'Aiyai',
		'アルフォウ': 'Alfou',
		'ハナレ': 'Hanare',
		'リル': 'Ril',
		'メル': 'Mel',
		'精像': 'Image',
		'天使': 'Angel',
		'悪魔': 'Devil',
		'美巧': 'Beautiful Technique',
		'精武': 'War',
		'アーム': 'Arm',
		'ウェポン': 'Weapon',
		'武勇': 'Valor',
		'調理': 'Cooking',
		'遊具': 'Playground Equipment',
		'毒牙': 'Poison Fang',
		'精羅': 'Nature',
		'鉱石': 'Ore',
		'宝石': 'Gem',
		'植物': 'Plant',
		'原子': 'Atom',
		'宇宙': 'Space',
		'精械': 'Machine',
		'電機': 'Electric',
		'古代兵器': 'Ancient Weapon',
		'迷宮': 'Labyrinth',
		'精生': 'Living',
		'水獣': 'Water Beast',
		'空獣': 'Sky Beast',
		'地獣': 'Earth Beast',
		'龍獣': 'Dragon Beast',
		'凶蟲': 'Misfortune Insect',
		'精元': 'Origin'
	},
	DOM: {
		'index': {
			// 'link-support-webxoss': {
			// 	textContent: 'WEBXOSS HA BISOGNO DEL TUO AIUTO!',
			// 	href: 'about_en.html#support'
			// },
			'link-version': '<Ril, Memory of Desperation>',
			'label-nickname': 'Nickname:',
			'input-nickame': {
				placeholder: 'nickname'
			},
			'link-edit-deck': 'Deck Editor',
			'label-bgm': 'BGM',
			'label-sound-effect': 'SE',
			'label-room-list': 'Stanze:',
			'span-play-replay': 'Guarda Replay',
			'label-create-room-password': 'Password:',
			'label-mayus-room': 'Stanza di mayu',
			'label-create-room': 'Crea Stanza:',
			'input-room-name': {
				placeholder: 'room name'
			},
			'button-create-room': 'crea',
			'link-about': {
				textContent: 'About',
				href: 'about_en.html'
			},
			'link-service': {
				textContent: 'Termini',
				href: 'service_en.html'
			},
			'link-disclaimer': {
				textContent: 'Disclaimer',
				href: 'service_en.html#disclaimer'
			},
			'link-supporters': {
				textContent: 'Supporters',
				href: 'supporters_en.html'
			},
			'span-leave-room': '<< Torna',
			'label-live': 'LIVE',
			// 'label-room': 'Stanza:',
			// 'label-host': 'Host:',
			// 'label-guest': 'Ospite:',
			'label-ready': 'Pronto',
			// 'label-deck': 'Deck:',
			'button-replay-step': 'STEP',
			'button-replay-auto': 'AUTO',
			'span-surrender': 'Resa',
			'span-leave-game': 'Abbandona',
			'chat-input': {
				placeholder: 'Chatta qui...'
			},
			'label-replay-list': 'Lista replay:',
			'label-replay-file': 'File replay:',
			'button-replay-return': 'Torna',
			'reconnect-title': 'Ti sei disconnesso!',
			'reconnect-retry': 'Riconnessione...',
			'wait-for-reconnect-title': 'Il tuo avversario si è disconnesso!',
			'wait-for-reconnect-retry': 'In attesa di riconnessione...',
			'wait-for-reconnect-button-drop': 'Drop',
			'span-set-proxy': 'Imposta Proxy',
			'proxy-title': 'Proxy',
			'proxy-description': 'Se la tua connessione a WEBXOSS non è stabile puoi provare con l\'uso di un proxy.',
			'proxy-noproxy': 'No Proxy (Tokyo)',
			'proxy-cloudflare': 'CloudFlare',
			'proxy-provide': 'Configura server...',
			'proxy-button-ok': 'OK',
			'msgbox-button-ok': 'OK',
			'msgbox-button-cancel': 'Annulla'
		},
		'DeckEditor': {
			'link-back-to-webxoss': 'Fine',
			'label-select-deck': 'Seleziona deck:',
			'button-delete-deck': 'Cancella',
			'button-rename': 'Rinomina',
			'label-new-deck': 'Nuovo deck:',
			'input-new-deck-name': {
				placeholder: 'nome deck',
			},
			'button-new-deck': 'Aggiungi',
			'button-copy-deck': 'Duplica',
			'button-import-export': 'Importa/Esporta',
			'main-deck-title': 'Main Deck',
			'main-deck-mayus-room': 'Stanza di mayu',
			'main-deck-burst-title': 'Burst: ',
			'lrig-deck-title': 'LRIG Deck',
			'label-import-from-file': 'Importa file:',
			'label-export-to-file': 'Esporta file:',
			'button-export': 'Esporta',
			'button-text': 'Mostra testo',
			'button-export-code': 'Mostra codice',
			'button-import-code': 'Importa codice',
			'button-import-export-cancel': 'Annulla',
			'search-input': {
				placeholder: 'Cerca qui...'
			},
			'link-search-tips': {
				textContent: 'Spiegazione filtri',
				href: 'SearchTips_it.html'
			},
			'search-show-more': 'Altro'
		}
	},
	'index': {
		'REQUIRE_UPDATE': 'Una nuova versione è richiesta! Aggiorna il client!',
		'UPDATING': 'Aggiornamento...',
		'UPDATE_READY': 'Aggiornato, conferma per applicare!',
		'NET_WORK_ERROR': 'Errore di rete.',
		'DISCONNECTED': 'Disconnesso',
		'NO_VALID_DECK': 'Nessun deck valido! Modifica il tuo deck!',
		'OPPONENT_DISCONNECTED': 'Il tuo avversario si è disconnesso!',
		'SELF_DISCONNECTED': 'Il giocatore si è disconnesso!',
		'PLEASE_INPUT_A_NICKNAME': 'Inserisci un nickname!',
		'PLEASE_INPUT_A_ROOM_NAME': 'Inserisci il nome della stanza!',
		'FAILED_TO_READ_DECK': 'Lettura del deck fallita!',
		'NEW_GUEST': '%s è entrato nella stanza.',
		'GUEST_LEFT': '%s ha lasciato la stanza.',
		'READY': 'Pronto!',
		'UNREADY': 'Non pronto',
		'INPUT_PASSWORD': 'Inserisci password',
		'WRONG_PASSWORD': 'Password errata!',
		'NOT_CONNECTED': 'Non connesso, riprova piu tardi!',
		'SUPPORT_URL': 'about_en.html#support',
		'CONFIRM_SURRENDER': 'Sicuro di volerti arrendere?',
		'SURRENDERED': 'Ti sei arreso!',
		'OPPONENT_SURRENDERED': 'Il tuo avversario si è arreso!',
		'CONFIRM_CLOSE': 'Sicuro di voler abbandonare?',
		'DROPPED': 'You are dropped.',
		'SAVE_REPLAY': 'Salva replay',
		'FAILED_TO_PARSE_REPLAY': 'File replay non valido!',
		'UNSUPPORTED_REPLAY_VERSION': 'Versione del replay non supportata, aggiorna il tuo client!',
		'PROVIDE_PROXY_SERVER': 'Vuoi donare un server proxy?\nPer piacere contattaci a webxoss@gmail.com !\nWEBXOSS sara ancora migliore grazie a te!',
		'FETCHING_DATA': 'Lettura dati...\nPremi "OK" per annullare.',
		'FAILED_TO_FETCH_DATA': 'Lettura dati fallita!'
	},
	'editor': {
		'PLEASE_INPUT_A_DECK_NAME': 'Inserisci nome del deck!',
		'DECK_NAME': 'Nome Deck:',
		'DECK_NAME_ALREADY_EXISTS': 'il Deck "%s" esiste gia!',
		'FAILED_TO_PARSE_FILE': 'Lettura file fallita!',
		'FAILED_TO_PARSE_CODE': 'Lettura codice fallita!',
		'CONFIRM_DELETE_DECK': 'Sicuro di voler cancellare "%s"?'
	}
};

var map_ko = {
  common: {
    'OK': '확인',
    'CANCEL': '캔슬',
    'NO_CARDS': '카드가 없습니다',
		'or': 'or'
  },
  _misc: {
    'DIALOG_TITLE_EFFECTS': '복수의 효과가 동시에 발동되었습니다.\n먼저 처리할 효과를 하나 골라주세요',
    // 'NO_TARGET': '목표가 없습니다',
    'NO_OPTIONS': '%s할 수 없습니다',
    // 'GIVE_UP_TARGET': '고를 수 없습니다',
    'GIVE_UP': '%s하지 않는다',
    'GUARD_TRUE': '있음',
    'GUARD_FALSE': '-',
    'LIMITING': '%s 한정',
    'WAIT': '대전 상대가 생각중',
    'CLASS_SEPARATOR': ':',
    'CROSS_NAME_QUOTE_LEFT': '《',
    'CROSS_NAME_QUOTE_RIGHT': '》',
    'CROSS_LEFT': '[크로스]%s의 왼쪽',
    'CROSS_RIGHT': '[크로스]%s의 오른쪽',
    'CROSS_AND': '[크로스]%s의 왼쪽과  %s의 오른쪽',
    'CROSS_OR': '또는',
    'GUARD_DESCRIPTION': '[가드]（이 카드를 패에서 버리는 것으로, 루리그의 공격을 한 번 무효로 한다.）',
    'MULTI_ENER_DESCRIPTION': '[상시]：[멀티에나]（코스트를 지불할 때, 이 카드는 모든 색을 가진것 처럼 취급한다.）'
  },
  'buttonTitle': {
    'OK': '확인',
    'CANCEL': '캔슬',
    'LEVEL0_LRIG': '루리그 셋',
    'DISCARD_AND_REDRAW': '다시 뽑기',
    'CHARGE': '차지',
    'GROW': '그로우',
    'SUMMON_SIGNI': '장에 내기',
    'SUMMON_SIGNI_ZONE': '시그니 존',
    'BANISH': '배니시',
    'BOUNCE': '패로 되돌리기',
    // 'TRASH': 'トラッシュに置く',
    'TRASH': '트래시',
    // 'TRASH_SIGNI': 'トラッシュに置く',
    'TRASH_SIGNI': '트래시',
    'USE_SPELL': '사용',
    'SPELL_EFFECT': '효과를 선택',
    'USE_ARTS': '아츠를 사용',
    'ARTS_EFFECT': '효과를 선택',
    // 'SPELL_CUT_IN': 'スペルカットイン',
    'SPELL_CUT_IN': '컷 인',
    'USE_ACTION_EFFECT': '기동',
    'SEEK': '찾기',
    'SET_ORDER': '순서를 배치',
    'SIGNI_ATTACK': '어택',
    'LRIG_ATTACK': '어택',
    'GUARD': '가드',
    'DISCARD': '버리기',
    'DECLARE': '선언',
    'PAY': '지불',
    'PAY_EXCEED': '엑시드',
    'DOWN': '다운',
    'UP': '업',
    'TARGET': '목표',
    'PAY_ENER': '에나를 지불',
    'LAUNCH': '발동',
    'EFFECTS': '먼저 처리',
    'CONFIRM': '확인',
    'END_SELECT': '선택을 완료',
    'END_ENER_PHASE': '에나 페이즈 종료',
    'END_GROW_PHASE': '그로우 페이즈 종료',
    'END_MAIN_PHASE': '메인 페이즈 종료',
    'END_ARTS_STEP': '아츠 스텝 종료',
    // 'END_SIGNI_ATTACK_STEP': 'シグニアタックステップ終了',
    'END_SIGNI_ATTACK_STEP': '스텝 종료',
    // 'END_LRIG_ATTACK_STEP': 'ルリグアタックステップ終了',
    'END_LRIG_ATTACK_STEP': '스텝 종료',
    'VIEW': '본다',
    'ADD_TO_HAND': '패에 더하기',
    'COLOR': '색',
    'CHOOSE_EFFECT': '효과 선택',
    'CHOOSE_ZONE': '존 선택',
    'RESET_SIGNI_ZONE': '배치',
    'CHARM_CARD': '참',
    'TRASH_CHARM': '참을 트래시',
    'REVEAL': '공개',
    'PUT_TO_TOP': '위에 두기',
    'PUT_TO_BOTTOM': '아래에 두기',
    'REVEAL_MORE': '카드를 더 공개',
    'PROTECT': '보호',
    '_SHIRONAKUJI': '-6000',
    'CLASS': '클래스',
    'PAY_WHITE_INSTEAD': '대신 [백]을 지불',
    'TRASH_OSAKI': '오사키',
    'RESONA': '레조나',
    'CRASH': '크래시',
    'PLAYER': '플레이어',
    'PUT_TO_CHECK_ZONE': '체크 존에 두기',
    'PUT_TO_ENER_ZONE': '에나 존에 두기',
    'CONFIRM_REFRESH_SELF': '리프레시\n당신의 트래시를 확인',
    'CONFIRM_REFRESH_OPPONENT': '리프레시\n상대의 트래시를 확인'
  },
  'noOptions': {
    // 'SPELL_CUT_IN': 'カットインできません',
    // 'GUARD': 'ガードできません',
    // '発動できません': '発動できません',
    'TARGET': '목표가 없습니다'

  },
  'giveUp': {
    // 'SPELL_CUT_IN': 'カットインしない',
    // 'GUARD': 'ガードしない',
    // 'TARGET': '選択しない',
    // 'LAUNCH': '発動しない',
    // 'EFFECTS': '処理しない',
    'TARGET': '선택하지 않는다',
    'SUMMON_SIGNI_ZONE': '캔슬',
    'DISCARD_AND_REDRAW': '다시 뽑지 않는다',
    'SEEK': '찾지 않는다'
  },
  'gameText': {
    'white': '백',
    'black': '흑',
    'red': '적',
    'blue': '청',
    'green': '녹',
    'colorless': '무',
    'ADD_TO_HAND': '패에 더한다',
    'SUMMON': '장에 낸다',
    'DOWN': '다운',
    'UP': '업',
    'SHOW_EFFECTS_DIALOG_TITLE': '효과',
    'PUT_TO_TOP': '위에 둔다',
    'PUT_TO_BOTTOM': '아래에 둔다',
    'SELF': '당신',
    'OPPONENT': '대전 상대',
    'PUT_TO_ENER_ZONE': '에나 존에 둔다',
    'CONFIRM_ENCORE': '앵콜을 사용합니까?',
		'CONFIRM_BET': '베트 하시겠습니까?',
    'MAIN_DECK': '덱',
		'HAND': 'Hand',
		'SIGNI_ZONE': 'SIGNI Zone',
		'TRASH_ZONE': 'Trash Zone',
    'LIFE_CLOTH': '라이프 클로스',
    'SELECT_DONE': '선택 완료'
  },
  'prop': {
    'cardType': '종류',
    'classes': '타입',
    'level': '레벨',
    'color': '색',
    'limit': '리미트',
    'power': '파워',
    'limting': '한정조건',
    'guard': '가드',
    'cost': '코스트',
    'timmings': '타이밍',
    'effects': '효과',
    'burst': '라이프 버스트'
  },
  'cardType': {
    'LRIG': '루리그',
    'SIGNI': '시그니',
    'SPELL': '스펠',
    'ARTS': '아츠',
    'RESONA': '레조나'
  },
  'color': {
    'white': '백',
    'black': '흑',
    'red': '적',
    'blue': '청',
    'green': '녹',
    'colorless': '무'
  },
  'costColor': {
    'costWhite': '백',
    'costBlack': '흑',
    'costRed': '적',
    'costBlue': '청',
    'costGreen': '녹',
    'costColorless': '무'
  },
  'timming': {
    'mainPhase': '[메인 페이즈]',
    'attackPhase': '[어택 페이즈]',
    'spellCutIn': '[스펠 컷인]'
  },
  'class': {
    'タマ': '타마',
    '花代': '하나요',
    'ユヅキ': '유즈키',
    'ピルルク': '피루루크',
    'エルドラ': '엘도라',
    'ミルルン': '미루룽',
    '緑子': '미도리코',
    'アン': '안',
    'ウリス': '우리스',
    'イオナ': '이오나',
    'ウムル': '움르',
    'リメンバ': '리멤버',
    'タウィル': '타윌',
    'サシェ': '사셰',
    'ミュウ': '뮤',
    'アイヤイ': '아이야이',
    'アルフォウ': '알포우',
    'ハナレ': '하나레',
		'リル': '릴',
		'メル': '멜',
    '精像': '정상',
    '天使': '천사',
    '悪魔': '악마',
    '美巧': '미교',
    '精武': '정무',
    'アーム': '암',
    'ウェポン': '웨펀',
		'武勇': '무용',
		'調理': '조리',
    '遊具': '유구',
    '毒牙': '독아',
    '精羅': '정나',
    '鉱石': '광석',
    '宝石': '보석',
    '植物': '식물',
    '原子': '원자',
    '宇宙': '우주',
    '精械': '정계',
    '電機': '전기',
    '古代兵器': '고대병기',
    '迷宮': '미궁',
    '精生': '정생',
    '水獣': '수수',
    '空獣': '공수',
    '地獣': '지수',
    '龍獣': '용수',
    '凶蟲': '흉충',
    '精元': '정원'
  },
  DOM: {
    'index': {
      // 'link-support-webxoss': {
      //  textContent: 'WEBXOSS NEEDS YOUR HELP!',
      //  href: 'about_en.html#support'
      // },
      'link-version': '<결사의 기억 릴>',
      // 'label-nickname': 'あなたのニックネーム:',
      'label-nickname': '닉네임:',
      'input-nickame': {
        placeholder: '닉네임'
      },
      'link-edit-deck': '덱 편집',
      'label-bgm': 'BGM',
      'label-sound-effect': 'SE',
      'label-room-list': '방 목록:',
      'span-play-replay': '리플레이 재생',
      'label-create-room-password': '패스워드:',
      'label-mayus-room': '마유의 방',
      'label-create-room': '방 생성:',
      'input-room-name': {
        placeholder: '방 제목'
      },
      'button-create-room': '완료',
      'link-about': {
        // textContent: 'このサイトについて',
        textContent: 'About',
        href: 'about_en.html'
      },
      // 'link-service': 'サービスについて',
      'link-service': {
        textContent: 'Terms',
        href: 'service_en.html'
      },
      // 'link-disclaimer': '責任取りについて',
      'link-disclaimer': {
        textContent: 'Disclaimer',
        href: 'service_en.html#disclaimer'
      },
      'link-supporters': {
        // textContent: 'サポーターリスト',
        textContent: 'Supporters',
        href: 'supporters_en.html'
      },
      'span-leave-room': '<<돌아가기',
      'label-live': 'LIVE',
      // 'label-room': '部屋:',
      // 'label-host': 'ホスト:',
      // 'label-guest': 'ゲスト:',
      'label-ready': '준비',
      // 'label-deck': 'デッキ:',
      'button-replay-step': 'STEP',
      'button-replay-auto': 'AUTO',
      'span-surrender': '항복하기',
      'span-leave-game': '돌아가기',
      'chat-input': {
        placeholder: '대화 입력'
      },
      'label-replay-list': '리플레이 리스트:',
      'label-replay-file': '파일:',
      'button-replay-return': '돌아가기',
      'reconnect-title': '연결이 끊어졌습니다.',
      'reconnect-retry': '재접속중...',
      'wait-for-reconnect-title': '대전 상대의 연결이 끊어졌습니다.',
      'wait-for-reconnect-retry': '재접속을 기다리고 있습니다...',
      'wait-for-reconnect-button-drop': '기다리지 않는다',
      'span-set-proxy': '프록시 설정',
      'proxy-title': '프록시',
      'proxy-description': '만약 WEBXOSS 서버가 원활하지 않다면, 프록시를 시도할 수 있습니다.',
      'proxy-noproxy': '프록시 없음 (Tokyo)',
      'proxy-cloudflare': 'CloudFlare',
      'proxy-provide': '서버 제공중...',
      'proxy-button-ok': '확인',
      'msgbox-button-ok': '확인',
      'msgbox-button-cancel': '캔슬'
    },
    'DeckEditor': {
      'link-back-to-webxoss': '작성 완료',
      'label-select-deck': '덱 고르기:',
      'button-delete-deck': '삭제',
      'button-rename': '명명',
      'label-new-deck': '새로운 덱:',
      'input-new-deck-name': {
        placeholder: '덱 이름',
      },
      'button-new-deck': '신규',
      'button-copy-deck': '복제',
      'button-import-export': '불러오기/저장하기',
      'main-deck-title': '메인 덱',
      'main-deck-mayus-room': '마유의 방',
      'main-deck-burst-title': '라이프 버스트:',
      'lrig-deck-title': '루리그 덱',
      'label-import-from-file': '파일에서 불러오기:',
      'label-export-to-file': '파일로 저장하기:',
      'button-export': '저장하기',
      'button-text': '텍스트 표시',
      'button-export-code': '코드 표시',
      'button-import-code': '코드 불러오기',
      'button-import-export-cancel': '캔슬',
      'search-input': {
        placeholder: '키워드로 검색'
      },
      'link-search-tips': {
        textContent: '힌트',
        href: 'SearchTips_en.html'
      },
      'search-show-more': '좀더 찾기…'
    }
  },
  'index': {
    'REQUIRE_UPDATE': '새로운 버전이 필요합니다.\n클라이언트를 갱신해주세요.',
    'UPDATING': '갱신중…',
    // 'UPDATE_READY': 'アップデート終了しました。ここでクリックと完成する。',
    'UPDATE_READY': '갱신 완료했습니다. 여기를 클릭해주세요.',
    'NET_WORK_ERROR': '네트워크에 에러가 발생했습니다.',
    'DISCONNECTED': '연결이 끊어졌습니다.',
    'NO_VALID_DECK': '덱이 없습니다.',
    'OPPONENT_DISCONNECTED': '대전 상대의 연결이 끊어졌습니다.',
    'SELF_DISCONNECTED': '対戦者が切断されました。',
    'PLEASE_INPUT_A_NICKNAME': '닉네임을 입력해주세요.',
    'PLEASE_INPUT_A_ROOM_NAME': '방 이름을 입력해주세요.',
    'FAILED_TO_READ_DECK': '덱을 로딩하는데 실패했습니다.',
    'NEW_GUEST': '%s 방에 들어왔습니다.',
    'GUEST_LEFT': '%s 방을 나갔습니다.',
    'READY': '대전 상대의 준비가 완료되었습니다.',
    'UNREADY': '준비 해재',
    'INPUT_PASSWORD': '패스워드',
    'WRONG_PASSWORD': '패스워드가 바르지 않습니다.',
    'NOT_CONNECTED': '아직 서버에 접속되어있지 않습니다.\n나중에 다시 한번 시도해주세요.',
    'SUPPORT_URL': 'about_en.html#support',
    'CONFIRM_SURRENDER': '정말로 항복하시겠습니까?',
    'SURRENDERED': '항복했습니다.',
    'OPPONENT_SURRENDERED': '대전 상대가 항복했습니다.',
    'CONFIRM_CLOSE': '게임을 떠나시겠습니까?',
    'DROPPED': '대전 상대가 게임을 떠났습니다.',
    'SAVE_REPLAY': '리플레이를 보존',
    'FAILED_TO_PARSE_REPLAY': '파일 해석에 실패했습니다.',
    'UNSUPPORTED_REPLAY_VERSION': '지원하지 않는 리플레이 버전입니다.\n클라이언트를 업데이트 바랍니다.',
    'PROVIDE_PROXY_SERVER': '프록시 서버를 지원하고 싶습니까?\n webxoss@gmail.com 으로 연락 주세요!\nWEBXOSS는 당신의 협력에 감사합니다!',
    'FETCHING_DATA': '데이터를 가져오는 중...\n확인을 눌러 취소.',
    'FAILED_TO_FETCH_DATA': '데이터를 가져오는데 실패했습니다!'
  },
  'editor': {
    'PLEASE_INPUT_A_DECK_NAME': '덱 이름을 입력해주세요.',
    'DECK_NAME': '덱 이름',
    'DECK_NAME_ALREADY_EXISTS': '덱 "%s"은 이미 존재하고 있습니다.',
    'FAILED_TO_PARSE_FILE': '파일 해석에 실패했습니다.',
    'FAILED_TO_PARSE_CODE': '코드 해석에 실패했습니다.',
    'CONFIRM_DELETE_DECK': '정말로 "%s"를 지우시겠습니까?'
  }
};

var map_zh_TW = Object.create(map_zh_CN);
map_zh_TW.traditional = true;

var simplifiedStr = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄并将昵删复舍号随铠';
var traditionalStr = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫眾謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為只兇準啟闆裡靂餘鍊洩并將暱刪製捨號隨鎧';

function Localize (namespace,label) {
	var textMap = Localize.map[namespace];
	if (!textMap) {
		console.warn('no such namespace: "' + namespace + '" .');
		debugger;
		return label;
	}
	var str = textMap[label];
	if (!str) {
		console.warn('no such label: "' + label + '" .');
		debugger;
		return label;
	}
	var values = toArr(arguments).slice(2);
	str = Localize.formatString(str,values);
	str = Localize.traditionalize(str);
	return str;
}

Localize.map = map_en;

Localize.init = function () {
	var lang = Localize.getLanguage();
	Localize.setLanguage(lang);
};

Localize.getLanguage = function () {
	return localStorage.getItem('language') || 'en';
};

Localize.setLanguage = function (lang) {
	if (lang === 'zh_CN') {
		Localize.map = map_zh_CN;
		CardInfo = CardInfo_zh;
		localStorage.setItem('language',lang);
	} else if (lang === 'zh_TW') {
		Localize.map = map_zh_TW;
		CardInfo = CardInfo_zh;
		localStorage.setItem('language',lang);
	} else if (lang === 'en') {
		Localize.map = map_en;
		CardInfo = CardInfo_en;
		localStorage.setItem('language',lang);
	} else if (lang === 'jp') {
		Localize.map = map_jp;
		CardInfo = CardInfo_jp;
		localStorage.setItem('language',lang);
	} else if (lang === 'ko') {
		Localize.map = map_ko;
		CardInfo = CardInfo_ko;
		localStorage.setItem('language',lang);
	} else if (lang === 'ru') {
		Localize.map = map_ru;
		CardInfo = CardInfo_ru;
		localStorage.setItem('language',lang);
	} else if (lang === 'it') {
		Localize.map = map_it;
		CardInfo = CardInfo_it;
		localStorage.setItem('language',lang);
	} else {
		debugger;
		Localize.map = map_en;
		CardInfo = CardInfo_jp;
	}
};

Localize.formatString = function (str,values) {
	for (var i = 0; i < values.length; i++) {
		str = str.replace('%s',values[i]);
	}
	return str;
};

Localize.traditionalize = function (str) {
	if (!Localize.map.traditional) return str;
	var newStr = '';
	for (var i = 0; i < str.length; i++) {
		var char = str.charAt(i);
		var charCode = str.charCodeAt(i);
		var idx = simplifiedStr.indexOf(char);
		if (idx !== -1) {
			newStr += traditionalStr.charAt(idx);
		} else {
			newStr += char;
		}
	}
	return newStr;
};

Localize.index = Localize.bind(Localize,'index');
Localize.editor = Localize.bind(Localize,'editor');

Localize.DOM = function (namespace) {
	var localization = Localize.map.DOM[namespace];
	if (!localization) {
		console.warn('no such namespace: ' + namespace + ' .');
		return;
	}
	for (var id in localization) {
		var el = document.getElementById(id);
		if (!el) {
			console.warn('no such element: ' + id + ' .');
			debugger;
			continue;
		}
		var value = localization[id];
		if (isStr(value)) {
			el.textContent = Localize.traditionalize(value);
		} else if (isObj(value)) {
			var obj = value;
			if (obj.textContent) {
				el.textContent = Localize.traditionalize(obj.textContent);
			}
			for (var attr in obj) {
				var value = obj[attr];
				if (attr === 'textContent') {
					el.textContent = Localize.traditionalize(value);
				} else {
					el.setAttribute(attr,value);
				}
			}
		}
	}
}

Localize.labelToTitle = function (label) {
	return Localize('buttonTitle',label);
};

Localize.labelToDialogTitle = function (label) {
	if (label === 'EFFECTS') return Localize('_misc','DIALOG_TITLE_EFFECTS');
	if (label === 'CARD_TYPE') return Localize('prop','cardType');
	return Localize.labelToTitle(label);
}

Localize.noOptions = function (label) {
	// if (label === 'TARGET') return Localize('_misc','NO_TARGET');
	var title = Localize.labelToTitle(label);
	var endPhase = [
		'END_ENER_PHASE',
		'END_GROW_PHASE',
		'END_MAIN_PHASE',
		'END_ARTS_STEP',
		'END_SIGNI_ATTACK_STEP',
		'END_LRIG_ATTACK_STEP'
	];
	if (inArr(label,endPhase)) return title;
	if (label in this.map.noOptions) {
		return Localize('noOptions',label);
	}
	return Localize('_misc','NO_OPTIONS',title);
	// return '无法' + Localize(label);
};

Localize.giveUp = function (label) {
	var title = Localize.labelToTitle(label);
	if (label in this.map.giveUp) {
		return Localize('giveUp',label);
	}
	return Localize('_misc','GIVE_UP',title);
};

Localize.propToKey = function (prop) {
	return Localize('prop',prop);
};

Localize.color = function (color) {
	return Localize('color',color);
};

Localize.cardName = function (info) {
	return Localize.traditionalize(info['name']);
};

Localize.cardType = function (info) {
	return Localize('cardType',info.cardType);
};

Localize.effectTexts = function (info) {
	info = CardInfo[info.cid];
	// 额外
	var texts = concat(info['extraTexts'] || []);
	// 防御
	if (info.guardFlag) {
		texts.push(Localize('_misc','GUARD_DESCRIPTION'));
	}
	// 万花
	if (info.multiEner) {
		texts.push(Localize('_misc','MULTI_ENER_DESCRIPTION'));
	}
	// CROSS
	function toNames (cross) {
		return [].concat(cross).map(function (cid) {
			return Localize('_misc','CROSS_NAME_QUOTE_LEFT') +
			       Localize.cardName(CardInfo[cid]) +
			       Localize('_misc','CROSS_NAME_QUOTE_RIGHT');
		}).join(Localize('_misc','CROSS_OR'));
	}
	if (info.crossLeft && info.crossRight) {
		texts.push(Localize('_misc','CROSS_AND',toNames(info.crossLeft),toNames(info.crossRight)));
	} else if (info.crossLeft) {
		texts.push(Localize('_misc','CROSS_LEFT',toNames(info.crossLeft)));
	} else if (info.crossRight) {
		texts.push(Localize('_misc','CROSS_RIGHT',toNames(info.crossRight)));
	}
	// 魔法技艺
	['spellEffectTexts','artsEffectTexts'].forEach(function (prop) {
		if (!info[prop]) return;
		texts.push(info[prop][0]);
	},this);
	// 常出起
	['constEffectTexts','startUpEffectTexts','actionEffectTexts'].forEach(function (prop) {
		if (!info[prop]) return;
		texts = texts.concat(info[prop]);
	},this);
	return Localize.traditionalize(texts.join('\n')) || '-';
};

Localize.burstEffectTexts = function (info) {
	info = CardInfo[info.cid];
	if (!info['burstEffectTexts']) return '-';
	return Localize.traditionalize(info['burstEffectTexts'][0]);
};

Localize.guard = function (info) {
	return info.guardFlag? Localize('_misc','GUARD_TRUE') : Localize('_misc','GUARD_FALSE');
};

Localize.cost = function (info) {
	if (info.costOr) {
		return info.costOr.map(function (color) {
			return Localize('color',color);
		},this).join(' ' + Localize('common', 'OR') + ' ');
	}
	var props = ['costWhite','costBlack','costRed','costBlue','costGreen','costColorless'];
	// var colors = ['白','黑','红','蓝','绿','无'];
	var text = '';
	props.forEach(function (prop,idx) {
		if (info[prop]) {
			text += Localize('costColor',prop) + info[prop] + ' ';
		}
	});
	if (!text) text = Localize('costColor','costColorless') + '0';
	return text;
};

Localize.timmings = function (info) {
	info = CardInfo[info.cid];
	if (!info.timmings) return '-';
	return info.timmings.map(function (timming) {
		return Localize('timming',timming);
	}).join('\n') || '-';
};

Localize.limiting = function (info) {
	if (!info.limiting) return '';
	var cls = info.limiting.split('/').map(function (limiting) {
		if (!limiting) return true;
		return Localize('class',limiting);
	}).join('/');
	return Localize('_misc','LIMITING',cls);
};

Localize.classes = function (info) {
	if (!info.classes) return '-';
	var separator = Localize('_misc','CLASS_SEPARATOR');
	return info.classes.map(function (cls) {
		if (cls === '?') return '?';
		return Localize('class',cls);
	}).join(separator) || '-';
};

Localize.desc = function (desc) {
	var arr = desc.split('-');
	var pid = arr[0];
	var type = arr[1];
	var idx = arr[2];
	var info = CardInfo[pid];
	var feedback = info.pid + type + idx;
	if (!info) {
		debugger;
		return desc;
	}ƒ
	var map = {
		'const': info['constEffectTexts'],
		'spell': info['spellEffectTexts'],
		'arts': info['artsEffectTexts'],
		'burst': info['burstEffectTexts'],
		'startup': info['startUpEffectTexts'],
		'action': info['actionEffectTexts'],
		'attached': info['attachedEffectTexts']
	};
	if (!map[type] || !map[type][idx]) {
		debugger;
		return desc;
	}
	return Localize.traditionalize(map[type][idx]);
};

Localize.waitingMsg = function (/*operation*/) {
	return Localize('_misc','WAIT');
};

return Localize;
})();