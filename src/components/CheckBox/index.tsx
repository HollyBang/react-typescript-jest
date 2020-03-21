import * as React from 'react';

export interface CheckBoxProp {
  labelOn: string;
  labelOff: string;
}

class CheckBox extends React.Component<CheckBoxProp> {
  state = {
    isChecked: false,
  };

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    console.log('console.log(this.props);', this.props);
    return (
      <div>
        <input type="checkbox" checked={this.state.isChecked} onChange={this.onChange} />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </div>
    );
  }
}

export default CheckBox;
