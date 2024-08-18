---
sidebar_position: 4
---

# Using Variables

If you would like to manage variables within your workflows, variable components are what you need. The controlflow component library provides three components that function like Python variables:

- `SetVariableComponent`
- `GetVariableComponent`
- `DefineVariableComponent`

<p align="center">
  <img width="50%" src="/img/docs/VariableComponents.png"></img>
  <figcaption class="image-caption">Variable Components</figcaption>
</p>

## Steps to Use Variable Components

Using `Variable Components` is simple:
1. Drag a `SetVariableComponent` onto your canvas. Define the variable `name` and `value`.
2. To access the variable, use `GetVariableComponent`, specify the variable by the `name`, and retrieve the value via its `value` outPort.
3. If you want to immediately use the value, you can use the `DefineVariableComponent`. `SetVariableComponent` and `DefineVariableComponent` are interchangeable in setting the variable value.

Consider the following workflow. 

<p align="center">
  <img width="90%" src="/img/docs/VariableComponentsExample.png"></img>
  <figcaption class="image-caption">Variable Component Example</figcaption>
</p>

You can define a variable at any point of the workflow using `SetVariableComponent`, and then retrieve the value at the end using `GetVariableComponent`.

<details>
  <summary>Expected Output</summary>

  ```
  ======================================
  __   __  ___                _ _
  \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
  \ \  \  /| | '__/ __| | | | | __/ __|
  / /  /  \| | | | (__| |_| | | |_\__ \
  /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

  ======================================

  Xircuits is running...


  Executing: Example

  Executing: SetVariableComponent

  Executing: PlaceholderComponent
  This is a placeholder component!

  Executing: PlaceholderComponent
  This is a placeholder component!

  Executing: PlaceholderComponent
  This is a placeholder component!

  Executing: GetVariableComponent

  Executing: Print
  Hello Xircuits!

  Finished Executing

  ```

</details>

## Recommended Use Cases

You should use Variable Components when:
- You need a variable that changes. An example of this is [controlling loops with Variable Components](branch-and-loops#comparison-and-conditional-logic).
- You want to save a variable value into the Xircuits context.


## Use Cases to Avoid

You *could* (but not really recommended) also do the following with Variable Components:
- Treat Variable Components as constants where you set the value with `SetVariableComponent` and fetch the value with `GetVariableComponent`.
- Use `SetVariableComponent` to store a reference from an outPort that is too far and retrieve it with `GetVariableComponent`.
- Use Variable Components to pass and access data in nested workflows.

:::tip

A good Xircuits workflow is one that is understandable at a glance. While you might be tempted to use Variable Components everywhere as with a typical Python script, you might lose visibility compared to using the normal method.

Consider the case where you substitute the Literal Values with Variable Components, like in the following workflow:

<div className="iframe-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/_nKf2QKkdf8?si=EGhMSxAI8Z9G6IhP&amp;start=24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

As shown, using Literals allows you to keep track of what the Literal is connected to, and with one change, you can easily update the value across nodes. Substituting these with Variable Components means you'll have to ensure that you use the same variable names and might lose track of where the Variable Component is used.

While ultimately it is up to your Xircuiting style, we recommend using Variable Components sparingly and only when other methods are not feasible.

:::

For more details on how Variable Components work under the hood, refer to the [Variable Components](docs/main/references/components/variable-components.md) documentation.