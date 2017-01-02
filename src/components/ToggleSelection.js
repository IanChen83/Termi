import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import ToggleItem from './ToggleItem';

export default class ToggleSelection extends React.Component {
    constructor(props) {
        super(props);

        const { value, config } = props;

        this.state = {
            isToggled: config.default,
            selection: value || config.options[0].value,
        };

        this.onChange = this.onChange.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

    onChange(e, v) {
        const { format, title } = this.props.config;
        const value = format.replace(/%/, v.value);
        this.props.onChange(title, value);
        this.setState({ selection: v.value });
    }

    onToggle(isToggled) {
        let value;
        const { format, title } = this.props.config;
        if(isToggled) {
            value = format.replace(/%/, this.state.selection);
        } else {
            value = '';
        }
        this.props.onChange(title, value);
        this.setState({ isToggled });
    }

    render() {
        const { title, description, options } = this.props.config;
        return(
            <ToggleItem header={title} description={description} onToggle={this.onToggle}>
                <Dropdown
                  fluid
                  selection
                  options={options}
                  value={this.state.selection}
                  onChange={this.onChange}
                  disabled={!this.state.isToggled}
                />
            </ToggleItem>
        );
    }
}

ToggleSelection.propTypes = {
    config: React.PropTypes.shape({
        type: p => (p.type === 'selection' ? null : new Error(
            `${JSON.stringify(p)} should be "selection"`)),
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
        format: React.PropTypes.string.isRequired,
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string,
            value: React.PropTypes.string.isRequired,
        })),
    }).isRequired,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string,
};

ToggleSelection.defaultProps = {
    onChange: () => {},
    value: undefined,
};
