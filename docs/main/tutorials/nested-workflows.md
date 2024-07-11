# Nested Workflows

Xircuits allows users to create modular, reusable workflows that can be integrated into larger workflows using workflow components. Workflow components function like subroutines or functions in traditional programming, encapsulating specific tasks or logic within a reusable piece that can be embedded in a larger workflow.

## Workflow Components

Workflow components are Xircuits workflows designed to be reusable within other workflows by accepting values and passing the results to an outside workflow. 

<p align="center">
  <img width="50%" src="/img/docs/tutorials/workflow_component.png"></img>
  <figcaption class="image-caption">Workflow Components</figcaption>
</p>


:::info

When a workflow is compiled, the `@xai_component(type='xircuits_workflow')` type decorator is added. This type decorator ensures that the compiled workflow is recognized as a workflow component. Here is an example of how it is applied:

<details>
<summary>Code Snippet</summary>

<p>

```python
@xai_component(type='xircuits_workflow')
class Inner(Component):

    def __init__(self):
        super().__init__()
        self.__start_nodes__ = []
        self.c_0 = Print()
        self.c_0.msg.value = 'Hello workflow component!'
        self.c_0.next = None

    def execute(self, ctx):
        for node in self.__start_nodes__:
            if hasattr(node, 'init'):
                node.init(ctx)
        next_component = self.c_0
        while next_component is not None:
            next_component = next_component.do(ctx)
```
</p>
</details>

:::

### Requirements
- The library must be inside the `xai_components` directory.
- The library directory must have the `xai_` prefix.
- The library must have a `__init__.py` for Python to recognize it as a package.

## Creating a Workflow Component

### Steps
1. **Create a Workflow**
   - Create a new workflow in a valid Xircuits component library path.
   - Design the workflow with necessary components.

2. **Save and Compile**
   - Save the workflow.
   - Compile and run the workflow to verify functionality.

3. **Using the Workflow Component**
   - Compiled workflows appear in the component library tray and can be used in new workflows.


<div style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UAgILvaAUGY?si=dUijfS9u4PtPi_eu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen></iframe>
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



## Important

- Workflow components must be saved and compiled in a valid component library path to be recognized.
- Ensure correct setup of the directory and naming conventions for successful component creation and usage.



