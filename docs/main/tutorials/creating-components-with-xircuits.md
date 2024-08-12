---
sidebar_position: 3
---

# Creating Components with Xircuits

Welcome to this step-by-step tutorial on creating and using reusable workflow components in Xircuits! By the end of this tutorial, you'll be able to create modular, flexible workflows that can be integrated into larger projects.

## Understanding Workflow Components

Workflow components in Xircuits are like functions in traditional programming. They allow you to encapsulate specific tasks or logic into reusable pieces that can be embedded in larger workflows.

<p align="center">
  <img width="50%" src="/img/docs/workflow_component.png"></img>
  <figcaption class="image-caption">Workflow Components</figcaption>
</p>

## Setting Up Your Initial Workflow

To begin, you have two options:

1. Use the `HelloTutorial.xircuits` from the first tutorial.
2. Create a new workflow from scratch.

If you're creating a new workflow, make sure to add the following components to your canvas:
- Start
- ConcatString
- Print
- Finish

Also, add two Literal components and connect them to the ConcatString component. Set one Literal to "Hello " and the other to "Xircuits!".

## Creating Your First Workflow Component

1. Save your workflow and compile it to generate a Python script.
2. Run the workflow to see the output. You should see "Hello Xircuits!" printed.

## Using Your Workflow Component

Now, let's use this component in a new workflow:

1. Start a new workflow in Xircuits.
2. Look for your compiled workflow in the component library tray.
3. Drag and drop your workflow component into the new workflow.
4. Connect the Start node to your component, and your component to the Finish node.
5. Compile and run this new workflow.

You should see the same output as before: "Hello Xircuits!". However, you're now using your custom component in a larger workflow. Congratulations! You've just created and used your first workflow component.

## Enhancing Workflow Flexibility with Arguments

While your component works, it's not very flexible. Let's modify it to accept custom inputs:

1. Go back to your original workflow.
2. Replace the Literal components with `Argument String` components:
   - For the greeting (e.g., "Hello "), replace it with an Argument String named "greeter".
   - For the name (e.g., "Xircuits!"), replace it with an Argument String named "name".
3. Connect these new Argument components to the appropriate inputs of the `ConcatString` component.
4. Connect the output of the `ConcatString` component to the `Finish` component's `outputs` port.

## Using Your Enhanced Workflow Component

Now that you've modified your workflow:

1. Save your changes and compile the workflow.
2. Go back to your second workflow (or create a new one).
3. Replace the previous version of your component with this new, argument-enabled version.
4. You'll notice that your component now has input ports for "greeter" and "name".
5. Add two Literal components to provide values for these inputs.
6. Connect everything and run the workflow.

## Benefits of Argument-Based Components

By replacing Literals with Argument components, you've made your workflow component much more flexible:

1. The "greeter" and "name" Arguments create inPorts on your workflow component, allowing users to input custom values.
2. The connection to the `Finish` component's outPort creates an outPort for your component's results, making the output accessible in larger workflows.
3. You can now reuse this component with different inputs without modifying the original workflow.

Try changing the values in the Literal components connected to your workflow component. You'll see that you can now customize the greeting and name each time you use the component.

<div className="iframe-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/UZLZ9Z0RdXY?si=wMcd8jLSL06KJX1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  allow="fullscreen;"></iframe>
</div>

## Conclusion

You've learned how to create a simple workflow, turn it into a component, use that component in a larger workflow, and then enhance it with arguments for greater flexibility. This skill will help you build more efficient and modular projects with Xircuits. From here, you can explore more complex workflows and dive deeper into visual programming with Xircuits.