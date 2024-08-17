---
sidebar_position: 1
id: creating-a-xircuits-component
title: Creating a Xircuits Component
tags:
  - component dev
  - tutorials
---

# Creating a Xircuits Component

This guide provides a quick reference for creating Xircuits components, covering component declaration, ports, argument types, and data passing between components.

Xircuits components are modular units of code that can be linked together to form workflows. These components can take inputs, perform operations, and produce outputs, facilitating complex data processing and automation tasks. 

## Component Syntax Cheatsheet

```python
from xai_components.base import InArg, OutArg, InCompArg, Component, xai_component

# Define a Xircuits component with the @xai_component decorator
@xai_component(color="blue")  # Set the color for the component in the Xircuits canvas
class ComponentName(Component):

    # Define input and output ports as class properties
    input_str: InArg[str]  # Input port for a string argument
    input_int: InArg[int]  # Input port for an integer argument
    output_int: OutArg[int]  # Output port for an integer argument

    def __init__(self):
        super().__init__()
        # Initialize default values for input ports
        self.input_str.value = "Default Value!"

    def execute(self, ctx) -> None:
        # Access values from input ports
        input_str = self.input_str.value
        input_int = self.input_int.value if self.input_int.value else 0

        # Example operation
        print(f"Hello {input_str}, the number is {input_int}")

        # Generate a random integer and set it to the output port
        import random
        self.output_int.value = random.randint(0, 100)
```

### Types of Ports

- **InArg:** Input argument
- **OutArg:** Output argument
- **InCompArg:** Compulsory input component argument

### Argument Types

- String: `InArg[str]`
- Integer: `InArg[int]`
- Boolean: `InArg[bool]`
- Float: `InArg[float]`
- Any: `InArg[Any]` (bypasses type checking)

## Creating Your First Component

1. Create a new Python file (e.g., `MyComponent.py`) in your `xai_components` directory.
2. Copy the cheatsheet code and modify it for your component.
3. Implement your component logic in the `execute` method.

## Setting Default Values

You can set default values for input ports in two ways:

1. In the `__init__` method:
   ```python
   def __init__(self):
       super().__init__()
       self.input_str.value = "Default Value!"
   ```

2. In the `execute` method:
   ```python
   def execute(self, ctx) -> None:
       input_str = self.input_str.value if self.input_str.value else "Default Value"
   ```

## Passing Data between Components

There are two ways to pass data between components: through ports and by utilizing the Xircuits context (ctx). Here's how to use ports for data passing:

### Passing Data via Ports

1. **Output Component:**
   ```python
   @xai_component(color="red")
   class HelloOutComponent(Component):
       outport_example: OutArg[str]

       def execute(self, ctx) -> None:
           username = "Xircuits"
           print(f"Hello {username} from HelloOutComponent!")
           self.outport_example.value = username
   ```

2. **Input Component:**
   ```python
   @xai_component(color="red")
   class HelloInComponent(Component):
       inport_example: InArg[str]

       def execute(self, ctx) -> None:
           username = self.inport_example.value
           print(f"Hello {username} from HelloInComponent!")
   ```

### Notes on Data Passing:
- An inPort can also be linked to a `Literal` or an `Argument` component given the correct data type.
- Declaring the port type as `any` will bypass the port type check.

By following this guide and using the cheatsheet, you can quickly create custom Xircuits components and pass data between them in your workflows.