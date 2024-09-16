var GobalActiveChapterName = 'cover';
var GobalActiveChapterLayer = 'cover';
var hoveredStateId = null;
const layersIdx = {
	"cultureIdx": {
		"layers": ["神奇茶路之旅", "赤路红盟之旅", "世界自然遗产之旅", "高山流水之旅", "商帮贾风之旅", "穿行欧亚之旅", "蒙古高原之旅", ],
		"legend": ["cultureLegend"],
		"others": [],
	},
	"heritageIdx": {
		"layers": ["遗产点数量可视化", "遗产点数量统计", "遗产点", "各省份遗产点数量", ],
		"legend": ["heritageLegend"],
		"others": [],
	},
	"economicCorridorIdx": {
		"layers": ["欧亚经济联盟", "蒙古草原之路", "中国一带一路", ],
		"legend": ["economicCorridorLegend"],
		"others": [],
	},
	"teaSeaTransIdx": {
		"layers": ["teaSeaCircles", "teaSeaLabels", ],
		"legend": ["teaSeaLegend"],
		"others": [],
	},
	"ethnicIdx": {
		"layers": ["苗族", "回族", "彝族", "壮族", "布依族", "土家族", "畲族", "蒙古族", "藏族", "维吾尔族", "满族", "侗族", "瑶族", "白族", "哈尼族", "傣族",
			"黎族",
			"仡佬族", "朝鲜族", "达斡尔族", "鄂温克族",
		],
		"legend": ["ethnicLegend"],
		"others": [],
	},
	"cityDotIdx": {
		"layers": ["汉口", "恰克图", ],
		"legend": [],
		"others": [],
	},
	"iexportIdx":{
		"layers": ["iExportCircles","iExportLabels"],
		"legend": ["iExportLegend"],
		"others": [],
	}
};

var chapterLayers = {
	"cover": [],
	"以茶为媒": [],
	"各美其美": [],
	"历史之美": ["cityDotIdx", "teaSeaTransIdx"],
	"文化之美": ["heritageIdx"],
	"精神之美": [],
	"交流之美": ["ethnicIdx"],
	"融合之美": [],
	"美人之美": [],
	"互鉴": [],
	"对话": [],
	"美美与共": [],
	"共商": [],
	"文旅线路": ["cultureIdx"],
	"共建": ["economicCorridorIdx"],
	"共享": ["iexportIdx"],
	"结语": [],
}

const chapters = {
	'cover': {
		center: [97.63270605277084, 36.50044058473409],
		zoom: 2,
	},
	'生产路段': {
		center: [114.278403, 30],
		zoom: 6.2,
	},
	'集散路段': {
		duration: 6000,
		center: [111, 40],
		zoom: 4.4,
	},
	'出口外销': {
		center: [70, 55],
		zoom: 3.5,
		speed: 0.6,
	},
	'历史之美': {
		duration: 6000,
		center: [111, 40],
		zoom: 2.5,
	},
	'文化遗产': {
		center: [100.63270605277084, 36.50044058473409],
		zoom: 3,
		speed: 0.6,
	},
	'下梅村': {
		center: [118.052705, 27.673563],
		zoom: 10,
		speed: 0.6,
	},
	'安化县': {
		center: [111.366947, 28.238059],
		zoom: 10,
		speed: 0.6,
	},
	'大石桥': {
		center: [113.029722, 33.019397],
		zoom: 10,
		speed: 0.6,
	},
	'精神之美': {
		center: [97.63270605277084, 36.50044058473409],
		zoom: 2.7,
		speed: 0.6,
	},
	'融合之美': {
		center: [97.63270605277084, 36.50044058473409],
		zoom: 2,
		speed: 0.6,
	},
	'美美与共': {
		center: [97.63270605277084, 36.50044058473409],
		zoom: 2,
		speed: 0.6,
	},
	'文旅线路': {
		center: [97.63270605277084, 36.50044058473409],
		zoom: 2.5,
		speed: 0.6,
	},
	'共建': {
		center: [97.63270605277084, 36.50044058473409],
		zoom: 2,
		speed: 0.6,
	},
	'共享':{
		center: [115.733055,40.738876],
		zoom: 3.5,
		speed: 0.4,
	}
};

// 导入地图
mapboxgl.accessToken = 'pk.eyJ1IjoicGVuZ2QiLCJhIjoiY2wycjV0bTM3MzF6OTNrcWg0bzV6dnN3MyJ9.qDzbgs3BhiCmjQEpA_LwOw';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pengd/clfg9q6tq00nx01moc72r1o88',
	center: [97.63270605277084, 36.50044058473409],
	zoom: 2,
});
// 添加放大缩小控件
map.addControl(new mapboxgl.NavigationControl());
// 添加全屏显示按钮
map.addControl(new mapboxgl.FullscreenControl());

map.on('load', () => {
	map.flyTo(chapters[GobalActiveChapterName]);
	addHeritageFillLayer();
	addEconomicCorridorLayer();
	addHeritagePointLayer();
	addCultureLayer();
	addTeaSeaTransLayer();
	addIExportLayer();
	addEthnicLayer();
	addCityDotLayer();
	addChinaLayer();
	setAllLayersOff();
});

map.on('idle', () => {

});
map.on('style.load', () => {
	map.setFog({}); // Set the default atmosphere style
});

// 添加弹出窗口
map.on('click', (event) => {
	tpointClickCallback(event);
	heritagePointClickCallback(event);
});

map.on('mouseenter', 'clusters', () => {
	map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'clusters', () => {
	map.getCanvas().style.cursor = '';
});

window.onload = function() {
	// createCultureToggleButton();
	// createHeritageToggleButton();
	// createEconomicCorridorToggleButton();
	addImportGoodsTable();
	addExportTeaTable();
	addImportNetTable();
	addExportNetTable();
	//globalRotation();
	window.onscroll = function(e) {
		scrollCallback();
	};
};

function scrollCallback() {
	var chapterName = null;
	for (var tmpChapterName in chapters) {
		if (isElementOnScreen(tmpChapterName)) {
			chapterName = tmpChapterName;
		}
	};
	setActiveChapter(chapterName);
	// 设置数据显示
	var chapterLayer = null;
	for (var tmpChapterLayer in chapterLayers) {
		if (isElementOnScreen(tmpChapterLayer)) {
			chapterLayer = tmpChapterLayer;
		}
	};
	setActiveLayer(chapterLayer);
}

function isElementOnScreen(id) {
	const element = document.getElementById(id);
	const bounds = element.getBoundingClientRect();
	return bounds.top < window.innerHeight / 2.0 && bounds.bottom > 0;
}

function setActiveChapter(chapterName) {
	if (chapterName === GobalActiveChapterName) return;
	if (chapterName != null) {
		try {
			map.flyTo(chapters[chapterName]);
			document.getElementById(chapterName).classList.add('section-active');
			document.getElementById(GobalActiveChapterName).classList.remove('section-active');
		} catch (e) {}
		GobalActiveChapterName = chapterName;
	}
}

function setActiveLayer(chapterLayer) {
	if (chapterLayer === GobalActiveChapterLayer) return;
	if (chapterLayer != null) {
		setAllLayersOff();
		setLayersOn(chapterLayer);
		GobalActiveChapterLayer = chapterLayer;
	}
}

function setLayerVisibility(classId, vtype) {
	// visible  none
	var layers = layersIdx[classId]["layers"];
	var legends = layersIdx[classId]["legend"];
	var others = layersIdx[classId]["others"];
	for (var i = 0; i < layers.length; i++) {
		try {
			if (vtype == "on") {
				map.setLayoutProperty(layers[i], 'visibility', "visible");
			} else {
				map.setLayoutProperty(layers[i], 'visibility', "none");
			}
		} catch (e) {}
	};
	for (var i = 0; i < legends.length; i++) {
		try {
			if (vtype == "on") {
				document.getElementById(legends[i]).style.display = "block";
			} else {
				document.getElementById(legends[i]).style.display = "none";
			}
		} catch (e) {}
	};
	for (var i = 0; i < others.length; i++) {
		try {
			if (vtype == "on") {
				document.getElementById(others[i]).style.display = "block";
			} else {
				document.getElementById(others[i]).style.display = "none";
			}
		} catch (e) {}
	};
	
	if (classId=="cultureIdx" ||classId=="economicCorridorIdx"){
		for (var i = 0; i < layers.length; i++) {
			try {
				if (vtype == "on") {
					document.getElementById(layers[i]+"_input").checked=true;
				} else {
					document.getElementById(layers[i]+"_input").checked=false;
				}
			} catch (e) {}
		};
	}
}

function setLayersOn(chapterLayer) {
	var classIdxArray = chapterLayers[chapterLayer];
	for (var i = 0; i < classIdxArray.length; i++) {
		setLayerVisibility(classIdxArray[i], "on");
	}
}

function setAllLayersOff() {
	for (var classId in layersIdx) {
		setLayerVisibility(classId, "off");
	}
}

function tpointClickCallback(event) {
	var features = map.queryRenderedFeatures(event.point, {
		layers: ['tpoint']
	});
	if (!features.length) {
		return;
	}
	var feature = features[0];
	var popup = new mapboxgl.Popup({
			offset: [0, -15]
		})
		.setLngLat(feature.geometry.coordinates)
		.setHTML(
			`<h3>${feature.properties.name}</h3><p>${feature.properties.description}</p>`
		)
		.addTo(map);
}

function heritagePointClickCallback(event) {
	var features = map.queryRenderedFeatures(event.point, {
		layers: ['遗产点']
	});
	if (!features.length) {
		return;
	}
	var feature = features[0];
	var popup = new mapboxgl.Popup({
			offset: [0, -15]
		})
		.setLngLat(feature.geometry.coordinates)
		.setHTML(
			`<h4>${feature.properties.name}</h4><h5>遗产类型：${feature.properties.attribute}</h5>`
		)
		.addTo(map);
}

function addCultureLayer() {
	map.addSource('茶路', {
		'type': 'geojson',
		'data': cultureData["神奇茶路之旅"],
	});
	map.addLayer({
		'id': '神奇茶路之旅',
		'type': 'line',
		'source': '茶路',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'line-width': 2,
			'line-color': ['get', 'color']
		}
	})
	map.addSource('赤路', {
		'type': 'geojson',
		'data': cultureData["赤路红盟之旅"],
	});
	map.addLayer({
		'id': '赤路红盟之旅',
		'type': 'line',
		'source': '赤路',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'line-width': 2,
			'line-color': ['get', 'color']
		}
	})
	map.addSource('世界', {
		'type': 'geojson',
		'data': cultureData["世界自然遗产之旅"],
	});
	map.addLayer({
		'id': '世界自然遗产之旅',
		'type': 'line',
		'source': '世界',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'line-width': 2,
			'line-color': ['get', 'color']
		}
	})
	map.addSource('高山', {
		'type': 'geojson',
		'data': cultureData["高山流水之旅"],
	});
	map.addLayer({
		'id': '高山流水之旅',
		'type': 'line',
		'source': '高山',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'line-width': 2,
			'line-color': ['get', 'color']
		}
	})
	map.addSource('商帮', {
		'type': 'geojson',
		'data': cultureData["商帮贾风之旅"],
	});
	map.addLayer({
		'id': '商帮贾风之旅',
		'type': 'line',
		'source': '商帮',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'line-width': 2,
			'line-color': ['get', 'color']
		}
	})
	map.addSource('欧亚', {
		'type': 'geojson',
		'data': cultureData["穿行欧亚之旅"],
	});
	map.addLayer({
		'id': '穿行欧亚之旅',
		'type': 'line',
		'source': '欧亚',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'line-width': 2,
			'line-color': ['get', 'color']
		}
	})
	map.addSource('蒙古', {
		'type': 'geojson',
		'data': cultureData["蒙古高原之旅"],
	});
	map.addLayer({
		'id': '蒙古高原之旅',
		'type': 'line',
		'source': '蒙古',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'line-width': 2,
			'line-color': ['get', 'color']
		}
	})
	return;
}

function createCultureToggleButton() {
	const toggleableLayerIds = ['神奇茶路之旅', '赤路红盟之旅', '世界自然遗产之旅', '高山流水之旅', '商帮贾风之旅', '穿行欧亚之旅', '蒙古高原之旅'];

	for (const id of toggleableLayerIds) {
		if (document.getElementById(id)) {
			continue;
		}
		const link = document.createElement('a');
		link.id = id;
		link.href = '#';
		link.textContent = id;
		link.className = 'active';

		link.onclick = function(e) {
			const clickedLayer = this.textContent;
			e.preventDefault();
			e.stopPropagation();
			const visibility = map.getLayoutProperty(
				clickedLayer,
				'visibility'
			);

			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				this.className = 'active';
			} else {
				this.className = '';
				map.setLayoutProperty(
					clickedLayer,
					'visibility',
					'visible'
				);
			}
		};

		const layers = document.getElementById('cultureMenu');
		layers.appendChild(link);
	}
	return;
}

function addHeritagePointLayer() {
	map.addSource('chayuan', {
		type: 'geojson',
		'data': HeritagePointData,
		cluster: true,
		clusterMaxZoom: 20,
		clusterRadius: 40
	});

	map.addLayer({
		id: '遗产点数量可视化',
		type: 'circle',
		source: 'chayuan',
		filter: ['has', 'point_count'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': [
				'step',
				['get', 'point_count'],
				'#7686AB',
				10,
				'#B3CCB7',
				20,
				'#FCCEB7'
			],
			'circle-radius': [
				'step',
				['get', 'point_count'],
				20,
				10,
				30,
				20,
				40
			]
		}
	});

	map.addLayer({
		id: '遗产点数量统计',
		type: 'symbol',
		source: 'chayuan',
		filter: ['has', 'point_count'],
		layout: {
			'text-field': ['get', 'point_count_abbreviated'],
			'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
			'text-size': 16,
			'visibility': "none"
		}
	});

	map.addLayer({
		id: '遗产点',
		type: 'circle',
		source: 'chayuan',
		filter: ['!', ['has', 'point_count']],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#2FBB91',
			'circle-radius': 10,
			'circle-stroke-width': 2,
			'circle-stroke-color': '#fff'
		}
	});
	return;
}

function addHeritageFillLayer() {
	map.addSource('province-data', {
		type: 'geojson',
		data: 'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full'
	});

	map.addLayer({
		id: '各省份遗产点数量',
		type: 'fill',
		source: 'province-data',
		paint: {
			'fill-color': [
				'match',
				['get', 'name'],
				'福建省',
				'#F5EBEB',

				'江西省',
				'#AC7D88',

				'湖南省',
				'#85586F',

				'湖北省',
				'#DBA39A',

				'河南省',
				'#D5B4B4',

				'山西省',
				'#85586F',

				'河北省',
				'#F5EBEB',

				'内蒙古自治区',
				'#E4D0D0',

				/* other */
				'transparent'

			],
			'fill-opacity': [
				'case',
				['boolean', ['feature-state', 'hover'], false],
				1,
				0.5
			]
		},
		layout: {
			'visibility': 'none'
		},
	});
	map.on('mousemove', '各省份遗产点数量', (e) => {
		if (e.features.length > 0) {
			if (hoveredStateId !== null) {
				map.setFeatureState({
					source: 'province-data',
					id: hoveredStateId
				}, {
					hover: false
				});
			}

			hoveredStateId = e.features[0].properties.name;
			map.setFeatureState({
				source: 'province-data',
				id: hoveredStateId
			}, {
				hover: true
			});
		}
	});

	map.on('mouseleave', '各省份遗产点数量', () => {
		if (hoveredStateId !== null) {
			map.setFeatureState({
				source: 'province-data',
				id: hoveredStateId
			}, {
				hover: false
			});
		}
		hoveredStateId = null;
	});
	return;
}

function createHeritageToggleButton() {
	const addHeritagePointLayerLayerIds = ['遗产点数量可视化', '遗产点数量统计', '遗产点', '各省份遗产点数量'];
	for (const id of addHeritagePointLayerLayerIds) {
		if (document.getElementById(id)) {
			continue;
		}
		const link = document.createElement('a');
		link.id = id;
		link.href = '#';
		link.textContent = id;
		link.className = 'active';
		link.onclick = function(e) {
			const clickedLayer = this.textContent;
			e.preventDefault();
			e.stopPropagation();
			const visibility = map.getLayoutProperty(
				clickedLayer,
				'visibility'
			);
			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				this.className = 'active';
			} else {
				this.className = '';
				map.setLayoutProperty(
					clickedLayer,
					'visibility',
					'visible'
				);
			}
		};
		const layers = document.getElementById('heritageMenu');
		layers.appendChild(link);
	}
	return;
}

function addCityDotLayer() {
	map.addImage('pulsing-dot-hanko', pulsingDotHanko, {
		pixelRatio: 2
	});
	map.addImage('pulsing-dot-qiaketu', pulsingDotQiaketu, {
		pixelRatio: 2
	});

	map.addSource('汉口', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [{
				'type': 'Feature',
				'geometry': {
					'type': 'Point',
					//汉口
					'coordinates': [114.278403, 30.578701] // icon position [lng, lat]
				}
			}]
		}
	});
	map.addLayer({
		'id': '汉口',
		'type': 'symbol',
		'source': '汉口',
		'layout': {
			'icon-image': 'pulsing-dot-hanko',
			'visibility': 'none'
		}
	});

	map.addSource('恰克图', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [{
				'type': 'Feature',
				'geometry': {
					'type': 'Point',
					//恰克图
					'coordinates': [106.214127, 50.222837] // icon position [lng, lat]
				}
			}]
		}
	});
	map.addLayer({
		'id': '恰克图',
		'type': 'symbol',
		'source': '恰克图',
		'layout': {
			'icon-image': 'pulsing-dot-qiaketu',
			'visibility': 'none'
		}
	});
	return;
}

function addEconomicCorridorLayer() {
	map.addSource('state-data', {
		type: 'geojson',
		data: EconomicCorridorData,
	});

	map.addLayer({
		id: '欧亚经济联盟',
		type: 'fill',
		source: 'state-data',
		paint: {
			'fill-color': '#FAAB78',
			'fill-opacity': 0.4
		},
		layout: {
			'visibility': 'none'
		},
		filter: ['in', 'name', '俄罗斯', '哈萨克斯坦', '白俄罗斯', '吉尔吉斯斯坦', '亚美尼亚']
	});

	map.addLayer({
		id: '蒙古草原之路',
		type: 'fill',
		source: 'state-data',
		paint: {
			'fill-color': '#7FB77E',
			'fill-opacity': 0.4
		},
		layout: {
			'visibility': 'none'
		},
		filter: ['in', 'name', '蒙古']
	});

	map.addLayer({
		id: '中国一带一路',
		type: 'fill',
		source: 'state-data',
		paint: {
			'fill-color': '#F9E2AF',
			'fill-opacity': 0.4
		},
		layout: {
			'visibility': 'none'
		},

		filter: ['in', 'name', '中国', '俄罗斯', '苏丹', '南非', '塞内加尔', '塞拉利昂', '科特迪瓦', '索马里', '古巴', '牙买加', '尼加拉瓜', '南苏丹',
			'几内亚', '加纳', '赞比亚', '莫桑比克',
			'加蓬', '纳米比亚', '毛里塔尼亚', '安哥拉', '吉布提', '埃塞俄比亚', '肯尼亚', '尼日利亚', '乍得', '刚果（布）', '津巴布韦', '阿尔及利亚', '坦桑尼亚', '布隆迪',
			'乌干达', '冈比亚', '多哥',
			'卢旺达', '摩洛哥', '马达加斯加', '突尼斯', '利比亚', '埃及', '赤道几内亚', '利比里亚', '莱索托', '科摩罗', '柬埔寨', '越南', '老挝', '文莱', '巴基斯坦',
			'捷克', '保加利亚', '斯洛伐克',
			'贝宁', '马里', '尼日尔', '刚果（金）', '博茨瓦纳', '中非', '几内亚比绍', '厄立特里亚', '布基纳法索', '圣多美和普林西比', '马拉维', '韩国', '蒙古', '新加坡',
			'东帝汶', '马来西亚', '缅甸',
			'斯里兰卡', '孟加拉', '尼泊尔', '马尔代夫', '阿联酋', '科威特', '土耳其', '卡塔尔', '阿曼', '黎巴嫩', '沙特阿拉伯', '巴林', '伊朗', '伊拉克', '阿富汗',
			'阿塞拜疆', '格鲁吉亚', '亚美尼亚',
			'哈萨克斯坦', '吉尔吉斯斯坦', '塔吉克斯坦', '乌兹别克斯坦', '泰国', '印度尼西亚', '菲律宾', '也门', '叙利亚', '巴勒斯坦', '土库曼斯坦', '塞浦路斯', '奥地利',
			'希腊', '波兰', '塞尔维亚',
			'阿尔巴尼亚', '克罗地亚', '波黑', '黑山', '爱沙尼亚', '立陶宛', '斯洛文尼亚', '匈牙利', '北马其顿', '罗马尼亚', '拉脱维亚', '乌克兰', '白俄罗斯', '摩尔多瓦',
			'马耳他', '葡萄牙', '意大利',
			'卢森堡', '新西兰', '巴布亚新几内亚', '萨摩亚', '纽埃', '库克群岛', '汤加', '瓦努阿图', '所罗门群岛', '基里巴斯', '智利', '圭亚那', '玻利维亚', '乌拉圭',
			'委内瑞拉', '苏里南', '厄瓜多尔',
			'秘鲁', '阿根廷', '哥斯达黎加', '巴拿马', '萨尔瓦多', '多米尼加', '特立尼达和多巴哥', '安提瓜和巴布达', '多米尼克', '格林纳达', '巴巴多斯', '喀麦隆'
			//,'密克罗尼西亚联邦','塞舌尔','佛得角', //这几个国家没有
		]
	});
}

function createEconomicCorridorToggleButton() {
	const toggleableLayerIds = ['欧亚经济联盟', '蒙古草原之路', '中国一带一路'];
	for (const id of toggleableLayerIds) {
		if (document.getElementById(id)) {
			continue;
		}
		const link = document.createElement('a');
		link.id = id;
		link.href = '#';
		link.textContent = id;
		link.className = 'active';
		link.onclick = function(e) {
			const clickedLayer = this.textContent;
			e.preventDefault();
			e.stopPropagation();
			const visibility = map.getLayoutProperty(
				clickedLayer,
				'visibility'
			);
			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				this.className = 'active';
			} else {
				this.className = '';
				map.setLayoutProperty(
					clickedLayer,
					'visibility',
					'visible'
				);
			}
		};
		const layers = document.getElementById('economicCorridorMenu');
		layers.appendChild(link);
	}
}

function addChinaLayer() {
	map.addSource('China', {
		'type': 'geojson',
		'data': 'https://geo.datav.aliyun.com/areas_v3/bound/100000.json'
	});
	map.addLayer({
		'id': 'China',
		'type': 'line',
		'source': 'China',
		'layout': {},
		'paint': {
			'line-color': '#000',
			'line-width': 1
		}
	});
}

// 海外运茶路线
function filterBy(yearIdx) {
	const filters = ['==', 'year', teaSeaYears[yearIdx]];
	map.setFilter('teaSeaCircles', filters);
	map.setFilter('teaSeaLabels', filters);
	document.getElementById('teaSeaYearLabel').textContent = teaSeaYears[yearIdx];
}

function addTeaSeaTransLayer() {
	map.addSource('teaSeaTrans', {
		'type': 'geojson',
		'data': TeaSeaTransData,
	});

	map.addLayer({
		'id': 'teaSeaCircles',
		'type': 'circle',
		'source': 'teaSeaTrans',
		'paint': {
			'circle-color': [
				'match',
				['get', 'name'],
				'敖德萨海路', '#A9907E',
				'恰克图陆路', '#e17055',
				'俄属远东', '#786fa6',
				'#000000'
			],
			'circle-opacity': 0.75,
			'circle-radius': [
				'interpolate',
				['linear'],
				['get', 'number'],
				0,
				10,
				10000,
				20,
				100000,
				40,
				300000,
				60,
				400000,
				80,
			]
		}
	});

	map.addLayer({
		'id': 'teaSeaLabels',
		'type': 'symbol',
		'source': 'teaSeaTrans',
		'layout': {
			'text-field': ['concat', ['to-string', ['get', 'number']], '担'],
			'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
			'text-size': 16
		},
		'paint': {
			'text-color': 'rgba(0,0,0,0.5)'
		}
	});

	filterBy(0);

	document.getElementById('teaSeaSlider').addEventListener('input', (e) => {
		const year = parseInt(e.target.value, 10);
		filterBy(year);
	});
}

// 进出口额
function filterWith(yearsIdx) {
	const filterswith = ['==', 'year', IExportYears[yearsIdx]];
	map.setFilter('iExportCircles', filterswith);
    map.setFilter('iExportLabels', filterswith);
	document.getElementById('iExportYearLabel').textContent = IExportYears[yearsIdx];
}

function addIExportLayer() {
	map.addSource('iExport', {
		'type': 'geojson',
		'data': IExportData,
	});

	map.addLayer({
		'id': 'iExportCircles',
		'type': 'circle',
		'source': 'iExport',
		'paint': {
			'circle-color': [
				'match',
				['get', 'name'],
				'俄罗斯从中国进口', '#8fb5ea',
				'俄罗斯对中国出口', '#4f7cba',
				'蒙古从中国进口', '#eaabab',
				'蒙古对中国出口','#f47373',
				'#000000'
			],
			'circle-opacity': 0.75,
			'circle-radius': [
				'interpolate',
				['linear'],
				['get', 'number'],
				100000,
				10,
				200000,
				15,
				300000,
				20,
				400000,
				25,
				500000,
				30,
				3000000,
				40,
				4000000,
				50,
				5000000,
				60,
				6000000,
				70
			]
		}
	});

	map.addLayer({
		'id': 'iExportLabels',
		'type': 'symbol',
		'source': 'iExport',
		'layout': {
			'text-field': ['concat', ['to-string', ['get', 'number']], '万美元'],
			'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
			'text-size': 16
		},
		'paint': {
			'text-color': 'rgba(0,0,0,0.5)'
		}
	});

	filterWith(0);

	document.getElementById('iExportSlider').addEventListener('input', (event) => {
		const years = parseInt(event.target.value, 10);
		filterWith(years);
	});
}

//民族
function addEthnicLayer() {
	map.addSource('allEthnic', {
		type: 'geojson',
		'data': EthnicData,
	});
	map.addLayer({
		id: '苗族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河南苗族', '江西苗族', '福建苗族', '湖南苗族', '湖北苗族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#BFCCB5',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '回族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河南回族', '江西回族', '福建回族', '湖南回族', '内蒙古回族', '山西回族', '湖北回族', '河北回族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#B3CCB7',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '壮族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河南壮族', '江西壮族', '福建壮族', '湖南壮族', '湖北壮族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#7C96AB',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '彝族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河南彝族', '江西彝族', '福建彝族', '湖南彝族', '湖北彝族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#EDC6B1',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '布依族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '江西布依族', '福建布依族', '湖南布依族', '湖北布依族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#ABC4AA',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '土家族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '江西土家族', '福建土家族', '湖南土家族', '湖北土家族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#867070',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '蒙古族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河南蒙古族', '江西蒙古族', '福建蒙古族', '湖南蒙古族', '内蒙古蒙古族', '山西蒙古族', '湖北蒙古族',
			'河北蒙古族'
		],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#F5EBEB',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '藏族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '湖南藏族', '湖北藏族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#4E6E81',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '满族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河南满族', '江西满族', '福建满族', '湖南满族', '内蒙古满族', '山西满族', '湖北满族', '河北满族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#645CBB',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '维吾尔族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河南维吾尔族', '福建维吾尔族', '湖南维吾尔族', '湖北维吾尔族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#E98EAD',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '侗族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '江西侗族', '福建侗族', '湖南侗族', '湖北侗族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#FFF6BD',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '瑶族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '江西瑶族', '福建瑶族', '湖南瑶族', '湖北瑶族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#86C8BC',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '白族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '福建白族', '湖南白族', '湖北白族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#495579',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '哈尼族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '福建哈尼族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#344D67',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '傣族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '福建傣族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#8B7E74',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '黎族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '福建黎族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#863A6F',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '仡佬族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '福建仡佬族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#EFF5F5',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '朝鲜族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '河北朝鲜族', '内蒙古朝鲜族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#E97777',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '达斡尔族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '内蒙古达斡尔族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#F2DEBA',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '鄂温克族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '内蒙古鄂温克族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#88A47C',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
	map.addLayer({
		id: '畲族',
		type: 'circle',
		source: 'allEthnic',
		filter: ['in', 'name', '江西畲族', '福建畲族'],
		layout: {
			visibility: "none"
		},
		paint: {
			'circle-color': '#DE426B',
			'circle-radius': ['get', 'radius'],
			'circle-stroke-width': 1,
			'circle-stroke-color': '#fff'
		}
	});
}

//地球转动
function globalRotation() {


	// The following values can be changed to control rotation speed:

	// At low zooms, complete a revolution every two minutes.
	const secondsPerRevolution = 120;
	// Above zoom level 5, do not rotate.
	const maxSpinZoom = 5;
	// Rotate at intermediate speeds between zoom levels 3 and 5.
	const slowSpinZoom = 3;

	let userInteracting = false;
	let spinEnabled = true;

	function spinGlobe() {
		const zoom = map.getZoom();
		if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
			let distancePerSecond = 360 / secondsPerRevolution;
			if (zoom > slowSpinZoom) {
				// Slow spinning at higher zooms
				const zoomDif =
					(maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
				distancePerSecond *= zoomDif;
			}
			const center = map.getCenter();
			center.lng -= distancePerSecond;
			// Smoothly animate the map over one second.
			// When this animation is complete, it calls a 'moveend' event.
			map.easeTo({
				center,
				duration: 1000,
				easing: (n) => n
			});
		}
	}

	// Pause spinning on interaction
	map.on('mousedown', () => {
		userInteracting = true;
	});

	// Restart spinning the globe when interaction is complete
	map.on('mouseup', () => {
		userInteracting = false;
		spinGlobe();
	});

	// These events account for cases where the mouse has moved
	// off the map, so 'mouseup' will not be fired.
	map.on('dragend', () => {
		userInteracting = false;
		spinGlobe();
	});
	map.on('pitchend', () => {
		userInteracting = false;
		spinGlobe();
	});
	map.on('rotateend', () => {
		userInteracting = false;
		spinGlobe();
	});

	// When animation is complete, start spinning if there is no ongoing interaction
	map.on('moveend', () => {
		spinGlobe();
	});

	document.getElementById('spinbutton').addEventListener('click', (e) => {
		spinEnabled = !spinEnabled;
		if (spinEnabled) {
			spinGlobe();
			e.target.innerHTML = 'Pause';
		} else {
			map.stop(); // Immediately end ongoing animation
			e.target.innerHTML = 'Start';
		}
	});

	spinGlobe();
}

// 表格
function addImportGoodsTable() {
	var importGoodsTableDiv = document.getElementById('importGoodsTable');
	var importGoodsTableChart = echarts.init(importGoodsTableDiv, null, {
		renderer: 'canvas',
		useDirtyRect: false
	});
	const title = [];
	const singleAxis = [];
	const series = [];
	importGoodsData["categories"].forEach(function(good, idx) {
		title.push({
			textBaseline: 'middle',
			top: ((idx + 0.5) * 95) / 7 + '%',
			text: good,
			textStyle: {
				fontSize: "14px"
			},
		});
		singleAxis.push({
			left: 120,
			type: 'category',
			boundaryGap: false,
			data: importGoodsData["years"],
			top: (idx * 95) / 7 + 7 + '%',
			height: 95 / 7 - 10 + '%',
			axisLabel: {
				interval: 2
			}
		});
		series.push({
			singleAxisIndex: idx,
			coordinateSystem: 'singleAxis',
			type: 'scatter',
			data: [],
			symbolSize: function(dataItem) {
				return dataItem[1] * 2;
			}
		});
	});
	importGoodsData["data"].forEach(function(dataItem) {
		series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
	});
	var importGoodsTableOption = {
		tooltip: {
			position: 'top'
		},
		title: title,
		singleAxis: singleAxis,
		series: series
	};

	if (importGoodsTableOption && typeof importGoodsTableOption === 'object') {
		importGoodsTableChart.setOption(importGoodsTableOption);
	}

	window.addEventListener('resize', importGoodsTableChart.resize);
}

function addExportTeaTable() {
	var exportTeaTableDiv = document.getElementById('exportTeaTable');
	var exportTeaTableChart = echarts.init(exportTeaTableDiv, null, {
		renderer: 'canvas',
		useDirtyRect: false
	});
	var exportTeaTableOption = {
		color: ['#dd4444', '#00796B', '#be5683', '#80F1BE'],
		tooltip: {
			backgroundColor: 'rgba(255,255,255,0.7)',
			formatter: function(param) {
				var value = param.value;
				return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
					param.seriesName + ' ' + param.name + '年' + '</div>' +
					param.value + '两' + '<br>';
			}
		},
		angleAxis: {
			type: 'category',
			zlevel: 10,
			data: exportTeaData["years"],
			axisLabel: {
				formatter: function(v, idx) {
					return v + "年"
				},
			}
		},
		radiusAxis: {
			zlevel: 10,
			axisLabel: {
				formatter: function(v, idx) {
					return v / 10000000 + "千万"
				},
			}
		},
		polar: {
			zlevel: 10,
		},
		series: [{
				type: 'bar',
				data: exportTeaData["汉口茶叶输出"],
				coordinateSystem: 'polar',
				name: '汉口茶叶输出',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			},
			{
				type: 'bar',
				data: exportTeaData["全国茶叶输出"],
				coordinateSystem: 'polar',
				name: '全国茶叶输出',
				stack: 'a',
				emphasis: {
					focus: 'series'
				}
			}
		],
		legend: {
			show: true,
			data: ['汉口茶叶输出', '全国茶叶输出']
		}
	};

	if (exportTeaTableOption && typeof exportTeaTableOption === 'object') {
		exportTeaTableChart.setOption(exportTeaTableOption);
	}

	window.addEventListener('resize', exportTeaTableChart.resize);
}

function addImportNetTable() {
	var importNetTableDiv = document.getElementById('importNetTable');
	var importNetTableChart = echarts.init(importNetTableDiv, null, {
		renderer: 'canvas',
		useDirtyRect: false
	});

	const importNetTableChartStyle = {
		opacity: 0.8,
		shadowBlur: 10,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		shadowColor: 'rgba(0,0,0,0.3)'
	};

	var importNetTableOption = {
		title: {
			text: '汉口大宗土货进口净值',
			left: 'center'
		},
		color: ['#dd4444', '#00796B', '#be5683', '#80F1BE'],
		legend: {
			top: 30,
			data: ['煤及焦煤', '机器仿制货', '绸缎', '糖'],
			// textStyle: {
			// 	fontSize: 16
			// }
		},
		tooltip: {
			backgroundColor: 'rgba(255,255,255,0.7)',
			formatter: function(param) {
				var value = param.value;
				return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
					param.seriesName + ' ' + value[0] + '年' + '</div>' +
					'进口净值：' + value[1] + '百万海关两' + '<br>' +
					'25年进口总值：' + value[2] + '百万海关两' + '<br>'
			}
		},
		xAxis: {
			type: 'value',
			name: '年份',
			// nameGap: 16,
			// nameTextStyle: {
			// 	fontSize: 16
			// },
			min: 1903,
			max: 1928,
			splitLine: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			name: '进口净值',
			// nameLocation: 'end',
			// nameGap: 20,
			// nameTextStyle: {
			// 	fontSize: 16
			// },
			min: 0,
			max: 22,
			splitLine: {
				show: false
			}
		},
		series: [{
				name: '煤及焦煤',
				type: 'scatter',
				itemStyle: importNetTableChartStyle,
				symbolSize: 15,
				data: importNetData["煤及焦煤"],
			},
			{
				name: '机器仿制货',
				type: 'scatter',
				itemStyle: importNetTableChartStyle,
				symbolSize: 15,
				data: importNetData["机器仿制货"],
			},
			{
				name: '绸缎',
				type: 'scatter',
				itemStyle: importNetTableChartStyle,
				symbolSize: 15,
				data: importNetData["绸缎"],
			},
			{
				name: '糖',
				type: 'scatter',
				itemStyle: importNetTableChartStyle,
				symbolSize: 15,
				data: importNetData["糖"],
			},
		]
	};

	if (importNetTableOption && typeof importNetTableOption === 'object') {
		importNetTableChart.setOption(importNetTableOption);
	}

	window.addEventListener('resize', importNetTableChart.resize);
}

function addExportNetTable() {
	var exportNetTableDiv = document.getElementById('exportNetTable');
	var exportNetTableChart = echarts.init(exportNetTableDiv, null, {
		renderer: 'canvas',
		useDirtyRect: false
	});
	var exportNetTableOption = {
		color: ['#dd4444'],
		title: {
			bottom: -7,
			text: '汉口大宗土货出口净值',
			left: 'center'
		},
		legend: {
			data: ['土货出口净值（单位：百万海关两）'],
			left: 'right'
		},
		polar: {

		},
		tooltip: {
			formatter: function(params) {
				return (
					exportNetData["years"][params.value[0]] + '：' +
					'<br>' + exportNetData["categories"][params.value[1]] + '<br>' +
					params.value[2] +
					' 百万海关两 '
				);
			}
		},
		angleAxis: {
			type: 'category',
			data: exportNetData["categories"],
			boundaryGap: false,
			splitLine: {
				show: true
			},
			axisLine: {
				show: false
			},
		},
		radiusAxis: {
			type: 'category',
			data: exportNetData["years"],
			axisLine: {
				show: false
			},
			axisLabel: {
				rotate: 45
			},
			zlevel: 1,
		},
		series: [{
			name: '汉口大宗土货出口净值',
			type: 'scatter',
			coordinateSystem: 'polar',
			symbolSize: function(val) {
				return val[2] * 2
			},
			data: exportNetData["data"],
			animationDelay: function(idx) {
				return idx * 5;
			}
		}]
	};

	if (exportNetTableOption && typeof exportNetTableOption === 'object') {
		exportNetTableChart.setOption(exportNetTableOption);
	}

	window.addEventListener('resize', exportNetTableChart.resize);
}

function toggleButtonChange(thisID) {
	var changeLayerID=thisID;
	var inputID = changeLayerID + "_input";
	document.getElementById(inputID).checked = !document.getElementById(inputID).checked;
	var tf = document.getElementById(inputID).checked;
	if (tf) {
		map.setLayoutProperty(changeLayerID, 'visibility', 'visible');
	} else {
		map.setLayoutProperty(changeLayerID, 'visibility', 'none');
	}
}
