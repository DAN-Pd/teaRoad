//汉口、恰克图标亮
const cityDotSize = 200;

const pulsingDotHanko = {
	width: cityDotSize,
	height: cityDotSize,
	data: new Uint8Array(cityDotSize * cityDotSize * 4),
	onAdd: function() {
		const canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		this.context = canvas.getContext('2d');
	},
	render: function() {
		const duration = 1000;
		const t = (performance.now() % duration) / duration;
		const radius = (cityDotSize / 2) * 0.3;
		const outerRadius = (cityDotSize / 2) * 0.7 * t + radius;
		const context = this.context;
		context.clearRect(0, 0, this.width, this.height);
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			outerRadius,
			0,
			Math.PI * 2
		);
		context.fillStyle = `rgba(204, 213, 174, ${1 - t})`;
		context.fill();
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			radius,
			0,
			Math.PI * 2
		);
		context.fillStyle = '#3A98B9';
		context.strokeStyle = '#B9E9FC';
		context.lineWidth = 2 + 4 * (1 - t);
		context.fill();
		context.stroke();
		this.data = context.getImageData(
			0,
			0,
			this.width,
			this.height
		).data;
		map.triggerRepaint();

		return true;
	}
};
const pulsingDotQiaketu = {
	width: cityDotSize,
	height: cityDotSize,
	data: new Uint8Array(cityDotSize * cityDotSize * 4),
	onAdd: function() {
		const canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		this.context = canvas.getContext('2d');
	},
	render: function() {
		const duration = 1000;
		const t = (performance.now() % duration) / duration;
		const radius = (cityDotSize / 2) * 0.3;
		const outerRadius = (cityDotSize / 2) * 0.7 * t + radius;
		const context = this.context;
		context.clearRect(0, 0, this.width, this.height);
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			outerRadius,
			0,
			Math.PI * 2
		);
		context.fillStyle = `rgba(87, 125, 134, ${1 - t})`;
		context.fill();
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			radius,
			0,
			Math.PI * 2
		);
		context.fillStyle = '#7C96AB';
		context.strokeStyle = '#B7B7B7';
		context.lineWidth = 2 + 4 * (1 - t);
		context.fill();
		context.stroke();
		this.data = context.getImageData(
			0,
			0,
			this.width,
			this.height
		).data;
		map.triggerRepaint();
		return true;
	}
};
