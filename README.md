<p align="center">
<img src="https://raw.githubusercontent.com/ConorTheDev/vsc-haste/master/img/header.png"/>
<br/><br/>
<img src="https://img.shields.io/visual-studio-marketplace/d/ConorTheDev.vsc-haste?style=for-the-badge"/>
<img src="https://img.shields.io/visual-studio-marketplace/v/ConorTheDev.vsc-haste?style=for-the-badge"/>
<img src="https://img.shields.io/github/license/ConorTheDev/vsc-haste?style=for-the-badge"/>
<a href="https://patreon.com/ConorTheDev">
<img src="https://img.shields.io/endpoint.svg?url=https://shieldsio-patreon.herokuapp.com/ConorTheDev&style=for-the-badge" />
</a>
</p>

## Features

* Upload a selection of code to hastebin, or even a full file!
* Support for [psty](https://psty.io) and all hastebin-based websites!
* Context menu actions

![context-windows](https://raw.githubusercontent.com/ConorTheDev/vsc-haste/master/img/preview/context-windows.png)
![context](https://raw.githubusercontent.com/ConorTheDev/vsc-haste/master/img/preview/context.png)

### Planned Features
* Custom haste URLs (e.g. myhaste.haste.conorthedev.me // myhaste.vsc-haste.something)

## Requirements

vscode >= 1.37.0

## Extension Settings

This extension contributes the following settings:

* `vsc-haste.host`: set the hastebin provider (e.g. ``https://haste.uses-dark-the.me``, ``https://psty.io``)
* `vsc-haste.psty.theme`: set the theme to use for psty.io uploads (matches dropdown on https://psty.io) (not required if you're not using psty.io)

## Release Notes

### 1.2.0
#### Added
* psty theme selection (vsc-haste.psty.theme)
* Language detection for hastebin based sites
* Experimental language detection for psty
* Better error handling

#### Changed / Fixed
* Rewrote codebase, should be faster and extension should be slightly smaller in release than in dev builds (575.01kb before rewrite, 507.07 after)
* Fix the notification text being the opposite of the action run


### 1.1.0
* UI Settings, no need to edit JSON values!
* Added custom icon
* Added header image
* [psty](https://psty.io) support
* General Improvements

### 1.0.1

* Fix commands not showing in context menu


### 1.0.0

* Initial release of vsc-haste!
