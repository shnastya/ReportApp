//import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Input } from 'reactstrap';

interface Props { years: Set<number>, selectedYear: number, handleYearChange: (year: number) => void};

class YearSelect extends React.Component<Props, {}> {

  public handleYearChange = (e: any) => {
    this.props.handleYearChange(parseInt(e.target.value));
  }

  public render() {

    const years = Array.from(this.props.years.values());
    const selectedYear = this.props.selectedYear;
    const items = years.map(year => (<option value={year}>{year}</option>));

    return  (
      <div>
        <Input value={selectedYear} onChange={this.handleYearChange} type="select" bsSize="sm" className="w-25">
          {items}
        </Input>
      </div>
    );
  }
}

export default YearSelect;