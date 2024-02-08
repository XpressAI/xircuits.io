---
sidebar_position: 1
---

# Running a Xircuits Workflow

This quick start tutorial will guide you through common steps when running a Xircuits workflow, which includes installing a component library, opening an existing workflow example, modifying its parameters to fit your needs, and executing the workflow.

Before starting, ensure that:
1. Your Python version is compatible (Python 3.8+ is required).
2. You have already installed Xircuits.

If you're interested in just running basic examples, we'd recommend trying out the workflows in the `examples` directory which covers core topics and does not require additional installations.

## Installing Component Libraries

Often when working with advanced workflows, installing their component libraries is necessary. You have two main options:

- Clone the component library repository and install its requirements.
- Use the `xircuits install` command for a straightforward installation:

    ```
    xircuits install tensorflow_keras
    ```

This command lets you seamlessly integrate additional TensorFlow Keras components into Xircuits.

:::note
The `xircuits install` command works with supported submodules listed in the [library list](https://github.com/XpressAI/xircuits/tree/master/xai_components#external-library). You can also provide it a Github URL.
:::

## Opening an Existing Xircuits File

For those new to Xircuits, exploring pre-made workflows is an excellent way to start. Each component library, including `xai_tensorflow_keras`, should come with its own set of example workflows located in its `examples` directory. These workflow examples are tailored to demonstrate the capabilities of the specific library and help users familiarize themselves with its components.

**For this tutorial, navigate to the `xai_components/xai_tensorflow_keras/examples/` directory and open a `.xircuits` file of your choice.**

Alternatively, once you've installed a component library, you can access these examples directly within Xircuits. Simply right-click on the library in the component tray and select 'Show Examples' from the context menu to explore available workflows.


## Viewing and Interpreting the Xircuits Canvas

Upon opening a Xircuits canvas, you will see the [Xircuits Interface](../xircuits-interface). The workflow progresses from the `Start` node to the `Finish` node, with the sequence indicated by blue links connecting the nodes. Nodes may also have parameter ports for input and output, allowing you to pass data.

If you need more information about what a component does, click on its tooltip. For those comfortable with Python, the component code can be accessed and edited via the context menu (right-click > Open Script).

**Explore the components and their sequence in the KerasTrainImageClassifier workflow.**

## Modifying the Xircuits Workflow

Typically, you'll begin with a provided workflow and adjust its parameters. To change `Literal Components` like `Literal Int` or `Literal String`, double-click on the component to edit its value.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/xircuits-interface/edit-literal.gif"></img></p>
</details>

You can also add more components from the component tray or by dragging a link from an existing port.

**Try changing the `training_epochs` parameter in the TrainImageClassifier component to 3.**

## Saving and Compiling a Xircuits Canvas Workflow

After modifying your workflow, save and compile it. This action generates a Python script with the same name as your .xircuits file.

**Click 'Save' followed by 'Compile', and verify that the Python script has been created.**

## Running the Workflow

To run the workflow, press the `Save & Compile` button. If unsaved changes exist, you'll be prompted to save. Choose the Python kernel to execute the workflow.

**After saving and compiling, the following output should appear:**

<details>

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
    Split Parameters:
    Train Split 0.8 
    Shuffle: True 
    Random State: None

    Executing: Create2DInputModel
    x_shape=(28, 28, 1)
    y_shape=10

    Executing: TrainImageClassifier
    Epoch 1/3
    438/438 [==============================] - 17s 14ms/step - loss: 0.4883 - accuracy: 0.8467
    Epoch 2/3
    438/438 [==============================] - 5s 11ms/step - loss: 0.1591 - accuracy: 0.9521
    Epoch 3/3
    438/438 [==============================] - 4s 10ms/step - loss: 0.1144 - accuracy: 0.9651

    Executing: EvaluateAccuracy
    {'loss': '0.07967730611562729', 'accuracy': '0.975803554058075'}

    Finish Executing
    
</details><br></br>

Congratulations on successfully running your first Xircuits workflow! This foundational knowledge will enable you to explore other example workflows created by our engineers and the open-source community. Check out the [Examples](docs/category/use-case-examples/) section for more.


### Additional Notes

You can also run the compiled script directly from the command line by adding your working directory to the Python path:

```bash
export PYTHONPATH="$PWD:$PYTHONPATH"
```

Then execute the script with:

```bash
python KerasTrainImageClassifier.py
```


This ensures the Python interpreter recognizes the modules in your base directory.


### Commonly Faced Errors

<details>
  <b>ModuleNotFoundError</b>

  This indicates that the required libraries for the component library in use are missing. Ensure all prerequisites are met before starting.

  <b>Please connect all the nodes before running.</b>

  A complete Xircuits workflow is essential for a successful run. Make sure all nodes are connected from `Start` to `Finish`.
</details><br></br>
