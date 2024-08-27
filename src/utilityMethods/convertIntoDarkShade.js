function convertIntoDarkShade(hex, amount) {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  let num = parseInt(color, 16);

  let r = (num >> 16) - amount;
  let g = ((num >> 8) & 0x00ff) - amount;
  let b = (num & 0x0000ff) - amount;

  return `#${(
    0x1000000 +
    (r < 255 ? (r < 1 ? 0 : r) : 255) * 0x10000 +
    (g < 255 ? (g < 1 ? 0 : g) : 255) * 0x100 +
    (b < 255 ? (b < 1 ? 0 : b) : 255)
  )
    .toString(16)
    .slice(1)}`;
}

function hexToRgba(hex, opacity) {

  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export { convertIntoDarkShade, hexToRgba };
