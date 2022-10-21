var Obj = {
  step: 0,
  increase: function () {
    this.step = this.step + 1;
    return this;
  },

  decrease: function () {
    this.step = this.step - 1;
    return this;
  },

  reset: function () {
    this.step = 0;
    return this;
  },
  read: function () {
    this.step = this.step;
    return this;
  },
};
console.log(
  Obj.increase().increase().increase().decrease().reset().increase().read().step
);
