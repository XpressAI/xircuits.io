# Workflow Components

Workflow components are Xircuits workflows designed to be reusable within other workflows by accepting values and passing the results to an outside workflow.

<p align="center">
  <img width="50%" src="/img/docs/tutorials/workflow_component.png"></img>
  <figcaption class="image-caption">Workflow Components</figcaption>
</p>

:::info

When a workflow is compiled, the `@xai_component(type='xircuits_workflow')` type decorator is added. This type decorator ensures that the compiled workflow is recognized as a workflow component. Here is an example of how it is applied:

Example Code Snippet:

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

## Requirements

- Library must be inside the `xai_components` directory.
- Library directory must have the `xai_` prefix.
- Library must have a `__init__.py` for Python to recognize it as a package.

## Passing Parameters

Workflow components can accept parameters and return results.
- Connected `Argument` components will become the workflow component's inPorts.
- The connected outputs to the `Finish` component `outputs` will be the workflow component's outPorts.
- If you require passing data that is not a common type, use the `Literal Any` component.
- You will need to save and compile the original workflow first, then if it is already in another workflow, you'll need to reload it.

## Reminders

- Workflow components must be saved and compiled in a valid component library path to be recognized.
- Ensure correct setup of the directory and naming conventions for successful component creation and usage.


For a tutorial on how to use `workflow components`, you can refer to the [workflow component](workflow-component) tutorial.