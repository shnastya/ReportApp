//import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Input } from 'reactstrap';
import {DisplayMode} from './Report';

interface Props {selectedDisplayMode: DisplayMode, handleModeChange: (selectedDisplayMode: DisplayMode) => void};

class DisplayModeSelect extends React.Component<Props, {}> {

    public handleModeChange = (e: any) => {
        const displayMode : DisplayMode = parseInt(e.target.value);
        this.props.handleModeChange(displayMode);
      }

  public render() {

    return  (
      <div>
        <Input value={this.props.selectedDisplayMode} onChange={this.handleModeChange} type="select" bsSize="sm" className="w-25">
            <option value={DisplayMode.Goods}>Goods</option>
          <option value={DisplayMode.Categories}>Categories</option>
        </Input>
      </div>
    );
  }
}

export default DisplayModeSelect;