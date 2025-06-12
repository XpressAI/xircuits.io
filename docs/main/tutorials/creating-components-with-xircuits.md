---
sidebar_position: 3
---

# Creating Components with Xircuits

Now that you've mastered the basics of Xircuits and created your first visual workflow from scratch, you're ready to take your skills to the next level. In the previous tutorials, you learned how to use existing components to build workflows. But what if you want to create your own reusable components?

Imagine you've been working on a project that involves repeating certain sequences of operations across multiple workflows. Instead of recreating these sequences each time, wouldn't it be great if you could package them into a single, reusable component? That's exactly what we're going to learn in this tutorial.

In this guide, we'll show you how to create your own custom components in Xircuits, using `workflow components`. You'll learn how to encapsulate logic, make your components flexible with Arguments, and use them in larger workflows. This skill will not only save you time but also make your workflows more modular and easier to maintain.

Let's dive in and start creating your first custom Xircuits component!

## Setting Up and Creating Your First Workflow Component

To begin, you have two options:

1. Use the `HelloTutorial.xircuits` from the first tutorial.
2. Create a new workflow from scratch.

If you're creating a new workflow:

1. Add the `ConcatString` and `Print` components to your canvas.
2. Add two Literal components and connect them to the ConcatString component.
3. Set one Literal to "Hello " and the other to "Xircuits!".
4. Connect the output of `ConcatString` to the input of `Print`.

Your workflow should look like this:

<p align="center">

![](/img/docs/tutorial-workflow-component-01.png)

<figcaption class="image-caption">HelloTutorial.xircuits</figcaption>
</p>

To create your first workflow component:

1. Save your workflow with a descriptive name (e.g., "HelloXircuits.xircuits").
2. Compile the workflow to generate a Python script. This step is crucial for Xircuits to recognize your workflow as a component.

Optionally, you can run the workflow to verify its output. You should see "Hello Xircuits!" printed if you do.

Now that we've set up our initial workflow and compiled it, it's ready to be used as a component. In the next section, we'll learn how to incorporate this newly created component into a larger workflow.

## Using Your Workflow Component

Now, let's use this component in a new workflow:

1. Start a new workflow in Xircuits.
2. Look for your workflow component in the component library tray. It will have the same name as its filename. 
3. Drag and drop your workflow component into the new workflow.
4. Connect the Start node to your component, and your component to the Finish node.
5. Compile and run this new workflow.

<p align="center">

![](/img/docs/tutorial-workflow-component-02.png)

<figcaption class="image-caption">Using the Workflow Component</figcaption>
</p>

You should see the same output as before: "Hello Xircuits!". However, you're now effectively executing a workflow in another workflow. Congratulations! You've just created and used your first workflow component.

## Enhancing Workflow Flexibility with Arguments

While your component works, it's not very flexible. Let's modify it to accept custom inputs:

1. Go back to your original workflow.
2. Replace the Literal components with `Argument String` components:
   - For the greeting (e.g., "Hello "), replace it with an Argument String named "greeter".
   - For the name (e.g., "Xircuits!"), replace it with an Argument String named "name".
3. Connect these new Argument components to the appropriate inputs of the `ConcatString` component.
4. Connect the output of the `ConcatString` component to the `Finish` component's `outputs` port.
1. Save your changes and compile the workflow.

<p align="center">

![](/img/docs/tutorial-workflow-component-03.png)

<figcaption class="image-caption">Using the Arguments in Workflow Components</figcaption>
</p>

## Using Your Enhanced Workflow Component

Now that you've modified your workflow:

1. Double check that you've saved your changes and compiled the workflow. If you haven't - it won't be updated!
2. Go back to your second workflow (or create a new one).
3. Replace the previous version of your component with this new, argument-enabled version.
4. You'll notice that your component now has input ports for "greeter" and "name".
5. Add two Literal components to provide values for these inputs.
6. Connect everything and run the workflow.

<p align="center">

![](/img/docs/tutorial-workflow-component-04.png)

<figcaption class="image-caption">Using the Updated Workflow Component</figcaption>
</p>

<details>
<summary>Expected Output</summary>
<code>

    ======================================
    __   __  ___                _ _
    \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
    \ \  \  /| | '__/ __| | | | | __/ __|
    / /  /  \| | | | (__| |_| | | |_\__ \
    /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

    ======================================


Xircuits is running...


Executing: NewWorkflow

Executing: HelloTutorial

Executing: ConcatString

Executing: Print
Greetings User!

Executing: PrettyPrint
'Greetings User!'

Finished Executing
</code>
</details>


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