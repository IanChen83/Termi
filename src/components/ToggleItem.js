import React from 'react';
import { Item, Checkbox, Button } from 'semantic-ui-react';

class ToggleItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggled: props.defaultToggle,
        };

        this.handleOnToggle = this.handleOnToggle.bind(this);
    }

    handleOnToggle() {
        this.props.onToggle(!this.state.isToggled);
        this.setState({ isToggled: !this.state.isToggled });
    }

    render() {
        return(
            <Item style={{ marginLeft: 5 }}>
                <Item.Image
                  as={() => <Button
                              basic={!this.state.isToggled}
                              onClick={this.handleOnToggle}
                              positive={this.state.isToggled}
                            >
                                {this.state.isToggled ? 'On' : 'Off'}
                            </Button>}
                />
                <Item.Content verticalAlign="middle" style={{ padding: '15px 3px 10px 3px', textAlign: 'left' }}>
                    <Item.Header>
                        {this.props.header}
                    </Item.Header>
                    <Item.Meta>
                        {this.props.description}
                    </Item.Meta>
                    <Item.Description>
                        {this.props.children}
                    </Item.Description>
                </Item.Content>
            </Item>
        );
    }
}

ToggleItem.propTypes = {
    defaultToggle: React.PropTypes.bool,
    onToggle: React.PropTypes.func,
    children: React.PropTypes.node,
    header: React.PropTypes.node,
    description: React.PropTypes.node,
};

ToggleItem.defaultProps = {
    defaultToggle: false,
    onToggle: () => {},
    children: null,
    header: '',
    description: '',
};

export default ToggleItem;
