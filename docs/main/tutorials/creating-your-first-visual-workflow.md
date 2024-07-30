---
sidebar_position: 2
---

# Creating Your First Visual Workflow

Welcome back to Xircuits! Now that you've learned how to install and run a basic workflow, it's time to create a more complex workflow from scratch. This tutorial will guide you through the process, introducing you to the component library, how to find and install necessary components, and how to use arguments effectively.

## Setting Up Your Workflow

Let's begin by opening Xircuits and creating a new workflow file. If you haven't, start by launching Xircuits and setting up a blank canvas to work on.

### Open Xircuits

1. **Launch Xircuits:** Open your terminal and start Xircuits with the following command:

    ```bash
    xircuits
    ```

This command will open Xircuits, where you can start building your new workflow.

### Create a New Workflow

1. **Create a New File:** In the Launcher interface, click on `Others > Xircuits File` to create a new workflow file. Name your file `MyFirstWorkflow.xircuits`.

2. **Start Node:** You will see a `Start` and `Finish` node automatically placed on the canvas. This is where your workflow begins.

## Exploring the Component Library

Now, let's explore the component library, which contains various pre-built components for your workflows. You'll learn how to search for components and install new ones if needed.

### Adding Components

1. **Open Component Library:** On the left side of the Xircuits interface, click on the cube-like icon, it's the component library tray. This tray contains various pre-built components that you can use in your workflow.

2. **Search for Components:** Use the search bar at the top of the component library to find specific components. For example, search for `HelloComponent` and drag it onto the canvas.

3. **Connecting Components:** Connect the `Start` node to the `HelloComponent` node by dragging from the `Start` arrow outPort to the `HelloComponent` arrow inPort.

4. **Compile and Save:** Click `Save` and then `Compile` to generate a Python script with the same name as your `.xircuits` file.

### Using External Libraries

Sometimes, you might need a library that is not installed. Here's how to add it:

1. **Install New Libraries:** In the component library tray, look for libraries listed under `Available for Installation`.
   
2. **Install Example:** Click on the `...` on a library you need (e.g., `xai_tensorflow_keras`) and select `Install`. The library will be cloned to the `xai_components` directory. You will be prompted to choose a kernel, which will execute the `pip install` command to install the library.

For this example, let's install the `xai_tensorflow` library:

1. **Install xai_tensorflow:** Click on the `...` next to `xai_tensorflow` and select `Install`. Follow the prompts to complete the installation.

After the installation is complete, the component library will be ready for use.

## Building the Workflow

Let's add and connect more components to build a complete workflow.

### Adding More Components

1. **Add and Connect Components:** Search for and drag the following components onto the canvas, connecting them in this order:
   - `ReadDataSet` (connect to `Start` node)
   - `TrainTestSplit` (connect to `ReadDataSet`)
   - `Create2DInputModel` (connect to `TrainTestSplit`)
   - `TrainImageClassifier` (connect to `Create2DInputModel`)
   - `EvaluateAccuracy` (connect to `TrainImageClassifier`)
   - Connect `EvaluateAccuracy` to the `Finish` node to complete the workflow.

### Using Parameter Components

Parameter components allow you to set fixed values that can be used by other components in the workflow. Here’s how to use them:

1. **Literal Component:** The Literal component is used to pass fixed values to other components. For example, to set the number of training epochs:
   - Drag a `Literal` component onto the canvas.
   - Double-click the `Literal` component and set its value to `5`.
   - Connect the `Literal` component to the `training_epochs` input port of the `TrainImageClassifier` component.

Using parameter components like `Literal` helps in making workflows flexible and easily configurable.

## Execute the Workflow

1. **Run the Workflow:** Press the `Save & Compile` button. Select the Python kernel to execute the workflow. You should see the output indicating the workflow is running.

```plaintext
======================================
__   __  ___                _ _
\ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
 \ \  \  /| | '__/ __| | | | | __/ __|
 / /  /  \| | | | (__| |_| | | |_\__ \
/_/  /_/\_\_|_|  \___|\__,_|_|\__|___/
======================================
Xircuits is running...
Executing: ReadDataSet
Executing: TrainTestSplit
Executing: Create2DInputModel
Executing: TrainImageClassifier
Epoch 1/5
...
Executing: EvaluateAccuracy
{'loss': '0.07967730611562729', 'accuracy': '0.975803554058075'}
Finish Executing

```

By following these steps, you’ve created a more complex workflow from scratch, installed necessary libraries, and learned how to use literal components to customize your workflow parameters. Explore more components and workflows to further enhance your Xircuits skills. Happy experimenting!