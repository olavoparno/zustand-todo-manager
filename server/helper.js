
module.exports = function generateUuid() {
  return "00-0-4-1-000".replace(/[^-]/g, (s) =>
    (((Math.random() + ~~s) * 0x10000) >> +s).toString(16).padStart(4, "0")
  );
}
