class Bezel {
  static get inputProperties() {
    return ['--bezel-color', '--bezel-width', '--bezel-radius', '--fill-type'];
  }

  static get inputArguments() {
    return ['*'];
  }

  static get contextOptions() {
    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  parseValue(value) {
    return value.toString().replace(' ', '').replace(/rem|px|%/g, '').split(' ');
  }

  paint(ctx, size, properties) {
    const { height, width } = size;
    const [fillType] = this.parseValue(properties.get('--fill-type'));
    const [
      topLeftRadius,
      topRightRadius,
      bottomRightRadius,
      bottomLeftRadius,
    ] = this.parseValue(properties.get('--bezel-radius'));
    const inset = properties.get('--bezel-width');

    ctx.lineWidth = properties.get('--bezel-width') * 2;
    ctx.strokeStyle = properties.get('--bezel-color');

    ctx.lineTo(topLeftRadius, inset);
    ctx.lineTo(width - topRightRadius, inset);
    ctx.lineTo(width - inset, topRightRadius);
    ctx.lineTo(width - inset, height - bottomRightRadius);
    ctx.lineTo(width - bottomRightRadius, height - inset);
    ctx.lineTo(bottomLeftRadius, height - inset);
    ctx.lineTo(inset, height - bottomLeftRadius);
    ctx.lineTo(inset, topLeftRadius);
    ctx.closePath();
    if (fillType === 'filled') {
      ctx.fillStyle = properties.get('--bezel-color');
      ctx.fill();
    }
    ctx.stroke();
  }
}

registerPaint('bezel', Bezel);
