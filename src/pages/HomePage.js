import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const HomePage = () => (
    <Segment style={{ paddingLeft: 0, paddingRight: 0, textAlign: 'left' }} basic>
        <Header as="h1" style={{ margin: '15 auto' }}>
            What is <span style={{ color: '#2185D0' }}>Termi</span> ?
        </Header>
        <p>Termi is a website to customize your most used command line tools</p>
    </Segment>
);

export default HomePage;
