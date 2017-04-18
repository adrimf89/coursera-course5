(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCtrl = this;

  buyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

  buyCtrl.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [{ name: "cookies", quantity: 10 },
                    { name: "chips", quantity: 6 },
                    { name: "apples", quantity: 15 },
                    { name: "oranges", quantity: 20 }];
  var boughtItems = [];

  service.buyItem = function (itemIdex) {
    var item = toBuyItems[itemIdex];
    boughtItems.push(item);
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
