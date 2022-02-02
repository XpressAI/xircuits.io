---
sidebar_position: 1
---

## Installation
We recommend installing xircuits in a virtual environment. 
```
$ pip install xircuits
```
### Launch
```
$ xircuits
```
## Development


### Prerequisites

Xircuits requires nodejs and yarn to build. The test nvm version is 14.15.3. 
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

# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build

```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.
```
# Watch the source directory in another terminal tab
jlpm run watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```


## Preview

### Normal Workflow
![HelloXircuits](https://user-images.githubusercontent.com/68586800/151285391-1d4f477c-4f82-44c8-8d4f-729e52f32c3e.gif)

### Machine Learning
![XircuitKeras](https://user-images.githubusercontent.com/68586800/151285439-28a1ad93-4585-4fdb-8d73-41b5b7ba2044.gif)


