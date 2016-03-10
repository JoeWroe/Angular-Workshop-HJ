counterApp.factory('ExampleFactory', function(){
  var UserFactory = function() {
    this.currentTime = Date();
  };

  UserFactory.prototype.storeTime = function() {
    this.currentTime = Date();
  };

  return UserFactory;
});


counterApp.service('ExampleService', function(){
  this.currentTime = Date();

  this.storeTime = function() {
    this.currentTime = Date();
  };
});


counterApp.factory('HarryFactory', function() {
  var SeperateFactories = function() {
    this.count = 0;
  };

  SeperateFactories.prototype.increase = function() {
    this.count ++;
  };

  SeperateFactories.prototype.decrease = function() {
    this.count --;
  };

  return SeperateFactories;
});

counterApp.service('HarryService', function() {
  this.count = 0;

  this.increase = function() {
    this.count ++;
  };

  this.decrease = function() {
    this.count --;
  };
});

counterApp.controller('ExampleCtrl', function(ExampleFactory, ExampleService){

  var self = this;

  self.exampleFactory = new ExampleFactory();
  self.exampleService = ExampleService;
});




counterApp.controller('CounterCtrl', function(HarryService){

  var self = this;

  self.exampleCount = HarryService;
});
