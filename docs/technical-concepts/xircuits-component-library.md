---
sidebar_position: 3
id: xircuits-component-library
title: Xircuits Component Library
tags:
  - glossary
---

* A Xircuits component library is a repository or directory that contains xircuits component codes render and run in a Xircuits canvas.
* A component library should be framework focused (tensorflow, pyspark, pycaret, etc).
* A component library repository should focus on one framework at a time and keep other library / frameworks imports to a minimum.
* The structure should contain `__init__.py`, the component_code.py, the requirements.txt, and optionally an `examples` directory, as below: 
```
# +-- examples
# |   |
# |   +-- example1.xircuits
# |   +-- example2.xircuits
# |
# +-- __init__.py
# +-- component_code.py
# +-- requirements.txt
```
* In Xircuits they are implemented as xai_component submodules.
* The workflow of using a component library would be simply copying / cloning the directory to your working Xircuits directory.

* Example: the [pycaret component library](https://github.com/XpressAI/xai-pycaret)