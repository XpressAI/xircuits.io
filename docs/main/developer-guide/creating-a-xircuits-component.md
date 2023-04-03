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

    # add your ports as class properties
    input_str: InArg[str]
    output_int: OutArg[int]

    def execute(self, ctx) -> None:
        input_str = self.input_str.value
        print("Hello " + input_str)

        import random
        x = random.randint(0, 100)
        self.output_int.value = x
```
## How to Create a Xircuits Component

1. Create `SampleComponent.py` inside one of the `xai_components` directories, eg `xai_components/xai_template`. 
2. Inside `SampleComponent.py`, add the essential imports: `import InArg, OutArg, Component, xai_component`.
3. Create your component class which inherits Component, ie `class HelloXircuits(Component)`.
4. To indicate that your Python class is an Xircuits Component, you would need to add the `@xai_component()` decorator above it.
6. Your execute() call must pass `self` and context `ctx`.
7. Xircuits enable variables to be passed by reference through the `InArg` and `OutArg`. You only need to specify them in the class properties, unless you would like to set a default value. 

<details>
<summary>Video</summary>
  <p align="center">
  <img src="/img/docs/developer-guide/create-new-component.gif"></img></p>
</details><br></br>

And you're done! Press refresh on the component tray and the component should be correctly rendered, automatically usable in the Xircuits canvas.

### Initializing Values

Often you would like to set a default value for an inArg if say the user does not supply the parameter in the canvas. To do this, there are 2 methods. 
1. Set the default value after calling `super().__init__()` in the `__init__` method of your component class.
2. Setting the default value using a conditional expression inside the execute method.

Below is the previous `HelloNewLibrary` component modified that shows the two methods.

```
@xai_component
class HelloNewLibrary(Component):

    input_str: InArg[str]
    input_int: InArg[int]

    # method 1 
    def __init__(self):
        super().__init__()
        self.input_str.value = "Default Value!"

    def execute(self, ctx) -> None:

        input_str = self.input_str.value

        # method 2
        input_int = self.input_int.value if self.input_int.value else 554
        
        
        print("Hello " + input_str)
        print("Hello " + str(input_int))
```

### Things You Might Want to Know

- Xircuits performs type checking when linking parameters. In this example, if the user attempts to link a parameter that is not a string to the input_str port, it will throw a tooltip error.
- We encourage users to have library imports inside execute() instead of at the header for one-time use cases to avoid cluttering your namespace. 
- `ctx` is a dictionary that is available to all components to access. If you would like to include information globally, simply add that information in the dict via `ctx.update()`. Read more at [Xircuits Context(ctx)](main/technical-concepts/xircuits-context.md) on how to use it.