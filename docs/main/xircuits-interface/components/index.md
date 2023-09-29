---
title: Components
---

# Components

Xircuits enables users to perform complex ML workflows by simply dragging components to the canvas, then connecting them together through links. Components can be as simple as a component that adds two integers together, to as comprehensive as setting up a machine learning model.

Components are used to encapsule complex processes into simple nodes that users can simply modify their behavior through parameters. 

The two main types of components in Xircuits:

## 1. Library Components

These components are components can perform a various tasks defined in their component code. Library components are rendered from the Python components located at the `xai_component` directory. Each component can be found in their respective libraries.

We have prepared several component libraries for several use cases. You can find more information about them at the [component library](../../../component-library/) page.


## 2. General Components

These components are components that you would use to supply parameters to the Library Components to adjust their parameters.

You can see two types of General components

1. Literal Components
2. Argument Components


Aside from these two, there is also the Comment Component which is used to display messages.