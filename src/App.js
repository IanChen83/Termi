import React from 'react';
import { Grid, Breadcrumb, Icon } from 'semantic-ui-react';

// All pages are imported here
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CommandPageContainer from './pages/CommandPageContainer';

import { goToPage, hashToQuery } from './utils';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...hashToQuery(window.location.hash) };
        this.reRoute = this.reRoute.bind(this);
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.reRoute);
    }

    reRoute() {
        console.log(hashToQuery(window.location.hash));
        this.setState({ ...hashToQuery(window.location.hash) });
    }

    renderRoute() {
        if(this.state.page === '/about') {
            return <AboutPage />;
        }

        if(this.state.page.startsWith('/command')) {
            return <CommandPageContainer />;
        }

        return <HomePage />;
    }

    renderBreadCrumb() {
        const isHome = this.state.page === '/' || this.state.page === '';
        const isCommand = ['/man', '/presets', '/tool', '/command'].some(x => this.state.page.startsWith(x));
        const isAbout = this.state.page === '/about';
        return(
            <Breadcrumb size="large" style={{ marginBottom: 5 }}>
                <Breadcrumb.Section link={!isHome} active={isHome} onClick={goToPage('/')}>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right angle" />
                <Breadcrumb.Section link={!isCommand} active={isCommand} onClick={goToPage('/command')}>Command</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right angle" />
                <Breadcrumb.Section link={!isAbout} active={isAbout} onClick={goToPage('/about')}>About</Breadcrumb.Section>
            </Breadcrumb>
        );
    }

    render() {
        return(
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={8} verticalAlign="bottom">
                        <h1 style={{ textAlign: 'left', marginTop: 20 }}><Icon name="terminal" color="blue" />Termi</h1>
                    </Grid.Column>
                    <Grid.Column width={2} verticalAlign="bottom">
                        {this.renderBreadCrumb()}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderRoute()}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
