---
sidebar_position: 1
id: creating-a-xircuits-component
title: Creating a Xircuits Component
tags:
  - component-library dev
  - tutorials
---

# How to Create a Xircuits Component


Xircuits allow users to create their own components with ease. The example below showcases the basic structure of an Xircuits Component that takes in a string and outputs a random integer.

```
# SampleComponent.py

from xai_components.base import InArg, OutArg, Component, xai_component

@xai_component
class HelloXircuits(Component):
    input_str: InArg[str]
    output_int: OutArg[int]


    def __init__(self):
        self.input_str = InArg.empty()
        self.output_int = OutArg.empty()

    def execute(self, ctx) -> None:
        input_str = self.input_str.value
        print("Hello " + input_str)

        import random
        x = random.randint(0, 100)
        self.output_int.value = x
```
Save SampleComponent.py inside the xai_components folder for the Xircuits Component Tray to find. You may need to press the Component Tray refresh button. HelloXircuits component should be available for you use. 

### Minimum Things You Need to Do

- Start with `import InArg, OutArg, Component, xai_component`
- To indicate that your python class is an Xircuits Component, you would need to add the `@xai_component` decorator
- Your class must inherit Component, ie `class HelloXircuits(Component)`.
- Your execute() call must pass `self` and context `ctx`.
- Xircuits enable variables to be passed by reference through the `InArg` and `OutArg`. Please initialize them in `__init__` and specify them as class properties. 

```
input_str: InArg[str]
output_int: OutArg[int]

def __init__(self):
        self.input_str = InArg.empty()
        self.output_int = OutArg.empty()
```

And you're done! The component should be correctly rendered and automatically usable in the Xircuits canvas.


### Things You Might Want to Know

- Xircuits performs type checking when linking parameters. In this example, if the user attempts to link a parameter that is not a string to the input_str port, it will throw a tooltip error.
- If you would like to view a specific parameter using the Xircuits debugger, we recommend adding it as an InArg or an OutArg.
- We encourage users to have library imports inside execute() instead of at the header for one-time use cases to avoid cluttering your namespace. 
- `ctx` is a dictionary that is available to all components to access. If you would like to include information globally, simply add that information in the dict via `ctx.update()`.