function Offset(line, x, y) {
    line.x1 += x;
    line.y1 += y;
    line.x2 += x;
    line.y2 += y;
    return line;
}

export { Offset };
