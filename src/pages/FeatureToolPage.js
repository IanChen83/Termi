import React from 'react';
import update from 'react-addons-update';
import { Step, Item, Grid, Header, Input, Segment, Button, Checkbox, Divider } from 'semantic-ui-react';
import CodeMirror from 'react-codemirror';
import ToggleSelection from '../components/ToggleSelection';
import ToggleToggle from '../components/ToggleToggle';

require('codemirror/mode/python/python');
require('codemirror/lib/codemirror.css');

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
            options: null,
            selectOptions: {},
            commandResult: '',
            customizationResult: '',
            notUseScripts: false,
            script: '# Write customization code here.\n# Receive INPUT and write to OUTPUT\nOUTPUT = INPUT\n',
        };

        this.step = [
            { title: 'Options', description: 'Select the essential data to display' },
            { title: 'Customizations', description: 'Write the customizations scripts' },
            { title: 'Exports', description: 'Export your settings' },
        ];

        this.onOptionChange = this.onOptionChange.bind(this);
        this.getCommandResult = this.getCommandResult.bind(this);
        this.runCustomization = this.runCustomization.bind(this);
        this.onCustomizationChange = this.onCustomizationChange.bind(this);
        this.onnotUseScriptsToggle = this.onnotUseScriptsToggle.bind(this);
    }

    componentDidMount() {
        this.getOptions();
    }

    componentDidUpdate(prevProps, prevState) {
        const selectOptions = { ...this.state.selectOptions };
        const prevSelectOptions = { ...prevState.selectOptions };
        if(Object.keys(selectOptions).some(k => selectOptions[k] !== prevSelectOptions[k])) {
            setTimeout(this.getCommandResult, 1000);
        }
    }

    onOptionChange(name, value) {
        const selectOptions = { ...this.state.selectOptions };
        selectOptions[name] = value;

        this.setState({ selectOptions });
    }

    onnotUseScriptsToggle() {
        this.setState({ notUseScripts: !this.state.notUseScripts });
    }

    onCustomizationChange(script) {
        this.setState({ script });
    }

    getSelectCommand() {
        if(!this.state.options) {
            return '';
        }

        const command = this.state.options.default || '';
        const options = Object.values(this.state.selectOptions).filter(x => x !== '').join(
            ' ');
        return `${command} ${options}`;
    }

    getCommandResult() {
        const fetchOption = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                selectOptions: this.state.selectOptions,
                command: this.state.options.default,
            }),
        };
        fetch('/api/commands/run/', fetchOption)
            .then(res => res.json())
            .then((res) => {
                if(res.status !== 'ok') {
                    throw new Error(res.description);
                }
                console.log(res.data);

                this.setState({ commandResult: res.data.toString() });
                this.runCustomization();
            })
            .catch((err) => {
                console.error(err);
                this.setState({ commandResult: '' });
            });
    }

    getOptions() {
        fetch(`/api/options/${this.props.command}`)
            .then(res => res.json())
            .then((res) => {
                if(res.status !== 'ok') {
                    throw new Error(res.description);
                }

                const { options } = res;
                const selectOptions = {};

                options.groups.forEach((g) => {
                    g.options.forEach((opt) => {
                        switch(opt.type) {
                            case 'selection':
                                selectOptions[opt.title] = opt.default ?
                                    opt.options[0].value : '';
                                break;
                            case 'toggle':
                                selectOptions[opt.title] = opt.default ?
                                    (opt.positive || '') : (opt.negative ||
                                        '');
                                break;
                            default:
                                break;
                        }
                    });
                });

                this.setState({ options, selectOptions });
            })
            .catch((e) => {
                console.error(e);
                this.setState({ options: null });
            });
    }

    goToStep(step) {
        this.runCustomization();
        this.setState({ step });
    }

    runCustomization() {
        const output = (x) => {
            if(x && x.trim() !== '') {
                this.setState({ customizationResult: x });
            }
        };
        Sk.configure({
            output,
            read: x => Sk.builtinFiles.files[x],
        });

        const input = `INPUT = "${this.state.commandResult.replace(new RegExp(/\n/, 'g'), '\\n')}"\n` + this.state.script + '\nprint(OUTPUT)\n';
        console.log(input.toString());

        const myPromise = Sk.misceval.asyncToPromise(() =>
            Sk.importMainWithBody(
                '<stdin>',
                false,
                input,
                true,
            ));
        myPromise.then(() => {
        }).catch((err) => {
            this.setState({ customizationResult: err.toString() });
        });
    }

    renderSteps() {
        return(
            <Step.Group style={stepStyle} fluid ordered>
                {this.step.map((v, i) =>
                    <Step
                      key={i}
                      link
                      active={i === this.state.step}
                      completed={i < this.state.step}
                      title={v.title}
                      onClick={this.goToStep.bind(this, i)}
                      description={v.description}
                    />)}
            </Step.Group>
        );
    }

    renderToggle(v, i) {
        switch(v.type) {
            case 'selection':
                return <ToggleSelection config={v} key={i} onChange={this.onOptionChange} />;
            case 'toggle':
                return <ToggleToggle config={v} key={i} onToggle={this.onOptionChange} />;
            default:
                return null;
        }
    }

    renderCustomizations() {
        const options = {
            mode: 'python',
            indentUnit: 4,
            lineNumbers: true,
        };

        const style = {
            marginTop: 2,
            borderRadius: 4,
            border: 'solid 1px rgba(0, 0, 0, 0.298039)',
        };

        return(
            <div>
                <Button fluid basic positive onClick={this.runCustomization}>Run</Button>
                <div style={style}>
                    <CodeMirror value={this.state.script} options={options} onChange={this.onCustomizationChange} />
                </div>
            </div>
        );
    }

    renderExports() {
        return (
            <div>
                <Checkbox
                  toggle
                  label="Not using customization scripts"
                  checked={this.state.notUseScripts}
                  onChange={this.onnotUseScriptsToggle}
                />
                <Divider hidden />
                <Button fluid basic positive>Export</Button>
                <Divider hidden />
                Follow <a>these</a> procedures after you download the scripts.
            </div>
        );
    }

    renderOptions() {
        const { groups } = this.state.options;
        return(
            groups.map((v, i) => (
                <Item.Group key={i}>
                    <Item as={() => <Header style={{ borderBottomWidth: 1 }} as="h4" dividing color="teal">{v.name}</Header>} />
                    {v.options.map(this.renderToggle.bind(this))}
                </Item.Group>
            ))
        );
    }

    renderSideTool() {
        switch(this.state.step) {
            case 0:
                return this.renderOptions();
            case 1:
                return this.renderCustomizations();
            default:
                return this.renderExports();
        }
    }

    renderResult() {
        switch(this.state.step) {
            case 0:
                return this.state.commandResult || 'Unable to get result.';
            case 1:
                return this.state.customizationResult || 'Not initialized';
            case 2:
                if(this.state.notUseScripts) {
                    return this.state.commandResult || 'Unable to get result.';
                }
                return this.state.customizationResult || 'Not initialized';
            default:
                return null;
        }
    }

    render() {
        if(!this.state.options) {
            return null;
        }

        return(
            <div>
                {this.renderSteps()}
                <Grid divided style={{ margin: 0 }}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Input value={this.getSelectCommand()} fluid>
                                <input readOnly style={{ textAlign: 'center', fontFamily: 'Monospace', fontSize: 20 }} />
                            </Input>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ textAlign: 'left' }}>
                        <Grid.Column width={6}>
                            {this.renderSideTool()}
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Segment inverted style={{ fontFamily: 'Monospace', whiteSpace: 'pre' }}>
                                {this.renderResult()}
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

FeatureToolPage.propTypes = {
    command: React.PropTypes.string.isRequired,
};


export default FeatureToolPage;
