---
sidebar_position: 4
id: xircuits-project-template
title: Xircuits Project Template 
tags:
  - glossary
---

- A Xircuits Project Template is a project repository that utilizes Xircuits as its engine.
- A single project directory should have only one Xircuits template at a time.
- A template should be use case / application focused (object detection, BERT training, etc).
- A template repository can have as much component libraries as the application needs.
- The template repository should be structured so that Xircuits can be launched directly. Hence it will need the `.xircuits` config directory, `xai_components` with the `base.py` and whatever component libraries needed, as well as the Xircuits to run the application template, as shown below: 
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
# |-- xircuits-workflows
# |   +-- ApplicationTemplate1.xircuits
# |   +-- ApplicationTemplate2.xircuits
# |
# +-- requirements.txt
# +-- setup.sh
```
- The workflow of using a project template would be:
  1. Clone the template repository
  2. Setting up the project with setup.sh
  3. Launching Xircuits from the base working directory.