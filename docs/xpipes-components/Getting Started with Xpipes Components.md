---
sidebar_position: 1
---

# Getting Started with Xpipes Components

## Introduction

Xpipes components enables users to perform complex ML workflows by simply dragging components to the panel and connecting them together. There are two types of components:

- **General Components**: These components are daily components such as Literal String and Ints. that you'll use in any Xpipes. They are hardbaked into the Xpipes distribution and you can use them out of the box.

- **Advanced Components**: These components such as Keras and Spark are specific usage components which users can install seperately.


## Creating Your Own Components

Xpipes allow users to create their own components with ease. The example below showcases the basic structure of an Xpipes Component that takes in a string and outputs a random integer.

```
# SampleComponent.py

class HelloXpipes(Component):
    input_str: InArg[str]
    output_int: OutArg[int]


    def __init__(self):
        self.input_str = InArg.empty()
        self.output_int = OutArg.empty()

    def execute(self) -> None:
        input_str = self.input_str.value
        print("Hello " + input_str)

        import random
        x = random.randint(0, 100)
        self.output_int.value = x
```
Save SampleComponent.py inside the xai_components folder for the Xpipes Component Tray to find. You may need to press the Component Tray refresh button. HelloXpipes component should be available for you use. 

### In Depth

- Your class must inherit Component, ie `class HelloXpipes(Component)`.  
- Xpipes enable variables to be passed by reference through the `InArg` and `OutArg`. Please intialize them in `__init__` and specify them as class properties. 
```
input_str: InArg[str]
output_int: OutArg[int]

def __init__(self):
        self.input_str = InArg.empty()
        self.output_int = OutArg.empty()
```
- Xpipes performs type checking when linking parameters. In this example, if the user attempts to link a parameter that is not a string to the input_str port, it will throw a tooltip error.
- If you would like to view a specific parameter using the Xpipes debugger, we recommend adding it as an InArg or an OutArg.
- We encourage users to have library imports inside execute() instead of at the header for one-time use cases. 