---
sidebar_position: 4
id: xircuits-template
title: Xircuits Template
tags:
  - glossary
---

* A Xircuits template is a project repository that utilizes Xircuits as its engine.
* A single project should have only one Xircuits template at a time.
* A template should be application focused (object detection, BERT training, etc).
* A template repository can have as much component libraries as the application needs.
* The template repository should be structured so that Xircuits can be launched directly. Hence it will need the `.xircuits` config directory, `xai_components` with the `base.py` and whatever component libraries needed, as well as the xircuits to run the application template, as shown below: 
```
# working directory
# |
# +-- .xircuits
# |   +-- config.ini
# |
# +-- xai_components
# |   +-- xai_lib_1
# |   |   +-- __init__.py
# |   |   +-- component_code.py
# |   |   +-- requirements.txt
# |   |
# |   +-- __init__.py
# |   +-- base.py
# |
# +-- ApplicationTemplate.xircuits
# +-- requirements.txt
```
* The workflow of using a template would be to clone the template repository then installing requirements.txt with a specified xircuits version inside.