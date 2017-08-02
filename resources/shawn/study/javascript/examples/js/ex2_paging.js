/**
 * Created by shawn on 2017. 7. 27..
 */
(function (exports, doc) {

  function Pager(opts) {
    if (!(this instanceof Pager)) {
      return new Pager(opts);
    }
    this.opts = opts || {};
    this.ctx = opts.ctx || '';
    this.list = opts.list || [];
    this.size = opts.list.length || 0;
    this.diplayCnt = opts.cnt || 1;// 페이지당 보여줄 아이템 수
    this.curntIdx = opts.idx || 0; //현제 페이지
    this.nextBtn = doc.getElementById(opts.nextBtn) || '';
    this.prevBtn = doc.getElementById(opts.prevBtn) || '';
  }

  Pager.prototype.getIdxList = function () {
    var tmpList = [];
    var i = 0;
    for (i; i < this.size; i++) {
      tmpList.push(i);
    }
    return tmpList;
  };
  Pager.prototype.getNextIdx = function () {
    if (this.curntIdx < this.size-this.diplayCnt) {
      return this.curntIdx+=1;
    }
  };
  Pager.prototype.getPrevIdx = function () {
    if (this.curntIdx > 0) {
      return this.curntIdx-=1;
    }
  };
  Pager.prototype.getCurntIdx = function () {
    return this.curntIdx;
  };
  Pager.prototype.getCurntList = function () {
    return this.getIdxList().slice(this.curntIdx, this.curntIdx + this.diplayCnt);
  };
  Pager.prototype.getHiddenList = function () {
    var prefix = this.getIdxList().slice(0, this.curntIdx);
    var suffix = this.getIdxList().slice(this.curntIdx+ this.diplayCnt);
    return [].concat(prefix, suffix);
  };
  Pager.prototype.displayItemList = function () {
    var self = this;
    this.getCurntList().forEach(function (idx,el) {
      self.list[idx].style.display = 'block';
    });
    this.getHiddenList().forEach(function (idx, el) {
      self.list[idx].style.display = 'none';
    })
  };
  Pager.prototype.bindEvents = function () {
    var self = this;
    this.nextBtn.addEventListener('click', function () {
      self.getNextIdx();
      self.displayItemList();
    });
    this.prevBtn.addEventListener('click', function () {
      self.getPrevIdx();
      self.displayItemList();
    });
  };
  Pager.prototype.init = function () {
    this.displayItemList();
    this.bindEvents();
  };

  exports.Pager = Pager;
})(window, document);