---
sidebar_position: 2
---

# Your First Xircuits Workflow

The following tutorial will walk you through a basic Xircuits run. You will open an existing Xircuits workflow that trains a model, learn how to modify the parameters for your use case, and then run it.

## Prerequisites
1. For this tutorial, please ensure that you already have the `xai_learning` related libraries installed. You can do this by `pip install xircuits[learning]` or by `pip install -r xai_components/xai_learning/requirements.txt`.
2. Ensure that you have the `examples` folder in your working directory. After Xircuits is installed, you can download it by running `xircuits-examples` in the command line.

## Opening an existing Xircuits File
New Xircuits users are recommended to start with premade Xircuits workflow templates created by developers. The task would be to change the parameters for their use case. In Xircuits, we have created a handful of templates for you to try in the examples directory. 

**For this tutorial, open `KerasTrainImageClassifier.xircuits` in the example directory.**

## Viewing and Interpreting the Xircuits Canvas

Once the Xircuits canvas is open, you will see the [Xircuits Interface](../getting-started/xircuits-interface.md). 

A Xircuits workflow starts from the `Start` node to the `Finish` node. The flow sequence is indicated by the flowing blue links connecting the ▶ ports. A component node may also have data ports, which indicates how a component can receive data and parameters to configure their behavior, as well as pass data to the next nodes.

If you are unsure what a component does, you can click on the component information tooltip to display component information. For Python savvy users, you may open the component code via context menu (`right-click` > `Open Script`).

**Explore the KerasTrainImageClassifier workflow. Note the component sequence.**

## Modifying the Xircuits Workflow

As previously mentioned, a Xircuits User will usually work on a premade workflow template and adjust the parameter components for their use case. To modify `Literal Components` such as `Literal Int` or `Literal String`, simply double click on the component, and you will be prompted to change the value.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/getting-started/edit-literal.gif"></img></p>
</details>

For more advanced users, you may add more component nodes from the Xircuits component tray, or by dropping a link from a port.

**Refer to the TrainImageClassifier component. Modify the number of training_epochs to 3.**

## Saving and Compiling a Xircuits Canvas Workflow

Once you are satisfied with your workflow, you can save and compile the Xircuits workflow. A Python script with the same filename as the .xircuits canvas will be generated.

**Press Save then Compile, then verify that the Python script has been generated.**

## Running the Workflow

To run the workflow, press the `Save & Compile` button. It will prompt you to save the workflow if you haven't. Select the Python kernel to run it. 

**Press Save then Compile button. You should get the following output:**

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


Congratulations you have successfully ran your first Xircuits workflow! From here, you should be able to run any Xircuits template examples. Jump to the [Examples](../category/examples/) section if you want to see the various templates made by our engineers and open source contributors.



### Commonly Faced Errors:
<details>
  <b>ModuleNotFoundError</b>

  You have not installed the needed libraries for that specific component library! For this tutorial, ensure that you have run the prerequisites.

  <b>Please connect all the nodes before running.</b>

  The Xircuits workflow is not complete! Please ensure the blue links from the `Start` node to the `Finish` node is completely connected.
</details><br></br>
