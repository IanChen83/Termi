import React from 'react';
import { Header, Segment, Input, Menu } from 'semantic-ui-react';
import { hashToQuery } from '../utils';
import FeatureManPage from './FeatureManPage';
import FeatureToolPage from './FeatureToolPage';
import FeaturePresetPage from './FeaturePresetPage';

export default class CommandPageContainer extends React.Component {
    constructor(props) {
        super(props);

        const query = hashToQuery(window.location.hash);

        this.state = {
            command: query.query.target || '',
            displayPage: 'preset',
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({ command: e.target.value, displayPage: 'preset' });
    }

    isSupportedCommand(command) {
        if(command === 'ls' || command === 'find') {
            return true;
        }

        return false;
    }

    renderMenu() {
        if(this.state.command === '') {
            return null;
        }

        if(!this.isSupportedCommand(this.state.command)) {
            return(
                <Header as="h3" style={{ margin: '15 auto' }}>
                    This command is currently not supported <span style={{ color: '#2185D0' }}>:(</span>
                </Header>
            );
        }

        const menuItems = [{
            name: 'preset',
            display: 'Preset',
        }, {
            name: 'tool',
            display: 'Tool',
        }, {
            name: 'manPage',
            display: 'Man Page',
        }];

        return(
            <Menu secondary pointing style={{ borderRadius: 0, marginBottom: 0 }} color="blue">
                {
                    menuItems.map((v, i) =>
                        <Menu.Item
                          name={v.name}
                          onClick={() => this.setState({ displayPage: v.name })}
                          key={i}
                          active={v.name === this.state.displayPage}
                        >{v.display}
                        </Menu.Item>)
                }
            </Menu>
        );
    }

    renderSubPage() {
        if(!(this.isSupportedCommand(this.state.command))) {
            return null;
        }

        if(this.state.displayPage === 'manPage') {
            return <FeatureManPage command={this.state.command} />;
        } else if(this.state.displayPage === 'tool') {
            return <FeatureToolPage command={this.state.command} />;
        } else if(this.state.displayPage === 'preset') {
            return <FeaturePresetPage />;
        }

        return null;
    }

    render() {
        return(
            <Segment style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Header as="h1" style={{ margin: '15 auto' }}>
                    {'Let\'s talk about '}
                    <Input transparent placeholder="the command" style={{ borderBottom: '1px solid black' }} onChange={this.onInputChange}>
                        <input style={{ textAlign: 'center' }} value={this.state.command} />
                    </Input>
                </Header>
                {this.renderMenu()}
                {this.renderSubPage()}
            </Segment>
        );
    }
}
