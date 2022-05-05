---
sidebar_position: 1
---

# Installation
You will need python 3.9+ to install xircuits. We recommend installing in a virtual environment.
```
$ pip install xircuits[full]
```
If you would like to install just the core functions, use:
```
$ pip install xircuits
```
### Download Examples
```
$ xircuits-examples
```
### Launch
```
$ xircuits
```
## Development

For most use cases installing via `pip install xircuits` should be enough. If you would like to modify some of the Xircuits core functions (such as node and port logic) you may follow the following steps.
### Prerequisites

Building Xircuits requires nodejs and yarn. The test nvm version is 14.15.3. 
You may also want to set yarn globally accessible by:

```
npm install --global yarn
```

### Build
```
git clone https://github.com/XpressAI/xircuits
```
Make and activate python env. The tested python versions are 3.9.6

```
python -m venv venv
venv/Scripts/activate
```

Download python packages. 

```
pip install -r requirements.txt
```

Run the following commands to install the package in local editable mode and install xircuits into the JupyterLab environment.

```
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Enable the server extension
jupyter server extension enable xircuits
```
### Running
Start up xircuits using:
```
xircuits
```
Xircuits will open automatically in the browser.

### Rebuild
Rebuild Xircuits after making changes.
```
# Rebuild Typescript source after making changes
jlpm build
# Rebuild Xircuits after making any changes
jupyter lab build
```
### Rebuild (Automatically)
You can watch the source directory and run Xircuits in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.
```
# Watch the source directory in another terminal tab
jlpm run watch
# Run Xircuits in watch mode in one terminal tab
jupyter lab --watch
```
