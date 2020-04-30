'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/swiper_list', controller.home.swiper_list);
  router.get('/catItems', controller.home.catItems);
  router.get('/floorData', controller.home.floorData);
};
