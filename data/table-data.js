// 表1 进口货物
const importGoodsData = {
	"years": [
		'1903', '1904', '1905', '1906', '1907', '1908', '1909',
		'1910', '1911', '1912', '1913', '1914',
		'1915', '1916', '1917', '1918', '1919', '1920',
		'1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928'
	],
	"categories": [
		'棉货绒货类',
		'五金紫铜类',
		'机器/铁路材料类',
		'煤油',
		'糖',
		'茶末',
		'其他杂货',
	],
	"data": [
		[0, 0, 21.7],
		[0, 1, 17.3],
		[0, 2, 14],
		[0, 3, 15],
		[0, 4, 19.8],
		[0, 5, 16.7],
		[0, 6, 16.5],
		[0, 7, 15.4],
		[0, 8, 12.8],
		[0, 9, 13.7],
		[0, 10, 18.9],
		[0, 11, 17.9],
		[0, 12, 19.4],
		[0, 13, 16.7],
		[0, 14, 17.6],
		[0, 15, 14.2],
		[0, 16, 20.5],
		[0, 17, 18.7],
		[0, 18, 17.7],
		[0, 19, 20.6],
		[0, 20, 16.5],
		[0, 21, 20.5],
		[0, 22, 18.4],
		[0, 23, 15.4],
		[0, 24, 8.5],
		[0, 25, 18.2],
		[1, 0, 2],
		[1, 1, 4.6],
		[1, 2, 17.1],
		[1, 3, 1.6],
		[1, 4, 5.3],
		[1, 5, 4.5],
		[1, 6, 2],
		[1, 7, 1.8],
		[1, 8, 1.5],
		[1, 9, 3.7],
		[1, 10, 6.2],
		[1, 11, 4.8],
		[1, 12, 2.3],
		[1, 13, 3.2],
		[1, 14, 2.5],
		[1, 15, 3.6],
		[1, 16, 6.4],
		[1, 17, 8.2],
		[1, 18, 8.2],
		[1, 19, 10.8],
		[1, 20, 7.3],
		[1, 21, 14.3],
		[1, 22, 5.3],
		[1, 23, 5],
		[1, 24, 1.7],
		[1, 25, 4.1],
		[2, 0, 2],
		[2, 1, 2.8],
		[2, 2, 3.8],
		[2, 3, 6],
		[2, 4, 1.8],
		[2, 5, 3.3],
		[2, 6, 1.2],
		[2, 7, 2.1],
		[2, 8, 0.8],
		[2, 9, 0.4],
		[2, 10, 0.6],
		[2, 11, 4],
		[2, 12, 1.4],
		[2, 13, 2.3],
		[2, 14, 0.9],
		[2, 15, 1.1],
		[2, 16, 2.3],
		[2, 17, 4.3],
		[2, 18, 7],
		[2, 19, 3.9],
		[2, 20, 2.4],
		[2, 21, 2.7],
		[2, 22, 1.9],
		[2, 23, 1.4],
		[2, 24, 0.3],
		[2, 25, 0.5],
		[3, 0, 2.8],
		[3, 1, 3.3],
		[3, 2, 3.2],
		[3, 3, 1.6],
		[3, 4, 3.3],
		[3, 5, 3.8],
		[3, 6, 3.3],
		[3, 7, 2.6],
		[3, 8, 5.1],
		[3, 9, 3.3],
		[3, 10, 3.2],
		[3, 11, 3.1],
		[3, 12, 3.5],
		[3, 13, 1.4],
		[3, 14, 0.5],
		[3, 15, 1.8],
		[3, 16, 3.5],
		[3, 17, 5.5],
		[3, 18, 4.9],
		[3, 19, 4.5],
		[3, 20, 5],
		[3, 21, 6.8],
		[3, 22, 6.7],
		[3, 23, 3.7],
		[3, 24, 2, 9],
		[3, 25, 5.1],
		[4, 0, 1.1],
		[4, 1, 1.3],
		[4, 2, 1.8],
		[4, 3, 2.9],
		[4, 4, 2.6],
		[4, 5, 1.9],
		[4, 6, 2.1],
		[4, 7, 2.2],
		[4, 8, 1.8],
		[4, 9, 2.4],
		[4, 10, 3.9],
		[4, 11, 4.1],
		[4, 12, 3],
		[4, 13, 3.8],
		[4, 14, 6.4],
		[4, 15, 8.8],
		[4, 16, 4],
		[4, 17, 5.8],
		[4, 18, 8.6],
		[4, 19, 7.5],
		[4, 20, 6.8],
		[4, 21, 9.9],
		[4, 22, 10.4],
		[4, 23, 8.5],
		[4, 24, 8],
		[4, 25, 12.5],
		[5, 0, 0],
		[5, 1, 0],
		[5, 2, 0],
		[5, 3, 1.2],
		[5, 4, 2.6],
		[5, 5, 2.6],
		[5, 6, 3],
		[5, 7, 2.8],
		[5, 8, 2.7],
		[5, 9, 3.2],
		[5, 10, 4.1],
		[5, 11, 3.7],
		[5, 12, 3.9],
		[5, 13, 6],
		[5, 14, 3.6],
		[5, 15, 0.2],
		[5, 16, 0.4],
		[5, 17, 0],
		[5, 18, 0],
		[5, 19, 0],
		[5, 20, 0],
		[5, 21, 0],
		[5, 22, 0.1],
		[5, 23, 2.2],
		[5, 24, 1.7],
		[5, 25, 3.6],
		[6, 0, 7.2],
		[6, 1, 7.9],
		[6, 2, 7.6],
		[6, 3, 8.6],
		[6, 4, 9.8],
		[6, 5, 8.6],
		[6, 6, 9.8],
		[6, 7, 9.6],
		[6, 8, 8],
		[6, 9, 11.2],
		[6, 10, 13.5],
		[6, 11, 11.4],
		[6, 12, 9.7],
		[6, 13, 15.7],
		[6, 14, 15.2],
		[6, 15, 13.4],
		[6, 16, 15],
		[6, 17, 14.8],
		[6, 18, 13.4],
		[6, 19, 13.8],
		[6, 20, 16.4],
		[6, 21, 22.1],
		[6, 22, 22.9],
		[6, 23, 28.3],
		[6, 24, 9.3],
		[6, 25, 21.7]
	],
};

// 表2-茶出口
const exportTeaData = {
	"years": ['1864', '1867', '1870', '1873', '1876', '1879', '1882', '1885', '1888', '1891', '1894'],
	"汉口茶叶输出": [7252293, 6357562, 9074762, 12620537, 13892112, 14075925, 10844510, 11398712, 9752254, 14437830, 12038502],
	"全国茶叶输出": [26244329, 34546088, 30765088, 39099139, 36647926, 33271739, 31332207, 32269040, 30293251, 31028584,
		30854575
	],
};

// 表3-净进口
const importNetData = {
	"煤及焦煤": [
		[1915, 4.1, 38.9, 4],
		[1916, 4.3, 38.9, 4],
		[1917, 5.3, 38.9, 4],
		[1918, 3.4, 38.9, 4],
		[1919, 3.1, 38.9, 4],
		[1920, 2.5, 38.9, 4],
		[1921, 2.2, 38.9, 4],
		[1922, 2, 38.9, 4],
		[1923, 1, 38.9, 4],
		[1924, 1.3, 38.9, 4],
		[1925, 3.2, 38.9, 4],
		[1926, 1.7, 38.9, 4],
		[1927, 1.7, 38.9, 4],
		[1928, 3.1, 38.9, 4]
	],
	"机器仿制货": [
		[1908, 1.4, 152.8, 16],
		[1909, 2.1, 152.8, 16],
		[1910, 1.2, 152.8],
		[1911, 0.8, 152.8],
		[1912, 1.5, 152.8],
		[1913, 2, 152.8],
		[1914, 1.8, 152.8],
		[1915, 2.1, 152.8],
		[1916, 3.6, 152.8],
		[1917, 8.7, 152.8],
		[1918, 5.1, 152.8],
		[1919, 9.7, 152.8],
		[1920, 6.9, 152.8],
		[1921, 5.6, 152.8],
		[1922, 9.5, 152.8],
		[1923, 15.3, 152.8],
		[1924, 18.3, 152.8],
		[1925, 11.5, 152.8],
		[1926, 11.5, 152.8],
		[1927, 12.6, 152.8],
		[1928, 21.6, 152.8, 16]
	],
	"绸缎": [
		[1903, 1.3, 18.9],
		[1904, 1.7, 18.9],
		[1905, 1, 18.9],
		[1906, 0.7, 18.9],
		[1907, 1.3, 18.9],
		[1908, 1.6, 18.9],
		[1909, 1, 18.9],
		[1910, 0.8, 18.9],
		[1911, 0.6, 18.9],
		[1912, 0.4, 18.9],
		[1913, 0.7, 18.9],
		[1914, 0.7, 18.9],
		[1915, 0.8, 18.9],
		[1916, 0.6, 18.9],
		[1917, 0.6, 18.9],
		[1918, 0.5, 18.9],
		[1919, 0.7, 18.9],
		[1920, 0.6, 18.9],
		[1921, 0.5, 18.9],
		[1922, 0.4, 18.9],
		[1923, 0.4, 18.9],
		[1924, 0.4, 18.9],
		[1925, 0.4, 18.9],
		[1926, 0.3, 18.9],
		[1927, 0.3, 18.9],
		[1928, 0.6, 18.9, 2]
	],
	"糖": [
		[1903, 1.3, 28.2],
		[1904, 1.5, 28.2],
		[1905, 1, 28.2],
		[1906, 0.8, 28.2],
		[1907, 1.6, 28.2],
		[1908, 1.4, 28.2],
		[1909, 0.9, 28.2],
		[1910, 1.2, 28.2],
		[1911, 1.6, 28.2],
		[1912, 1.8, 28.2],
		[1913, 0.9, 28.2],
		[1914, 0.5, 28.2],
		[1915, 0.8, 28.2],
		[1916, 0.9, 28.2],
		[1917, 0.9, 28.2],
		[1918, 1, 28.2],
		[1919, 0.4, 28.2],
		[1920, 0.9, 28.2],
		[1921, 1.9, 28.2],
		[1922, 1.8, 28.2],
		[1923, 1.5, 28.2],
		[1924, 1.3, 28.2],
		[1925, 1.1, 28.2],
		[1926, 0.4, 28.2],
		[1927, 0.4, 28.2],
		[1928, 0.4, 28.2, 3]
	],
};

// 表4-净出口
const exportNetData = {
	"categories": [
		'武昌机器织布局之制品', '豆', '豆饼', '棉花', '花生', '生皮', '矿铁及生铁',
		'铁制品', '药材', '豆油及子油', '苎麻', '桐油',
		'芝麻', '丝', '皮', '牛油柏油', '茶', '烟叶',
		'漆', '小麦'
	],
	"years": [
		'1903', '1905', '1907',
		'1909', '1911', '1913',
		'1915', '1917', '1919', '1921',
		'1923', '1925', '1927',
	],
	"data": [
		[0, 0, 0.8],
		[0, 1, 3.8],
		[0, 2, 0],
		[0, 3, 6.0],
		[0, 4, 0],
		[0, 5, 3.0],
		[0, 6, 0.1],
		[0, 7, 0],
		[0, 8, 0.7],
		[0, 9, 0],
		[0, 10, 0],
		[0, 11, 3.4],
		[0, 12, 1.8],
		[0, 13, 1.4],
		[0, 14, 1.2],
		[0, 15, 2.2],
		[0, 16, 10.3],
		[0, 17, 1.3],
		[0, 18, 0],
		[0, 19, 0.2],
		[1, 0, 2.0],
		[1, 1, 7.0],
		[1, 2, 0],
		[1, 3, 4.0],
		[1, 4, 0],
		[1, 5, 2.4],
		[1, 6, 1.2],
		[1, 7, 0],
		[1, 8, 1.0],
		[1, 9, 0],
		[1, 10, 0],
		[1, 11, 3.3],
		[1, 12, 3.1],
		[1, 13, 1.5],
		[1, 14, 2.0],
		[1, 15, 1.5],
		[1, 16, 9.7],
		[1, 17, 2.1],
		[1, 18, 0],
		[1, 19, 1.0],
		[2, 0, 0.5],
		[2, 1, 3.7],
		[2, 2, 2.1],
		[2, 3, 3.5],
		[2, 4, 0],
		[2, 5, 3.8],
		[2, 6, 1.3],
		[2, 7, 0],
		[2, 8, 1.1],
		[2, 9, 0],
		[2, 10, 1.8],
		[2, 11, 3.3],
		[2, 12, 3.8],
		[2, 13, 2.4],
		[2, 14, 2.4],
		[2, 15, 2.7],
		[2, 16, 13.1],
		[2, 17, 2.1],
		[2, 18, 0],
		[2, 19, 0.7],
		[3, 0, 0.3],
		[3, 1, 4.8],
		[3, 2, 2.9],
		[3, 3, 0.9],
		[3, 4, 0],
		[3, 5, 5.8],
		[3, 6, 1.2],
		[3, 7, 1.8],
		[3, 8, 1.5],
		[3, 9, 0.1],
		[3, 10, 3.6],
		[3, 11, 3.6],
		[3, 12, 10.5],
		[3, 13, 2.5],
		[3, 14, 2.6],
		[3, 15, 2.0],
		[3, 16, 13.3],
		[3, 17, 2.7],
		[3, 18, 1.1],
		[3, 19, 0.3],
		[4, 0, 0.5],
		[4, 1, 2.9],
		[4, 2, 2.4],
		[4, 3, 3.1],
		[4, 4, 0],
		[4, 5, 5.6],
		[4, 6, 1.9],
		[4, 7, 1.4],
		[4, 8, 1.3],
		[4, 9, 1.1],
		[4, 10, 5.8],
		[4, 11, 5.8],
		[4, 12, 9.6],
		[4, 13, 1.8],
		[4, 14, 1.6],
		[4, 15, 1.0],
		[4, 16, 13.4],
		[4, 17, 2.4],
		[4, 18, 0.8],
		[4, 19, 1.4],
		[5, 0, 0.4],
		[5, 1, 3.1],
		[5, 2, 4.2],
		[5, 3, 5.0],
		[5, 4, 0.5],
		[5, 5, 7.1],
		[5, 6, 2.1],
		[5, 7, 0.8],
		[5, 8, 1.4],
		[5, 9, 0.2],
		[5, 10, 5.9],
		[5, 11, 5.9],
		[5, 12, 8.1],
		[5, 13, 1.9],
		[5, 14, 2.1],
		[5, 15, 2.8],
		[5, 16, 13.6],
		[5, 17, 3.9],
		[5, 18, 0.9],
		[5, 19, 0.6],
		[6, 0, 0.4],
		[6, 1, 3.1],
		[6, 2, 3.6],
		[6, 3, 8.5],
		[6, 4, 3.7],
		[6, 5, 8.4],
		[6, 6, 3.0],
		[6, 7, 0.5],
		[6, 8, 1.6],
		[6, 9, 1.5],
		[6, 10, 5.8],
		[6, 11, 5.8],
		[6, 12, 7.1],
		[6, 13, 1.9],
		[6, 14, 1.6],
		[6, 15, 2.5],
		[6, 16, 23.8],
		[6, 17, 2.4],
		[6, 18, 0.9],
		[6, 19, 0.6],
		[7, 0, 0.3],
		[7, 1, 3.2],
		[7, 2, 2.0],
		[7, 3, 18.2],
		[7, 4, 0.5],
		[7, 5, 7.3],
		[7, 6, 4.2],
		[7, 7, 0],
		[7, 8, 1.8],
		[7, 9, 1.5],
		[7, 10, 0.5],
		[7, 11, 6.8],
		[7, 12, 1.6],
		[7, 13, 2.0],
		[7, 14, 1.9],
		[7, 15, 3.2],
		[7, 16, 11.3],
		[7, 17, 2.8],
		[7, 18, 0.7],
		[7, 19, 4.2],
		[8, 0, 2.3],
		[8, 1, 3.1],
		[8, 2, 2.7],
		[8, 3, 31.3],
		[8, 4, 1.0],
		[8, 5, 4.4],
		[8, 6, 4.5],
		[8, 7, 0.2],
		[8, 8, 1.4],
		[8, 9, 2.0],
		[8, 10, 2.1],
		[8, 11, 8.7],
		[8, 12, 9.5],
		[8, 13, 1.7],
		[8, 14, 3.2],
		[8, 15, 3.2],
		[8, 16, 6.0],
		[8, 17, 2.8],
		[8, 18, 0.7],
		[8, 19, 4.3],
		[9, 0, 5.0],
		[9, 1, 2.2],
		[9, 2, 2.3],
		[9, 3, 16.5],
		[9, 4, 0.1],
		[9, 5, 3.3],
		[9, 6, 3.6],
		[9, 7, 0.7],
		[9, 8, 2.3],
		[9, 9, 0.2],
		[9, 10, 2.0],
		[9, 11, 5.6],
		[9, 12, 3.0],
		[9, 13, 2.7],
		[9, 14, 2.7],
		[9, 15, 2.1],
		[9, 16, 0.6],
		[9, 17, 1.6],
		[9, 18, 0.8],
		[9, 19, 0.9],
		[10, 0, 9.9],
		[10, 1, 3.1],
		[10, 2, 1.9],
		[10, 3, 40.0],
		[10, 4, 0.9],
		[10, 5, 4.6],
		[10, 6, 5.4],
		[10, 7, 0.6],
		[10, 8, 2.2],
		[10, 9, 0.2],
		[10, 10, 2.6],
		[10, 11, 8.1],
		[10, 12, 6.3],
		[10, 13, 3.5],
		[10, 14, 1.8],
		[10, 15, 2.0],
		[10, 16, 5.2],
		[10, 17, 3.0],
		[10, 18, 1.0],
		[10, 19, 0.1],
		[11, 0, 13.2],
		[11, 1, 1.8],
		[11, 2, 1.5],
		[11, 3, 42.6],
		[11, 4, 2.1],
		[11, 5, 3.2],
		[11, 6, 3.1],
		[11, 7, 0],
		[11, 8, 2.5],
		[11, 9, 0.1],
		[11, 10, 2.9],
		[11, 11, 6.1],
		[11, 12, 1.2],
		[11, 13, 3.4],
		[11, 14, 2.9],
		[11, 15, 2.5],
		[11, 16, 9.1],
		[11, 17, 4.8],
		[11, 18, 1.0],
		[11, 19, 3.5],
		[12, 0, 11.2],
		[12, 1, 7.4],
		[12, 2, 0.4],
		[12, 3, 27.7],
		[12, 4, 0.1],
		[12, 5, 4.4],
		[12, 6, 0.8],
		[12, 7, 0.1],
		[12, 8, 1.4],
		[12, 9, 0.2],
		[12, 10, 3.4],
		[12, 11, 8.5],
		[12, 12, 3.0],
		[12, 13, 4.2],
		[12, 14, 2.8],
		[12, 15, 2.9],
		[12, 16, 11.9],
		[12, 17, 2.6],
		[12, 18, 1.4],
		[12, 19, 3.5],
	],
};
