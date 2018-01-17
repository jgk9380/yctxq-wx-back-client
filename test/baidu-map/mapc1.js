/**
 * Created by jianggk on 2017/8/31.
 */

//创建地图
var map = new AMap.Map('container', {
  zoom: 9
});

AMapUI.loadUI(['misc/MarkerList'], function(MarkerList) {

  var markerList = new MarkerList({
    //关联的map对象
    map: map,

    //列表的dom容器的id
    listContainer: 'my-list',

    //返回数据项的Id
    getDataId: function(dataItem, index) {
      //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
      return dataItem.id;
    },
    //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
    getPosition: function(dataItem) {
      return dataItem.position;
    },
    // 这里不需要InfoWindow
    getInfoWindow: null,
    //返回数据项对应的Marker
    getMarker: function(dataItem, context, recycledMarker) {

      //marker的标注内容
      var content = dataItem.id + ': ' + dataItem.desc;

      var label = {
        offset: new AMap.Pixel(16, 18), //修改label相对于marker的位置
        content: content
      };

      //存在可回收利用的marker
      if (recycledMarker) {
        //直接更新内容返回
        recycledMarker.setLabel(label);
        return recycledMarker;
      }

      //返回一个新的Marker
      return new AMap.Marker({
        label: label
      });
    },
    //返回数据项对应的列表节点
    getListElement: function(dataItem, context, recycledListElement) {

      var tpl = '<p><%- dataItem.id %>：<%- dataItem.desc %><br/>';


      var content = MarkerList.utils.template(tpl, {
        dataItem: dataItem,
        dataIndex: context.index
      });

      if (recycledListElement) {
        //存在可回收利用的listElement, 直接更新内容返回
        recycledListElement.innerHTML = content;
        return recycledListElement;
      }

      //返回一段html，MarkerList将利用此html构建一个新的dom节点
      return '<li>' + content + '</li>';
    }

  });


  //监听marker在Map的添加和删除
  markerList.on('markerAddToMap markerRemoveFromMap', function(event, record) {

    var marker = record.marker,
      dataItem = record.data;


    if (!marker._circle) {
      //创建一个新的circle，附加在Marker上
      marker._circle = new AMap.Circle(dataItem.circle);

    } else {
      //circle已经存在（切换数据时，marker会被回收利用），更新
      marker._circle.setOptions(dataItem.circle);
    }

    switch (event.type) {
      case 'markerAddToMap':

        //更新map
        marker._circle.setMap(marker.getMap());

        //更新position
        marker._circle.setCenter(marker.getPosition());

        break;

      case 'markerRemoveFromMap':
        marker._circle.setMap(null);
        break;
    }
  });

  //构建一个数据项数组，数据项本身没有格式要求，但需要支持下述的getDataId和getPosition
  var data1 = [{
    id: 'A',
    position: [116.020764, 39.934989],
    circle: {
      radius: 5000,
      strokeColor: 'gray',
      fillColor: 'red',
      fillOpacity: 0.1
    },
    desc: '数据_1'
  }, {
    id: 'B',
    position: [116.405285, 39.994989],
    circle: {
      radius: 7000,
      strokeColor: 'gray',
      fillColor: 'blue',
      fillOpacity: 0.3
    },
    desc: '数据_2'
  }, {
    id: 'C',
    position: [116.789806, 39.804989],
    circle: {
      radius: 4000,
      strokeColor: 'gray',
      fillColor: 'green',
      fillOpacity: 0.8
    },
    desc: '数据_3'
  }];


  var data2 = [{
    id: 'D',
    position: [116.121763, 39.994989],
    circle: {
      radius: 5000,
      strokeColor: 'gray',
      fillColor: 'purple',
      fillOpacity: 0.8
    },
    desc: '数据_4'
  }, {
    id: 'E',
    position: [116.404286, 39.954989],
    circle: {
      radius: 7000,
      strokeColor: 'gray',
      fillColor: 'orange',
      fillOpacity: 0.5
    },
    desc: '数据_5'
  }, {
    id: 'F',
    position: [115.849816, 39.904989],
    circle: {
      radius: 4000,
      strokeColor: 'gray',
      fillColor: 'black',
      fillOpacity: 0.8
    },
    desc: '数据_6'
  }];


  var curData = null;

  function switchData() {

    if (!curData || curData === data2) {
      curData = data1;
    } else {
      curData = data2;
    }
    //展示该数据
    markerList.render(curData);
  }

  switchData();

  MarkerList.utils.$('#switchBtn').click(switchData);

});
