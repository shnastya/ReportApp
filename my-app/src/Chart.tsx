import * as React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import products, { DataRow } from './data';
import { DisplayMode } from './Report';

export interface ChartProps { /* data: DataRow[],  */selectedYear: number, selectedDisplayMode: DisplayMode}

class Chart extends React.Component<ChartProps, {}>{
  
  constructor(props : ChartProps) {
    super(props);
  }

    public render() {

      let productsYear = products.filter(dataRow => dataRow.year === this.props.selectedYear);
      let series: any = [];
      let tooltip = {
        headerFormat: '<b>{series.name}</b><br>'
      }

      if(this.props.selectedDisplayMode === DisplayMode.Goods){

        series = productsYear.map(dataRow => {
          return {
          name: dataRow.name, 
          data: [[dataRow.feature1, dataRow.feature2]]};
        })

      }
      else if(this.props.selectedDisplayMode === DisplayMode.Categories){
        series = [
          {
            name: "feature1 > 150",
            data: []
          },
          {
            name: "feature1 < 100",
            data: []
          },
          {
            name: "100 <= feature1 <= 150",
            data: []
          }
        ];

        productsYear.forEach(dataRow => { 
          if (dataRow.feature1 > 150) {
            series[0].data.push({name: dataRow.name, x: dataRow.feature1, y: dataRow.feature2})
          }
          else if (dataRow.feature1 < 100) {
            series[1].data.push({name: dataRow.name, x: dataRow.feature1, y: dataRow.feature2})
          }
          else if (dataRow.feature1 >= 100 && dataRow.feature1 <= 150) {
            series[2].data.push({name: dataRow.name, x: dataRow.feature1, y: dataRow.feature2})
          }
        });
      }


       const options: Highcharts.Options = {
        chart: {
          type: 'scatter',
          zoomType: 'xy'
        },
        title: {
          text: 'Goods'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          title: {
            text: 'Feature 1'
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true
        },
        yAxis: {
          title: {
            text: 'Feature 2'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: 0,
          y: 100,
          borderWidth: 1
        },
        series
      }; 
  
      return  (
        <HighchartsReact options={options}/>
      );
    }
  }
  
    export default Chart;
