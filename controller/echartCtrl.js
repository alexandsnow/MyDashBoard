/**
 * Created by alex on 2017/1/2.
 */

myApp.controller("echartsCtrl", function ($scope) {

    $scope.init = function () {
        prettyPrint();
        var part1Dom = document.getElementById("echart-part1");
        var part1Echart=echarts.init(part1Dom);
        var option1 = {
            tooltip: {
                show: true
            },
            legend: {
                data: ['销量',"存量"]
            },
            xAxis: [
                {
                    type: 'category',
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    "name": "销量",
                    "type": "bar",
                    "data": [5, 20, 40, 10, 10, 20]
                },
                {
                    "name": "存量",
                    "type": "bar",
                    "data": [15, 120, 240, 210, 210, 220]
                }
            ]
        };
        part1Echart.setOption(option1);

        var part2Dom = document.getElementById('echart-part2');
        var part2Echart = echarts.init(part2Dom);
        var option2 = {
            title : {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['最高气温','最低气温']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'最低气温',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    markPoint : {
                        data : [
                            {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };
        part2Echart.setOption(option2);
    }

});