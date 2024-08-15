---
sidebar_position: 2
---

# Creating Your First Visual Workflow From Scratch

Welcome back to Xircuits! Now that you've learned how to run a basic workflow, it's time to create a more complex one from scratch. This tutorial will guide you through the process, introducing you to the component library, how to find and install necessary components, and how to use arguments effectively.

## Creating a New Workflow File

Let's begin by setting up a new workflow in Xircuits:

1. In the Launcher interface, click on `Others > Xircuits File` to create a new workflow file.
2. Name your file `MyFirstWorkflow.xircuits`.
3. You'll see a `Start` and `Finish` node automatically placed on the canvas. These nodes mark the beginning and end of your workflow.

## Navigating the Component Library

The component library is your toolbox for building workflows. Let's explore how to use it effectively.

### Adding Your First Component

1. On the left side of the Xircuits interface, click on the cube-like icon to open the component library tray.
2. Use the search bar at the top to find the `HelloComponent`. Drag it onto the canvas.
3. Connect the `Start` node to the `HelloComponent` node by dragging from the `Start` arrow outPort to the `HelloComponent` arrow inPort.
4. Click `Save` and then `Compile` to generate a Python script with the same name as your `.xircuits` file.
5. Run the workflow by clicking the 'Run' button. You should see an output like "Hello, User!" or a similar greeting.

### Expanding Your Component Library

Sometimes, you might need a library that isn't installed. Here's how to add it:

1. In the component library tray, look for libraries listed under `Available for Installation`.
2. To install a library, click on the `...` next to it and select `Install`. The library will be cloned to the `xai_components` directory.
3. You'll be prompted to choose a kernel, which will execute the `pip install` command to install the library.

For this tutorial, let's install the `xai_tensorflow` library:

1. Click on the `...` next to `xai_tensorflow` and select `Install`.
2. Follow the prompts to complete the installation.

Once installed, the new components will be available in your library.

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AtE6nus0kts?si=P1hoJ6ojKRC8wtzF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

## Constructing a More Complex Workflow

Now, let's create a machine learning workflow by adding and connecting multiple components. You can reuse the previous canvas or create a new one.

### Assembling the Core Components

1. Search for and drag these components onto the canvas, connecting them in this order:
   - `ReadKerasDataSet` (connect to `Start` node)
   - `TrainTestSplit` (connect to `ReadKerasDataSet`)
   - `KerasCreate2DInputModel` (connect to `TrainTestSplit`)
   - `KerasTrainImageClassifier` (connect to `KerasCreate2DInputModel`)
   - `KerasEvaluateAccuracy` (connect to `KerasTrainImageClassifier`)
   - Connect `KerasEvaluateAccuracy` to the `Finish` node to complete the workflow.

   <p align="center">
   <img width="100%" src="/img/docs/tutorial-workflow-from-scratch-01.png"></img>
   <figcaption class="image-caption">Connecting the Components</figcaption>
   </p>

   Notice how Xircuits automatically connects some ports for you. For example, when you connect `ReadKerasDataSet` to `TrainTestSplit`, the `dataset` outPort of `ReadKerasDataSet` is automatically connected to the `dataset` inPort of `TrainTestSplit`. This smart linking feature helps connect ports with similar names and compatible types.

### Completing Compulsory Connections

Try running the workflow now. You'll likely encounter an error message: "Please connect all [★]COMPULSORY InPorts." In Xircuits, ports marked with a ★ are compulsory and must be connected.

Take a moment to observe which compulsory inPorts aren't connected yet. Can you make educated guesses on how to connect them?

Here's what you need to do:
1. Connect `TrainTestSplit`'s `train` outPort to **both** `KerasCreate2DModel`'s and `KerasTrainImageClassifier`'s `training_data` inPort.
2. Connect `TrainTestSplit`'s `test` outPort to `KerasEvaluateAccuracy`'s `eval_dataset` inPort.

   <p align="center">
   <img width="100%" src="/img/docs/tutorial-workflow-from-scratch-02.png"></img>
   <figcaption class="image-caption">Providing Data between Components</figcaption>
   </p>

   Hovering over a link or port will highlight the connections.

:::tip

If you find it difficult to see or manage connections between components, you can create custom routes for better clarity. Simply hold the `Ctrl` key and click on a link to create waypoints along the connection line, allowing you to route it around other components or organize your workflow visually.

:::

### Modifying Workflow Behavior with Parameter Components

Parameter components allow you to set fixed values that can be used by other components in the workflow. Let's add some parameters using two different methods:

#### Method 1: Dragging Components from the Tray

1. Drag a `Literal String` component onto the canvas from the component tray.
2. Set its value to "mnist".
3. Connect this `Literal String` component to the `dataset_name` input port of the `ReadKerasDataSet` component.

#### Method 2: Pulling Out a Link from the Port

1. Click on the `training_epochs` input port of the `KerasTrainImageClassifier` component.
2. Drag outwards to create a link. This will automatically spawn the appropriate input dialogue.
3. In the dialogue that appears, enter the integer value 5.
4. Press Enter to confirm the value.

<p align="center">
<img width="100%" src="/img/docs/tutorial-workflow-from-scratch-03.png"></img>
<figcaption class="image-caption">Supplying Parameter Components</figcaption>
</p>


Both methods achieve the same result, creating parameter components that feed values into your workflow. The second method can be quicker as it automatically creates the correct type of literal component based on the port you're connecting to.

Using parameter components like these helps in making workflows flexible and easily configurable. You can easily change these values to adjust your workflow's behavior without modifying the core components.

Try both methods and see which one you prefer. As you become more comfortable with Xircuits, you'll likely find yourself using a combination of both techniques depending on the situation.

## Launching Your Workflow

Now it's time to see your creation in action:

1. Press the `Save & Compile` button.
2. Select the Python kernel to execute the workflow.

You should see output similar to this:

```plaintext
======================================
__   __  ___                _ _
\ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
 \ \  \  /| | '__/ __| | | | | __/ __|
 / /  /  \| | | | (__| |_| | | |_\__ \
/_/  /_/\_\_|_|  \___|\__,_|_|\__|___/
======================================
Xircuits is running...
Executing: ReadKerasDataSet
Executing: TrainTestSplit
Executing: KerasCreate2DInputModel
Executing: KerasTrainImageClassifier
Epoch 1/5
...
Executing: KerasEvaluateAccuracy
{'loss': '0.07967730611562729', 'accuracy': '0.975803554058075'}
Finish Executing

```

Congratulations! You've just created a complex workflow from scratch, installed necessary libraries, and learned how to use literal components to customize your workflow parameters.
As you become more comfortable with Xircuits, try exploring more components and creating more intricate workflows.