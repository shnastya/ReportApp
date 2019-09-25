import * as React from 'react';
import products, { DataRow } from './data';
import Chart from './Chart';
import YearSelect from './YearSelect';
import DisplayModeSelect from './DisplayModeSelect';

export enum DisplayMode { Goods = 1, Categories = 2 };
interface State  { years: Set<number>, selectedYear: number; selectedDisplayMode: DisplayMode}

class Report extends React.Component<{}, State> {

   constructor(props: any) {
    super(props);
    let yearsList = products.map(dataRow => { return  dataRow.year; })
    let unicYearList = new Set(yearsList);
    this.state = {
      selectedYear: Math.max(...Array.from(unicYearList.values())),
      selectedDisplayMode: DisplayMode.Goods,
      years: unicYearList
    };
  } 

  public handleYearChange = (selectedYear: number) => {
    this.setState({ selectedYear: selectedYear });
  }

  public handleModeChange = (selectedDisplayMode: DisplayMode) => {
    this.setState({
      selectedDisplayMode: selectedDisplayMode
    });
  }

    public render() {
      return  (
        <div>
        <Chart selectedYear={this.state.selectedYear} selectedDisplayMode={this.state.selectedDisplayMode}/>
        <YearSelect years={this.state.years} selectedYear={this.state.selectedYear} handleYearChange={this.handleYearChange}/>
        <DisplayModeSelect selectedDisplayMode = {this.state.selectedDisplayMode} handleModeChange = {this.handleModeChange}/>
        </div>
      );
    }
  }

export default Report;