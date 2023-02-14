---
sidebar_position: 3
id: creating-a-xircuits-component-library
title: Creating a Xircuits Component Library
tags:
  - component dev
  - tutorials
---

# How to Create a Xircuits Component Library

In the previous guide, you have learned how to create a component. In this guide, you will learn how to create a component library, either creating from scratch or from a template.

## Creating a Component Library From Scratch

Ensure that you already have a Xircuits working directory before proceeding.

1. Create a directory in xai_components called `xai_newLibrary`.
2. Inside that directory, indicate that your component library is a Python module by creating `__init__.py`. Leave it blank.
3. Inside xai_newLibrary, create `component_code.py`. Inside `component_code.py`, import the needed base Xircuits modules: `from xai_components.base import InArg, OutArg, Component, xai_component`.
6. Insert your component definition inside `component_code.py`. You can use the same component created in the [previous guide](creating-a-xircuits-component.md), or create a new one.
7. Finally, inside `xai_newLibrary`, create `requirements.txt`. Populate the txt file with the required packages to install your library, or leave it blank if it does not require any additional library.

If you have done it correctly, you should end up with a directory tree similar to this:
```
# +-- xai_components
#     +-- xai_newLibrary
#         +-- __init__.py
#         +-- component_code.py
#         +-- requirements.txt
```

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/developer-guide/create-new-component-library.gif"></img></p>
</details><br></br>

You can now check whether Xircuits have registered your component library. In the Component Tray, click the refresh icon. `newLibrary` should appear, and inside it your component ready to use.
Congratulations, you have successfully created your own Xircuits component library!

Xircuits component libraries, as with Xircuits files are very sharable. All you need to do for your colleagues to use it is by dropping your component library folder in their xai_components folder, and your components should show up in theirs.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/collab.gif"></img></p>
</details><br></br>

## Creating a Component Library from the Template

We have provided a Xircuits library template repository [here](https://github.com/XpressAI/xircuits-component-library-template). To use it:

  1. Navigate to the [library template](https://github.com/XpressAI/xircuits-component-library-template) in your web browser. Select `Use this template`. 
  2. You will be prompted to create a new repository from `xircuits-component-library-template`. Give it a name and whether you'd want to make it a public or private repository. Once done, select `Create repository from template`.
  3. A new Xircuits component library should be created for you to clone. To use it, navigate to your Xircuits project directory, then 

      ```
      $ cd xai_components
      $ git clone https://github.com/your_org/your_new_lib xai_lib_name
      ```
    :::info

    You will need to prepend `xai_` to the directory name in order for your component library to be parsed by the Xircuits component tray.

    :::
    
    Once complete, you should be able to render and use the components from the tray.

Creating individual component library repositories is the recommended way if your project requires multiple libraries that are also used in other projects. 

## Contributing your Own Component Library
Our official [Xircuits Component Library list](https://github.com/XpressAI/xircuits/tree/master/xai_components#readme) is built from our devs and open-source contributors. If you would like your component library to be included in this list, we've made a [guide](../contributing/contributing-a-xircuits-component-library.md) for you.