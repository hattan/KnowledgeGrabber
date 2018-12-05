var KnowledgeGrabber =  (function () {
  var me;
  var serviceUrl = ""

  function KnowledgeGrabber(options) {
    this.options= options || {};
    this.options.url= this.options.url || serviceUrl;
    me = this;
  }
  KnowledgeGrabber.prototype.getData = function (url) {
    var DONE = 4;
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === DONE) {
          resolve(this.responseText);
        }
      });
      
      xhr.open("GET", url,true);
      xhr.setRequestHeader("Accept", "*/*");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.send();
    });
  };

    KnowledgeGrabber.prototype.getAnswer = function (question){
      return new Promise(function(resolve, reject) {
        var request = me.getData(me.options.url + "?question=" + question);
        request.then(function(json){
          resolve(JSON.parse(json).body);
        })
      });
    }

  return KnowledgeGrabber;
}());








