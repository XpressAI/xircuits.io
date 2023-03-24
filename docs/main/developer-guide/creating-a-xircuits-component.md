---
sidebar_position: 1
id: creating-a-xircuits-component
title: Creating a Xircuits Component
tags:
  - component dev
  - tutorials
---

Xircuits allow users to create their own components with ease. The example below showcases the basic structure of an Xircuits Component that takes in a string and outputs a random integer.

```
# SampleComponent.py

from xai_components.base import InArg, OutArg, Component, xai_component

@xai_component
class HelloNewLibrary(Component):
    input_str: InArg[str]
    output_int: OutArg[int]

    def __init__(self):
        self.input_str = InArg.empty()
        self.output_int = OutArg.empty()
        self.done = False

    def execute(self, ctx) -> None:
        input_str = self.input_str.value
        print("Hello " + input_str)

        import random
        x = random.randint(0, 100)
        self.output_int.value = x

        self.done = False

```
## How to Create a Xircuits Component

1. Create `SampleComponent.py` inside one of the `xai_components` directories, eg `xai_components/xai_template`. 
2. Inside `SampleComponent.py`, add the essential imports: `import InArg, OutArg, Component, xai_component`.
3. Create your component class which inherits Component, ie `class HelloXircuits(Component)`.
4. To indicate that your Python class is an Xircuits Component, you would need to add the `@xai_component()` decorator above it.
6. Your execute() call must pass `self` and context `ctx`.
7. Xircuits enable variables to be passed by reference through the `InArg` and `OutArg`. Please initialize them in `__init__` and specify them as class properties.
8. The `self.done` attribute is needed for the Xircuits debugger. It needs to be initialized in the `__init__` as well as at the end of the `execute()` segment.

<details>
<summary>Video</summary>
  <p align="center">
  <img src="/img/docs/developer-guide/create-new-component.gif"></img></p>
</details><br></br>

And you're done! Press refresh on the component tray and the component should be correctly rendered, automatically usable in the Xircuits canvas.


### Things You Might Want to Know

- Xircuits performs type checking when linking parameters. In this example, if the user attempts to link a parameter that is not a string to the input_str port, it will throw a tooltip error.
- We encourage users to have library imports inside execute() instead of at the header for one-time use cases to avoid cluttering your namespace. 
- `ctx` is a dictionary that is available to all components to access. If you would like to include information globally, simply add that information in the dict via `ctx.update()`. Read more at [Xircuits Context(ctx)](main/technical-concepts/xircuits-context.md).