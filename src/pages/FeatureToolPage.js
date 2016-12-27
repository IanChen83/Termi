import React from 'react';
import { Step, Item } from 'semantic-ui-react';
import ToggleItem from '../components/ToggleItem';

const stepStyle = {
    borderRadius: 0,
    borderWidth: '0 0 1px 0',
    marginTop: 0,
};

class FeatureToolPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
        };

        this.step = [
            { title: 'Options', description: 'Select the essential data to display' },
            { title: 'Customizations', description: 'Write the customizations scripts' },
            { title: 'Exports', description: 'Export your settings' },
        ];
    }

    renderSteps() {
        return (
            <Step.Group style={stepStyle} fluid ordered>
                {this.step.map((v, i) =>
                    <Step
                      key={i}
                      active={i === this.state.step}
                      completed={i < this.state.step}
                      title={v.title}
                      description={v.description}
                    />)}
            </Step.Group>
        );
    }

    render() {
        return (
            <div>
                {this.renderSteps()}
                <Item.Group>
                <ToggleItem defaultToggle header="-a, --all">
                    do not ignore entries starting with .
                </ToggleItem>
                </Item.Group>
            </div>
        );
    }
}

export default FeatureToolPage;
