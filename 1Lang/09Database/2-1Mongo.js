◆MongoDB驱动 
mongodb,连接MongoDB的基础库 
安装&使用 
  PS: 操作默认返回Promise对象 
  $ npm i -S mongodb  // 安装 mongodb库 
  const { MongoClient } = require('mongodb')  // 引入数据库驱动,并得到到数据库客户端对象  
  MongoClient.connect(url, callback);         // 通过'MongoClient'连接数据库 
    Input: 
      url   str,Mongo数据库的地址 
        如: 'mongodb://localhost:27017/dbname' 
          localhost  主机:本机
          27017      端口:默认端口
          dbname     数据库的名称 
      function(err, dbObj) { }  // 回到函数 
        err     obj/null,错误对象 
        dbObj   obj,数据库对象 
    Output: 
  dbObj,数据库对象 
    dbObj.close()   关闭数据库 
    dbObj.collection(<ctName>)   ctObj,返回指定的集合对象 
  ctObj,集合对象   
    添加
    ctObj.insertOne(<dcObj>,callback)     // 添加一个文档 
    ctObj.insertMany(<dcList>,callback)   // 添加多个文档  
      Input: 
        dcList   多个文档组成的数组 
        function(err, result){ }
      Output:   
      Example: 
        ctObj.insertMany([
          { k1: 'a' ,k2: 'b' }
          ,{ k1: 'a' ,k3: 'b' }
          ,{ k2: 'a' ,k3: 'b' }
        ]
        ,function(err,result){
          console.log('insertMany-success',result);
        })
    ctObj.insert(<dcObj>,callback)        // 添加文档,已废弃  
      Example: 
        collection.insert({
          name:"myName"
          ,age:"myAge"
        }
        ,function(err,result){
          if(err){
            console.error(err);
          }
          else{
            console.log("insert result:",result);
          }
        })
    查询 
    ctObj.findOne(<condition?>,<fields?>).toArray(callback) // 查询符合条件的第一条文档 
    ctObj.find(<condition?>,<fields?>).toArray(callback)    // 查找符合条件的所有的文档 
      Input: 
        condition  obj,可选,查询的条件,默认: {},表示所有 
          {
            k1: <val>   // k1字段为val的所有文档 
            k2: {       // k1字段大于15的所有文档 
              $gt: 15 
            } 
            $or: [      // 以下条件满足一条的所有文档
              { 
                k1: <val> 
              }
              ,{ 
                k2: <val> 
              } 
              ,...
            ] 
          }
        fields     obj,可选,查询的字段,默认打印所有字段  
          格式: {
            k1: 0/1   // 0: 表示不显示该字段,1: 显示该字段   
            _id: 0    // _id字段是默认显示的,不需要则需明确指定为 0 
            ,..
          }
        function(err,docs){ }
          err   obj,错误对象 
          docs  arr,查询到的文档组成的数组 
      Output: 
      Example: 
        collection.find({
          k1: 'a'
        })
        .toArray(function(err, docs) {
          if(err){
            console.error(err);
          }
          else{
            console.log("find result:",result);
          }
        });
    更新
    ctObj.updateOne(<condition>,<handle>,callback)     // 更新符合条件的第一个文档 
      Input: 
        condition   更新的条件 
        handle      更新的操作 
        function(err,result){ }
      Output: 
      Example: 
        collection.updateOne({ 
          a : 2 
        }
        ,{ 
          $set: { 
            b : 1 
          } 
        }
        ,function(err, result) {
          if(err){
            console.error(err);
          }
          else{
            console.log("update result:",result);
          }
        } );
    ctObj.updateMany(<condition>,<handle>,callback)    // 更新符合条件的所有文档   
    ctObj.update()   // 已废弃 
    删除 
      通常不会直接进行物理删除,而是使用一个字段如'_deleted',默认设置为false,
      删除是设置为true,进行逻辑删除 
    ctObj.deleteOne(<condition>,callback)     // 删除符合条件的第一条文档 
      Input: 
        condition  
        function(err,result){ }
      Output: 
      Example: 
        ctObj.deleteOne({ 
          a : 3 
        }
        ,function(err, result) {
          if(err){
            console.error(err);
          }
          else{
            console.log("delete result:",result);
          }
        });
    ctObj.deleteMany(<condition>,callback)    // 删除查询到的所有文档 
  dcObj,文档对象 
  cursor,游标对象 
    Instance: 
      ctObj.find(<condition>)   // 返回cursor对象 
    .toArray(callback)        // 转换成数组并回调 
--------------------------------------------------------------------------------
Mongoose,对mongodb库的封装 
  $ npm i mongoose // 





















