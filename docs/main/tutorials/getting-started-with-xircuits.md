---
sidebar_position: 1
---

# Getting Started with Xircuits in JupyterLab

Welcome to Xircuits! This tutorial will walk you through installing Xircuits, starting it, and running a workflow in JupyterLab.

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

After installing Xircuits, you need to launch it to start building workflows.

1. **Start Xircuits:** Run the following command in your terminal:

    ```bash
    xircuits
    ```

This command will launch the Xircuits interface, where you can build and manage your workflows.

## Running a Xircuits Workflow

### Open an Example File

To get started with a simple workflow, let's open a pre-existing example file:

1. **Navigate to Examples:** In the Xircuits interface, use the file browser to navigate to the `xai_components/xai_controlflow/` directory.
2. **Select an Example:** Open any `.xircuits` file of your choice. You can also right-click on the library in the component tray within Xircuits and select 'Show Examples' to explore available workflows.

### View the Xircuits Canvas

Once you open a Xircuits canvas, you will see a visual representation of your workflow. Here’s what you need to know:

1. **Workflow Structure:** The workflow progresses from the `Start` node to the `Finish` node, connected links that represent different aspects of the workflow.

2. **Nodes and Links:** Nodes represent components within your workflow and are connected by links. There are two common types of nodes:
    - **Component Nodes:** These nodes perform actions or tasks within your workflow. They have flow ports at the top to manage the execution flow, with at least one flow inPort and outPort. The flow links connecting these ports are blue and flowing, indicating the execution sequence of the workflow.
    - **Parameter Nodes:** These nodes supply values to the component nodes, influencing their behavior. They do not have icons and are connected to the component nodes via solid gray links. You can edit the values of parameter nodes by double-clicking on them.

### Compile and Run

After observing the workflow, you need to compile and run it:

1. **Save & Compile:** Click 'Save' to save your workflow.
2. **Compile the Workflow:** Click 'Compile' to generate a Python script with the same name as your `.xircuits` file.
3. **Run the Workflow:** Select the Python kernel to execute the workflow.

You should see output indicating the workflow is running, including the execution steps and results. For example, if you opened ControlflowBranch.xircuits, on the output you'll see:

```plaintext
======================================
__   __  ___                _ _
\ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
 \ \  \  /| | '__/ __| | | | | __/ __|
 / /  /  \| | | | (__| |_| | | |_\__ \
/_/  /_/\_\_|_|  \___|\__,_|_|\__|___/
======================================
Xircuits is running...
Executing: ControlflowBranch
Executing: Print
You can chain multiple branches together!
Executing: Print
The 2nd branch is True!
Executing: Print
Finally, this will be executed once the final branch flow is complete!
Finished Executing
```


## Visual Walkthrough
For a visual demonstration of the steps mentioned above, you can watch the tutorial video below. 

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Hs_ZX7-VcGM?si=-1L1zz6qWEzwh9Bf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

Congratulations on running your first Xircuits workflow! You have learned how to install Xircuits, launch it, and run a prebuilt Xircuits workflow.

You can explore other example workflows to see how things are done in Xircuits. Once you're ready, we'll move on to the next step - creating your own visual workflow from scratch.