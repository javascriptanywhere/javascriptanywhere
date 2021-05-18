Array.prototype.moveItem = function (from, to) {
    // remove `from` item and store it
    var f = this.splice(from, 1)[0];
    // insert stored item into position `to`
    this.splice(to, 0, f);
}
