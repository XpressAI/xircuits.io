---
sidebar_position: 2
id: how-to-create-a-xircuits-component-library
title: How to Create a Xircuits Component Library
tags:
  - component-library dev
  - how-tos
---

# How to Create a Xircuits Component Library

In the previous guide, you have learned how to create a component. In this guide, you will learn how to create a component library. 

1. Create a directory in xai_components called `xai_newLibrary`.
2. Inside that directory, indicate that your component library is a python module by creating `__init__.py`. Leave it blank.
3. Inside xai_newLibrary, create `component_code.py`. Inside `component_code.py`, import the needed base Xircuits modules: `from xai_components.base import InArg, OutArg, Component, xai_component`.
6. Insert your component definition inside `component_code.py`. You can use the same component created in the previous guide, or create a new one.
7. Finally, inside `xai_newLibrary`, create `requirements.txt`. Populate the txt file with the required packages to install your library, or leave it blank if it does not require any additional library.

If you have done it correctly, you should end up with a directory tree similar to this:
```
# +-- xai_components
#     +-- xai_newLibrary
#         +-- __init__.py
#         +-- component_code.py
#         +-- requirements.txt
```

You can now check whether Xircuits have registered your component library. In the Component Tray, click the refresh icon. `newLibrary` should appear, and inside it your component ready to use.
Congratulations, you have successfully created your own Xircuits component library!

Xircuits component libraries, as with xircuits are very sharable. All you need to do for your colleagues to use it is by dropping your component library folder in their xai_components folder, and your components should show up in theirs.