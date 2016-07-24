angular.module('stockTracker')

.controller("StockController", ['$scope', function($scope){
  $scope.myJson = {
    type: "line",
    title: {
      textAlign:'left',
    },
    crosshairX : {
      lineColor : "#b6b6b6",
      trigger : "move",
      lineStyle : 'dashed',
      marker : {
        visible : true,
      size : 4
      },
      scaleLabel : {
        bold : true,
        backgroundColor : "#fff",
        fontColor : "#474747",
        fontSize : "16px",
        callout : false,
        paddingTop : 2,

      },
      plotLabel : {
        backgroundColor : "white",
        borderColor : "#bababa",
        borderRadius : "5px",
        bold : true,
        fontSize : "12px",
        fontColor : "#2f2f2f",
        textAlign : 'right',
        padding : '10px',
        shadow : true,
        shadowAlpha : 0.2,
        shadowBlur : 5,
        shadowDistance : 4,
        shadowColor : "#a1a1a1",

      }
    },
    plot : {
      tooltip : {
        visible : false
      },
      aspect : 'spline',
      marker : {
        backgroundColor : "white",
        borderWidth : "2px",
      },
      hoverMarker : {
        backgroundColor : 'none',
        size : 10
      }
    },
    scaleX : {
      lineColor : "#E3E8E9",
      fontColor : "#879CAB",
      guide :{
        visible : true,
        lineWidth : "1px",
        lineColor : "#E3E8E9",
        lineStyle : "solid"
      },
      tick : {
        visible : false
      },
      labels : ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun']
    },
    scaleY : {
      lineColor : "#E3E8E9",
      fontColor : "#879CAB",
      guide :{
        visible : true,
        lineWidth : "1px",
        lineColor : "#E3E8E9",
        lineStyle : "solid"
      },
       tick : {
        visible : false
      }
    },
    series : [
        {
            values : [3,2,4,5,4,1,0],
            text : "Total Commits",
            lineColor : "#00ACF2",
            marker : {
        borderColor : "#00ACF2"
      }
        },
        {
            values : [0,0,3,4,3,1,1],
            text : "Issues Solved",
      lineColor : "#86CA00",
      marker : {
        borderColor: "#86CA00"
      }
        },
        {
            values : [0,1,1,4,2,0,1],
            text : "Issues Submitted",
      lineColor : "#FF4B47",
      marker : {
        borderColor: "#FF4B47"
      }
        },
        {
            values : [0,1,2,2,1,0,1],
            text : "Number of Clones",
      lineColor : "#fea10a",
      marker : {
        borderColor: "#fea10a"
      }
        }
    ]
  };

}]);
