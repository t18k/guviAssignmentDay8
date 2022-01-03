class Circle {
	constructor(radius, color = "red") {
		this.radius = radius;
		this.color = color;
	}
	getRadius() {
		return this.radius.toFixed(2);
	}
	setRadius(newRadius) {
		this.radius = newRadius;
	}
	getColor() {
		return this.color;
	}
	setColor(newColor) {
		this.color = newColor;
	}
	getArea() {
		return (Math.PI * this.radius * this.radius).toFixed(2);
	}
	getCircumference() {
		return (2 * Math.PI * this.radius).toFixed(2);
	}
	toString() {
		return [this.radius, this.color];
	}
}
