import React from 'react';

export default class FeatureManPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
        };
    }

    componentDidMount() {
        fetch(`/api/commands/${this.props.command}`)
        .then(res => res.json())
        .then((content) => {
            this.setState({ content: content.data });
        })
        .catch(() => {
            this.setState({ content: 'Cannot get man page' });
        });
    }

    createMarkup() {
        return { __html: this.state.content };
    }

    render() {
        return <div style={{ textAlign: 'left', margin: '0 20px' }} dangerouslySetInnerHTML={this.createMarkup()} />;
    }
}

FeatureManPage.propTypes = {
    command: React.PropTypes.string.isRequired,
};
