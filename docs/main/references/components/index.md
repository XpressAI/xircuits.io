---
title: Components
---

# Components

Xircuits simplifies complex workflows by allowing users to drag and connect components on a canvas. These components range from simple operations like adding integers to complex tasks such as setting up machine learning models.

## 1. Component Library Nodes

Component library nodes are the workhorses of your workflow. They perform actions or tasks and manage the execution flow. Key features include:

- Flow ports at the top (inPort and outPort) to control execution sequence
- Blue, flowing links connecting these ports to indicate workflow order
- Icons representing their function
- Ability to accept parameters to modify their behavior

<details>
<summary><b>Preview</b></summary>
<p align="center">

![](/img/docs/component-nodes.gif)

<figcaption class="image-caption">Component Nodes</figcaption>
</p>
</details>

Library components form the basis of component library nodes in your workflow. They are Python-based and located in the `xai_component` directory. 

### Built-in Components

Xircuits comes with several built-in components that implement core logic essential for workflow construction:

- [Branch and Loop Components](/docs/main/references/components/branch-and-loop-components): For controlling flow and creating iterative processes
- [Variable Components](/docs/main/references/components/variable-components): For managing data within your workflow
- [Event Components](/docs/main/references/components/event-components): For handling various events in your workflow
- [Workflow Components](/docs/main/references/components/workflow-components): For managing the overall structure and flow of your workflow

These built-in components are preinstalled when you install Xircuits, and provide the fundamental building blocks for creating complex workflows.

### Remote Libraries

Xircuits supports a wide range of remote libraries that can be installed to extend functionality. These libraries implement various frameworks and packages such as TensorFlow, Spark, or scikit-learn, providing individual components for specific tasks within these ecosystems. 

To explore the available remote libraries:
1. Refer to the [Component Library](/docs/component-library/) page for detailed information.
2. Check the [Xircuits Component Library List](https://github.com/XpressAI/xircuits/tree/master/xai_components#xircuits-component-library-list) on GitHub for a comprehensive list of available libraries.

## 2. Parameter Nodes

Parameter nodes, found in the GENERAL tab, supply values to other components, influencing their behavior. Characteristics include:

- Connected to other components via solid gray links
- Editable values (double-click to modify)
- Two subtypes: Literal components and Argument components
- No icons

<details>
<summary><b>Preview</b></summary>
<p align="center">

![](/img/docs/interface-custom-ports.gif)

<figcaption class="image-caption">Parameter Nodes</figcaption>
</p>
</details>

Parameter nodes are built into every Xircuits workspace and are essential for customizing the behavior of other components.

In addition to these main types, Xircuits also provides [Comment Components](/docs/main/references/components/comment-component) for displaying messages within your workflow.