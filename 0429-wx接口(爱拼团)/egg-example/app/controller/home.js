'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  index() {
    const { ctx } = this;
    ctx.body = 'eeeahhaha';
  }
  swiper_list() {
    const { ctx } = this;
    ctx.body = ctx.service.index.swiper_list();
  }
  catItems(){
    const { ctx } = this;
    ctx.body = ctx.service.index.catItems();
  }
  floorData(){
    const { ctx } = this;
    ctx.body = ctx.service.index.floorData();
  }
}

module.exports = HomeController;