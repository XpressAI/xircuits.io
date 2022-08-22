---
sidebar_position: 1
---

# Installation
You will need Python 3.8+ to install Xircuits. 
:::tip

We recommend installing in a virtual environment such as Python [venv](https://docs.python.org/3/library/venv.html). 

```
$ python -m venv venv
$ source venv/Scripts/activate
```

:::

To install Xircuits run:

```
$ pip install xircuits
```





## Installing Xircuits Component Libraries

Xircuits has various [component libraries](https://github.com/XpressAI/xircuits/blob/master/xai_components/readme.md). To use them, install them via `pip install xircuits[packageName]`.

For example, to be able to use the pytorch components, run:
```
$ pip install xircuits[pytorch]
```

Additionally you can also get all the component library packages via:

```
$ pip install xircuits[full]
```
We wouldn't recommended it though as it's very large!

## Download Examples

We have provided some workflows for you to try. To fetch them, run:

```
$ xircuits-examples
```
## Launch

Finally to launch it, run:
```
$ xircuits
```
You will be prompted to load the xai_components in the current path. We recommend doing so to be able to edit them.