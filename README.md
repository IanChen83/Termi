# Termi
Termi is a framework to customize your most used command-line tools

> **NOTICE!!**
> This project is in its prototype phase! Running `termi-conf` or `termi-server` on public networks might have security issues!

## Introduction

The first version of GNU `coreutils` was announced in September 2002 by merging the earlier packages *textutils*, *shellutils*, and *fileutils*, along with some other miscellaneous utilities [^1]. Since then, many more handy-but-sometimes-obscure options have been added to each command. However, for backward compatibility, few options are deprecated, making the whole available options unorganized and conflicted. Moreover, most of command-line users don't memorize these options (how many time do you read the man page of `ls`? ), leaving the outputs sometimes unsatisfactory and resulting in more and more questions about shell asked on StackOverflow[^2]. Termi, starting as a final project and still on its prototype phase though, attempts to resolve the issue.

Termi focus on an easy way to customize outputs of most used command-line tools. Because of its two-phase customization, you can almost do anything to beautify the outputs, like formatted with colors, trimmed to fit in one page, sorted by some columns, and many more. Below is a quick explanation about the two-phase customization.

[^1]: Wikipedia [GNU Core Utilities](https://en.wikipedia.org/wiki/GNU_Core_Utilities)
[^2]: [tag-trends](http://sotagtrends.com/?tags=[shell]&relative=false) about shell

## Installation

There are two applications in Termi called `termi-conf` and `termi-server`. `termi-conf` is used to configure the aliases and generate customization scripts, while `termi-server` listen on socket to transform outputs of commands on demand. So, if you only use Termi to create some handy aliases, you don't have to install `termi-server`.

## Performance

We measure performance by using `time` command. To be done.

## Todo

1. The supported options are based on the newest version of `coreutils` package on Arch Linux. There should be a way to support multiple versions of commands.
2. Unit testing.
3. Measure performance.

## License

MIT
