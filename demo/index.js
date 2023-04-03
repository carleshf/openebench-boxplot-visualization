//var x = require('obe-box-plot')
//x.load_boxplot_visualization()

const get_data = () => {
    var data = [ {
            "type": "box",
            "name": "Tool 1",
            "x": [ "Challange 1", "Challange 2" ],
            //"offsetgroup": "1",
            "q1": [ -0.1, 1.0 ],
            "mean": [ 0.054390,   1.253935 ],
            "median": [ 0.011687, 1.307359 ],
            "q3": [ 0.5, 2 ],
            "lowerfence": [ -2.252763,    -1.503932 ],
            "upperfence": [ 2.519186, 3.931982 ]
        },
        {
            "type": "box",
            "name": "Tool 2",
            "x": [ "Challange 1", "Challange 3" ],
            //"offsetgroup": "1",
            "q1": [ -0.463282, 0.534536 ],
            "mean": [ 0.054390,   1.253935 ],
            "median": [ 0.011687, 1.307359 ],
            "q3": [ 0.729705, 1.893514 ],
            "lowerfence": [ -2.252763,    -1.503932 ],
            "upperfence": [ 2.519186, 3.931982 ]
        },
        {
            "type": "box",
            "name": "Tool 3",
            "x": [ "Challange 1", "Challange 2" ],
            //"offsetgroup": "1",
            "q1": [ -0.463282, 0.534536 ],
            "mean": [ 0.054390,   1.253935 ],
            "median": [ 0.011687, 1.307359 ],
            "q3": [ 0.729705, 1.893514 ],
            "lowerfence": [ -2.252763,    -1.503932 ],
            "upperfence": [ 2.519186, 3.931982 ]
        }
    ]
    return data
}

const load_boxplot_visualization = ( tag, data ) => {
    var layout = {
        title: 'Horizontal Box Plot' 
    }
    
  
    var layout = {
        yaxis: {
            title: 'Scientific visualization',
            zeroline: false
        },
        boxmode: 'group'
    }
    
    Plotly.newPlot( tag, data, layout )
}

load_boxplot_visualization( "graph", get_data() )