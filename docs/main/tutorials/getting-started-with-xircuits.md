---
sidebar_position: 1
---

# Getting Started with Xircuits

Welcome to Xircuits! This tutorial will walk you through installing Xircuits, starting it, opening and modifying a workflow, and finally running it in JupyterLab.

## Installation

Before you begin, ensure you have Python 3.8 or later installed on your machine. It's recommended to use a virtual environment to keep your dependencies isolated. Follow these steps to install Xircuits:

1. **Set up your virtual environment:** Open your terminal and create a virtual environment. You can do this with the following commands:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
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

In Xircuits, you'll be working with pipelines that we call `workflows`. They are files with the `.xircuits` extension. 

### Open an Example File

To get started with a simple workflow, let's open a pre-existing example file:

1. **Navigate to Examples:** In the Xircuits interface, use the file browser to navigate to the `xai_components/xai_template/` directory.
2. **Select an Example:** Open the `HelloTutorial.xircuits` file. This simple workflow demonstrates how to concatenate strings and print the result. You can also right-click on the library in the component tray within Xircuits and select 'Show Examples' to explore other available workflows.

### Understand the Workflow Logic

Once you open a .xircuits file, you will see a visual representation of your workflow. Here's what you need to know:

1. **Workflow Sequence:** A typical workflow progresses from the `Start` node to the `Finish` node. You can have an infinite number of nodes between Start and Finish, which are connected by a blue flowing link which indicates the sequence of execution.

2. **Nodes and Links:** Nodes represent components within your workflow and are connected by links. There are two common types of nodes:
    - **Component Nodes:** These nodes perform actions or tasks within your workflow. They have flow ports at the top to manage the execution flow, with at least one flow inPort and outPort. The flow links connecting these ports are blue and flowing, indicating the execution sequence of the workflow.
    - **Parameter Nodes:** These nodes supply values to the component nodes, influencing their behavior. They do not have icons and are connected to the component nodes via solid gray links. You can edit the values of parameter nodes by double-clicking on them.

3. **HelloTutorial Workflow:** In this example, you'll see four main components:
   - Start: The beginning of the workflow
   - ConcatString: Combines two strings
   - Print: Outputs the result
   - Finish: Marks the end of the workflow

   There are also two Literal components connected to ConcatString, providing the strings "Hello " and "Xircuits!" to be concatenated.

### Modifying the Workflow

You may want to customize workflows to suit your specific needs. Xircuits makes it easy to update workflows by adjusting the parameter components.

#### Editing Component Parameters

To modify a component's behavior:

1. **Double-Click to Edit:** Simply double-click on any parameter components to open its parameter editor.
2. **Adjust Values:** Change the values as needed.
3. **Apply Changes:** Press `Enter` to update the node's behavior in the workflow.

The updated values should be reflected on the canvas as well.

Let's modify the HelloTutorial workflow:

1. **Locate a Literal Component:** Find one of the Literal components connected to the ConcatString node. It should contain either "Hello " or "Xircuits!".
2. **Edit the Literal:** Double-click on the Literal component you want to change.
3. **Update the Value:** Replace the existing text with a greeting or name of your choice. For example, you could change "Hello " to "Greetings, " or "Xircuits!" to your name.
4. **Apply Changes:** Press `Enter` to update the component's value.

This modification will change the output of your workflow when you run it.

### Compile and Run

Once you're happy with the workflow, you need to compile and run it:

1. **Save & Compile:** Click 'Save' to save your workflow.
2. **Compile the Workflow:** Click 'Compile' to generate a Python script with the same name as your `.xircuits` file.
3. **Run the Workflow:** Select the Python kernel to execute the workflow.

You should see output indicating the workflow is running, including the execution steps and results. For the HelloTutorial workflow, you'll see something like this:

```plaintext
======================================
__   __  ___                _ _
\ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
 \ \  \  /| | '__/ __| | | | | __/ __|
 / /  /  \| | | | (__| |_| | | |_\__ \
/_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

======================================

Xircuits is running...


Executing: HelloTutorial

Executing: ConcatString

Executing: Print
Hello Xircuits!

Finished Executing
```

## Visual Walkthrough
For a visual demonstration of the steps mentioned above, you can watch the tutorial video below. 

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Hs_ZX7-VcGM?si=-1L1zz6qWEzwh9Bf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

Congratulations on running your first Xircuits workflow! You have learned how to install Xircuits, launch it, open a prebuilt Xircuits workflow, modify and execute it.

You can explore other example workflows to see how things are done in Xircuits. Once you're ready, we'll move on to the next step - creating your own visual workflow from scratch.