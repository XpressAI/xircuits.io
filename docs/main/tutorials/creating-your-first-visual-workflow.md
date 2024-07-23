---
sidebar_position: 2
---

# Creating Your First Visual Workflow

Welcome back to Xircuits! Now that you've learned how to install and run a basic workflow, it's time to create a more complex workflow from scratch. This tutorial will guide you through the process, introducing you to the component library, how to find and install necessary components, and how to use arguments effectively.

## Setting Up Your Workflow

Let's begin by opening Xircuits and creating a new workflow file. We'll start by launching the Xircuits interface and setting up a blank canvas to work on.

### Open Xircuits

1. **Launch Xircuits:** Open your terminal and start Xircuits with the following command:

    ```bash
    xircuits
    ```

This command will open the Xircuits interface, where you can start building your new workflow.

### Create a New Workflow

1. **Create a New File:** In the Xircuits interface, click on `File > New` to create a new workflow file. Name your file `MyFirstWorkflow.xircuits`.

2. **Start Node:** You will see a `Start` node automatically placed on the canvas. This is where your workflow begins.

## Exploring the Component Library

Now, let's explore the component library, which contains various pre-built components for your workflows. You'll learn how to search for components and install new ones if needed.

### Adding Components

1. **Open Component Library:** On the left side of the Xircuits interface, you will find the component library tray. This tray contains various pre-built components that you can use in your workflow.

2. **Search for Components:** Use the search bar at the top of the component library to find specific components. For example, search for `ReadDataSet` and drag it onto the canvas.

3. **Connecting Components:** Connect the `Start` node to the `ReadDataSet` component by clicking on the small circles (ports) and dragging to create a link.

### Using External Libraries

Sometimes, you might need a library that is not installed. Here's how to add it:

1. **Install New Libraries:** In the component library tray, look for libraries listed under `Available for Installation`. Libraries in white are remote and can be installed.
   
2. **Install Example:** Right-click on a library you need (e.g., `xai_tensorflow_keras`) and select `Install`. The library will be cloned to the `xai_components` directory. You will be prompted to choose a kernel, which will execute the `pip install` command to install the library.

After the installation is complete, the component library will be ready for use.

## Building the Workflow

Let's add and connect more components to build a complete workflow. You'll also learn how to configure these components with parameters.

### Adding More Components

1. **Add TrainTestSplit:** Search for `TrainTestSplit` in the component library and add it to the canvas. Connect it to the `ReadDataSet` component.

2. **Add Create2DInputModel:** Similarly, find and add `Create2DInputModel` and connect it to the `TrainTestSplit` component.

3. **Add TrainImageClassifier:** Add `TrainImageClassifier` next, and link it to the `Create2DInputModel` component.

4. **Add EvaluateAccuracy:** Finally, add `EvaluateAccuracy` and connect it to the `TrainImageClassifier` component.

5. **Finish Node:** Connect the `EvaluateAccuracy` component to the `Finish` node to complete the workflow.

### Configuring Components

1. **Edit Parameters:** Double-click on the `TrainImageClassifier` component to edit its parameters. Set the `training_epochs` parameter to 5.

### Using Literal and Argument Components

1. **Literal Component:** To set fixed parameters, use the Literal component. Drag a Literal component onto the canvas, set its value to 5, and connect it to the `training_epochs` input of `TrainImageClassifier`.

2. **Argument Component:** For customizable parameters, use the Argument component. This allows flexibility when running the workflow outside Xircuits.

    ```python
    from xai_learning.training import TrainImageClassifier

    def main(args):
        ...
        c_4.training_epochs.value = args.epoch
        ...
    
    if __name__ == '__main__':
        parser = ArgumentParser()
        parser.add_argument('--epoch', default=5, type=int)
        main(parser.parse_args())
    ```

## Saving and Running the Workflow

Learn how to save and compile your workflow, and then execute it to see the results.

### Save and Compile

1. **Save Your Workflow:** Click `Save` to save your workflow.
2. **Compile the Workflow:** Click `Compile` to generate the corresponding Python script.

### Run the Workflow

1. **Execute Workflow:** Press the `Save & Compile` button. Select the Python kernel to execute the workflow. You should see the output indicating the workflow is running.

```plaintext
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

## Additional Tips

Finally, we'll cover some additional tips, including how to run the generated script from the command line for greater flexibility.

### Running the Script from the Command Line

1. **Set Python Path:**

    ```bash
    export PYTHONPATH="$PWD:$PYTHONPATH"
    ```

2. **Run Script:**

    ```bash
    python MyFirstWorkflow.py --epoch 5
    ```

By following these steps, you’ve created a more complex workflow from scratch, installed necessary libraries, and learned how to use literal and argument components to customize your workflow parameters. Explore more components and workflows to further enhance your Xircuits skills. Happy experimenting!
