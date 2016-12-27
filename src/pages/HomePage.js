import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const HomePage = () => (
    <Segment style={{ paddingLeft: 0, paddingRight: 0 }} basic>
        <Header as="h1" style={{ margin: '15 auto' }}>
            What is <span style={{ color: '#2185D0' }}>Termi</span> ?
        </Header>
    </Segment>
);

export default HomePage;
