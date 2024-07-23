---
sidebar_position: 1
---

# Getting Started with Xircuits in JupyterLab

Welcome to Xircuits! This tutorial will walk you through installing Xircuits, starting it, and running a basic "Hello World" example in JupyterLab.

## Installation

Before you begin, ensure you have Python 3.8 or later installed on your machine. It's highly recommended to use a virtual environment to keep your dependencies isolated. Follow these steps to install Xircuits:

1. **Set up your virtual environment:** Open your terminal and create a virtual environment. You can do this with the following commands:

    ```bash
    python -m venv xircuits_env
    source xircuits_env/bin/activate  # On Windows, use `xircuits_env\Scripts\activate`
    ```

2. **Install Xircuits:** With your virtual environment activated, install Xircuits using pip:

    ```bash
    pip install xircuits
    ```

This command will download and install all the necessary packages for Xircuits.

## Launching Xircuits

After installing Xircuits, you need to launch it to start building workflows. Follow these steps:

1. **Start Xircuits:** Run the following command in your terminal:

    ```bash
    xircuits
    ```

This command will launch the Xircuits interface, where you can build and manage your workflows.

## Running a "Hello World" Example

### Open an Example File

To get started with a simple workflow, let's open a pre-existing example file:

1. **Navigate to Examples:** In the Xircuits interface, navigate to the `xai_components/xai_tensorflow_keras/examples/` directory.
2. **Select an Example:** Open any `.xircuits` file of your choice. You can also right-click on the library in the component tray within Xircuits and select 'Show Examples' to explore available workflows.

### View the Xircuits Canvas

Once you open a Xircuits canvas, you will see a visual representation of your workflow. Here’s what you need to know:

1. **Workflow Structure:** The workflow progresses from the `Start` node to the `Finish` node, connected by blue links.
2. **Nodes and Links:** Nodes represent components, and links represent the flow of data between these components. Each node may have parameter ports for input and output, allowing you to pass data between components.

### Modify the Workflow

Customizing your workflow is simple:

1. **Edit Parameters:** Double-click on a component to edit its parameters. For example, you can change the `training_epochs` parameter in the `TrainImageClassifier` component to 3.
2. **Add Components:** Drag components from the component tray into your workflow or create links between nodes to add more functionality.

### Save and Compile

After making your modifications, you need to save and compile the workflow:

1. **Save Your Changes:** Click 'Save' to save your workflow.
2. **Compile the Workflow:** Click 'Compile' to generate a Python script with the same name as your `.xircuits` file.

### Run the Workflow

Now, let's execute the workflow:

1. **Save & Compile:** Press the `Save & Compile` button. If there are unsaved changes, you’ll be prompted to save them.
2. **Choose Python Kernel:** Select the Python kernel to execute the workflow.

You should see output indicating the workflow is running, including training progress and results. For example:

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
```

Congratulations on running your first Xircuits workflow! 

### Additional Notes

You can also run the compiled script from the command line:

1. **Add to Python Path:** Add your working directory to the Python path:

    ```bash
    export PYTHONPATH="$PWD:$PYTHONPATH"
    ```

2. **Execute the Script:** Run the script using Python:

    ```bash
    python KerasTrainImageClassifier.py
    ```

Explore other example workflows to practice and familiarize yourself with Xircuits. Happy experimenting!
