import { createApolloFetch } from 'apollo-fetch'
import { html2canvas } from 'html2canvas'
import { create_chart } from './boxplot'

function load_boxplot_visualization() {
    var data = get_data()
    create_chart( data )
};

function get_data( url, id ) {
    return {
        "data": {
            "x": [ ],
            "y": [ ]
        }
    }
};

export {
    load_boxplot_visualization
}

load_boxplot_visualization()