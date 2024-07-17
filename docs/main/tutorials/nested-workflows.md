# Nesting Workflows

Xircuits allows users to create modular, reusable workflows that can be integrated into larger workflows using `workflow components`. Workflow components function like subroutines or functions in traditional programming, encapsulating specific tasks or logic within a reusable piece that can be embedded in a larger workflow.

<p align="center">
  <img width="50%" src="/img/docs/tutorials/workflow_component.png"></img>
  <figcaption class="image-caption">Workflow Components</figcaption>
</p>

## Creating a Workflow Component

### Prerequisites

Workflow components that are created from workflows must be created in a valid component library path. Therefore you can either use an existing component library or create one from scratch. 

:::tip

If you're creating a component library from scratch, ensure that:
- The library is located inside the `xai_components` directory.
- The library directory has the `xai_` prefix.
- The library includes a `__init__.py` file for Python to recognize it as a package.

:::

### Steps
1. **Create a Workflow**
   - Create a new workflow in a valid Xircuits component library path.
   - Design the workflow with necessary components.

2. **Save and Compile**
   - Save the workflow.
   - Compile and run the workflow to verify functionality.

3. **Using the Workflow Component**
   - Compiled workflows appear in the component library tray and can be used in new workflows.


<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UAgILvaAUGY?si=dUijfS9u4PtPi_eu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

## Passing Parameters

Workflow components can accept parameters and return results, similar to function calls in programming.

### Steps
1. **Open a Workflow Component**
   - If you already have a workflow component in your workflow, you can right-click on it and select `Open Workflow`. 

2. **Setting Inputs**
   - Replace Literals in the workflow with components that will become the inPorts for the workflow component.

3. **Setting Outputs**
   - Connect outputs to the `Finish` component's outPort to pass results from the workflow.

4. **Compile and Verify**
   - Compile it. You may also run it to verify that the component works on its own.

5. **Use the Modified Workflow Component**
   - In another workflow, add or reload the modified workflow component. The inPorts will correspond to the specified components, and there will be an output port for the workflow results.

6. **Connect and Run**
   - Connect appropriate inputs to the workflow component and run the workflow to ensure it works as expected.

<div className="iframe-container">

<iframe width="560" height="315" src="https://www.youtube.com/embed/UZLZ9Z0RdXY?si=wMcd8jLSL06KJX1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  allow="fullscreen;"></iframe>

</div>

By following these steps, you have successfully created and integrated a reusable workflow component in Xircuits. This allows for greater modularity and reusability in your workflow designs, enhancing efficiency and maintainability.

## Reminders

- Workflow components **must** be saved and **compiled** in a valid component library path to be recognized.
- Ensure correct setup of the directory and naming conventions for successful component creation and usage.

For more additional details on how `workflow component` works, you can refer to the [workflow component](workflow-component) page.