# Nested Workflows

Xircuits allows users to create modular, reusable workflows that can be easily integrated into larger workflows by using `workflow components`. Workflow components in Xircuits work like subroutines or functions in traditional programming, encapsulating specific tasks or logic within a reusable piece, which can then be embedded in a larger workflow.

This tutorial will guide you through the process of embedding or nesting workflows within each other in Xircuits. You will learn how to create an inner workflow, compile it, and then use it within a main workflow. Additionally, you will learn how to pass arguments to and from workflow components.

## Creating a Workflow Component

Workflow components are normal Xircuits workflows at their core, that you can run individually if you wish. The only difference is that you can design it to be reusable within other workflows by accepting values and passing the results of the workflow to an outside workflow.

For a workflow to be recognized as a workflow component, it must be saved and compiled in a valid component library directory.

- The library must be inside the `xircuits_components` directory.
- The library must have the `xai_` prefix.
- The library must have a `__init__.py` for Python to recognize it as a package.

### 1. Create a Workflow
- Start by creating a new workflow in a valid library path.
- Design the workflow with the necessary components.

**For this tutorial, name this workflow something like `inner_workflow.xircuits`. Add the `ConcatString` and `Print` components, adding appropriate literals.**

### 2. Save and Compile
- Save the workflow. Compile it and run it to verify it works as expected.

**Save, compile, and run the workflow to verify it works.**

### 3. Using the Workflow Component
- Workflows that are compiled in component libraries appear in the component library tray and can be used in new workflows. These workflows are now `workflow components`.
- You can connect workflow components as you would with any normal component. Simply connect, compile, and run it.

**Create a new workflow named `main_workflow` and use the `inner_workflow` component within it. Compile and run the `main_workflow` to verify it calls and executes the `inner_workflow` correctly.**

You have successfully called a workflow from another Xircuits workflow!

## Passing Parameters to and from the Workflow Component

Workflow components can accept parameters and return results, similar to how function calls work in programming.

### 1. Opening a Workflow Component
- Right-click on the workflow component and select `Open Workflow`. You can manually open it or use the function.

**Open the `inner_workflow` component by right-clicking and selecting `Open Workflow`.**

### 2. Setting the inPorts for the Workflow Component
- Replace the literals in your workflow with `Argument` components. The names of the `Argument` components will be rendered as the names of the inPorts for the workflow component.

**Replace the literals in `inner_workflow` with `Argument` components.**

### 3. Passing Results from the Workflow Component
- To pass results from this workflow to another workflow using it as a workflow component, connect the necessary outputs to the `Finish` component's `outputs` port.

**Connect the output of `ConcatString` to the `Finish` component's `outputs` port.**

### 4. Compile and Verify
- Compile the workflow. Run it to verify that the output is the same as the previous output. Ensure the workflow is compiled for it to be updated.

**Compile and run the workflow to verify the output remains the same.**

### 5. Using the Modified Workflow Component
- In another workflow, drag in the modified workflow component or reload it if it already exists. The inPorts of the workflow component should correspond to the `Argument` components, and it will have an `output` outPort that provides the results of the workflow.

**Drag in or reload the modified `inner_workflow` component in another workflow.**

### 6. Connect and Run
- Connect literals to the rerendered workflow component.
- Run the workflow and verify that it works as expected.

**Connect literals to the rerendered workflow component, run it, and verify it works as expected.**

This concludes the tutorial on embedding and nesting workflows in Xircuits. You should now be able to create complex workflows by nesting them and passing arguments efficiently between them.