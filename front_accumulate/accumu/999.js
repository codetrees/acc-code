(2017-05-22 08:36:58) : (22873 79)
fileNum : 21
-------------------------------------------------------------------------------







---------------------------------------------------------------------------todo
  路径控制 
    'www.aoo.com?ctt=xx&tab=xx'
    var s = location.search.slice(1);
    var s1 = s.split('&');
    var obj = {};
    s1.forEach(function(val,indx,arr){
      var arr = val.split('=');
      obj[arr[0]] = arr[1];
    });
    console.log(obj);














