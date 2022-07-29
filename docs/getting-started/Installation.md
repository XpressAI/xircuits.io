---
sidebar_position: 1
---

# Installation
You will need python 3.8+ to install Xircuits. We recommend installing in a virtual environment.
```
$ pip install xircuits
```

Xircuits has many component libraries. To use them, simply install via `pip install xircuits[packageName]`.

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
You will be prompted to load the xai_components in the current path. 