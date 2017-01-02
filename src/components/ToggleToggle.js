import React from 'react';
import ToggleItem from './ToggleItem';

export default class ToggleToggle extends React.Component {
    constructor(props) {
        super(props);

        const { value, config } = props;

        this.state = {
            isToggled: value || !!config.default,
        };

        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(isToggled) {
        const { positive, negative, title } = this.props.config;
        this.props.onToggle(title, isToggled ? (positive || '') : (negative || ''));
        this.setState({ isToggled });
    }

    render() {
        const { title, description } = this.props.config;
        return(
            <ToggleItem
              header={title}
              description={description}
              onToggle={this.onToggle}
              defaultToggle={this.state.isToggled}
            />
        );
    }
}

ToggleToggle.propTypes = {
    config: React.PropTypes.shape({
        type: p => (p.type === 'toggle' ? null : new Error(
            `${JSON.stringify(p)} should be "toggle"`)),
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
        positive: React.PropTypes.string,
        negative: React.PropTypes.string,
        default: React.PropTypes.bool,
    }).isRequired,
    onToggle: React.PropTypes.func,
    value: React.PropTypes.string,
};

ToggleToggle.defaultProps = {
    onToggle: () => {},
    value: undefined,
};
