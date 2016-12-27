import React from 'react';
import { Item, Checkbox, Button } from 'semantic-ui-react';

class ToggleItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggled: props.defaultToggle,
        };
    }

    render() {
        return (
            <Item>
                <Item.Image as={() => <Button positive={this.props.defaultToggle}>On</Button>} />
                <Item.Content verticalAlign="middle">
                    <Item.Header>
                        {this.props.header}
                    </Item.Header>
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
    onChange: React.PropTypes.func,
    children: React.PropTypes.any,
    header: React.PropTypes.any,
};

export default ToggleItem;
