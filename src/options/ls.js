module.exports = {
    name: 'ls',
    default: 'ls',
    groups: [{
        name: 'Display Mode',
        options: [{
            type: 'selection',
            title: 'Display format',
            description: 'Select display format',
            format: '--format=%',
            default: false,
            options: [{
                text: 'vertical',
                value: 'vertical',
            }, {
                text: 'across',
                value: 'across',
            }, {
                text: 'commas',
                value: 'commas',
            }, {
                text: 'single-column',
                value: 'single-column',
            }],
        }],
    }, {
        name: 'Display Order',
        options: [{
            type: 'toggle',
            title: 'Show directories first',
            description: 'Group directories before files',
            positive: '--group-directories-first',
        }, {
            type: 'selection',
            title: 'Sort entries',
            description: 'Select sorting target',
            format: '--sort=%',
            defalut: false,
            options: [{
                text: 'none',
                value: 'none',
            }, {
                text: 'size',
                value: 'size',
            }, {
                text: 'time',
                value: 'time',
            }, {
                text: 'version',
                value: 'version',
            }, {
                text: 'extension',
                value: 'extension',
            }],
        }],
    }, {
        name: 'Ignored Entries',
        options: [{
            type: 'toggle',
            title: 'Ignore hidden entries',
            description: 'Ignored entries starting with .',
            negative: '-A',
            default: true,
        }, {
            type: 'toggle',
            title: 'Ignore backup',
            description: 'Do not list implied entries ending with ~',
            positive: '-B',
        }, {
            type: 'toggle',
            title: 'Ignore implied entries',
            description: 'Do not list implied . and ..',
            negative: '-a',
            default: true,
        }],
    }, {
        name: 'Long Listing Columns',
        options: [{
            type: 'toggle',
            title: 'Hide author',
            description: 'Hide author of each file',
            negative: '-l --author',
            default: true,
        }, {
            type: 'toggle',
            title: 'Hide owner',
            description: 'like -l, but do not list owner',
            positive: '-g',
        }, {
            type: 'toggle',
            title: 'Hide group information',
            description: 'like -l, but do not list group information',
            positive: '-o',
        }, {
            type: 'toggle',
            title: 'Show numeric IDs',
            description: 'like -l, but list numeric user and group IDs',
            positive: '-n',
        }],
    }, {
        name: 'Other Columns',
        options: [{
            type: 'toggle',
            title: 'Show allocated size',
            description: 'Print the allocated size of each file, in blocks',
            positive: '-s',
        }, {
            type: 'toggle',
            title: 'Show index number',
            description: 'Print the index number of each file',
            positive: '-i',
        }],
    }],
};
