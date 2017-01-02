import React from 'react';
import { Card, Segment } from 'semantic-ui-react';

const preset = [{
    id: 0,
    title: 'standard',
    content: 'a.txt  demo  dist  index.html  LICENSE  node_modules  package.json  public  README.md  server.js  src  study  webpack.config.js  webpack.server.config.js  yarn.lock',
    users: 503,
}, {
    id: 1,
    title: 'detailed compact',
    content: 'perm.       owner       size    mod.        name\ndrwxr-xr-x  patrickchen 4096    17/01/02    demo\ndrwxr-xr-x  patrickchen 4096    16/12/31    src\ndrwxr-xr-x  patrickchen 20480   16/12/29    node_modules',
    users: 34,
}];

export default class FeaturePresetPage extends React.Component {
    constructor(props) {
        super(props);

        this.renderCard = this.renderCard.bind(this);
        this.onCardClick = this.onCardClick.bind(this);
    }


    onCardClick(proxy, target) {
        console.log(target.id);
    }

    renderCard(v, i) {
        return (
            <Card
              id={v.id}
              key={i}
              onClick={this.onCardClick}
              style={{ padding: 10 }}
            >
                <Card.Header content={v.title} style={{ fontSize: 25, fontWeight: 'bold' }} />
                <Card.Meta>{`${v.users} user(s)`}</Card.Meta>
                <Card.Description>
                    <Segment inverted style={{ marginTop: 5, fontFamily: 'Monospace', whiteSpace: 'pre', overflow: 'hidden' }}>
                        {v.content}
                    </Segment>
                </Card.Description>
            </Card>
        );
    }
    render() {
        return (
            <Segment basic style={{ textAlign: 'left' }}>
                <Card.Group itemsPerRow={2}>
                    {preset.map(this.renderCard)}
                </Card.Group>
            </Segment>
        );
    }
}
