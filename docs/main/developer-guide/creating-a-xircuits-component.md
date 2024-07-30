---
sidebar_position: 1
id: creating-a-xircuits-component
title: Creating a Xircuits Component
tags:
  - component dev
  - tutorials
---

# Creating a Xircuits Component

Xircuits allows users to create their own components with ease. This guide will walk you through the process of developing Xircuits components, providing a comprehensive overview and a component syntax cheatsheet to serve as a quick reference.

## Introduction to Developing Xircuits Components

Xircuits components are modular units of code that can be linked together to form workflows. These components can take inputs, perform operations, and produce outputs, facilitating complex data processing and automation tasks. 

## Component Syntax Cheatsheet

This cheatsheet provides a quick reference for creating Xircuits components, covering component declaration, ports, and argument types.

### Component Initialization and Definitions

#### Component Declaration

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
        input_str = self.input_str.value if self.input_str.value else "Default Value"
        input_int = self.input_int.value if self.input_int.value else 0

        # Example operation
        print(f"Hello {input_str}, the number is {input_int}")

        # Generate a random integer and set it to the output port
        import random
        self.output_int.value = random.randint(0, 100)
```

### Types of Ports

- **InArg:** Input argument that allows data to be passed into the component.
- **OutArg:** Output argument that allows data to be passed out of the component.
- **InCompArg:** Input component argument for linking components dynamically.

### Dynamic Ports

Ports can be dynamically defined and used for various data types to allow flexible component definitions.

### Types of Args

- **String:** `InArg[str]`
- **Integer:** `InArg[int]`
- **Boolean:** `InArg[bool]`
- **Float:** `InArg[float]`
- **Any:** `InArg[Any]` (bypasses type checking)

## Creating a Xircuits Component

1. **Create `SampleComponent.py` inside a `xai_components` directory (e.g., `xai_components/xai_template`).**

2. **Add Essential Imports:**
   ```python
   from xai_components.base import InArg, OutArg, Component, xai_component
   ```

3. **Create Your Component Class:**
   ```python
   @xai_component(color="blue")
   class ComponentName(Component):
       ...
   ```

4. **Decorator:**
   Use the `@xai_component` decorator to indicate that your Python class is a Xircuits component.

5. **Ports Declaration:**
   ```python
   input_str: InArg[str]
   input_int: InArg[int]
   output_int: OutArg[int]
   ```

6. **Execute Method:**
   The `execute` method must pass `self` and context `ctx`.
   ```python
   def execute(self, ctx) -> None:
       ...
   ```

7. **Initialize Default Values:**
   ```python
   def __init__(self):
       super().__init__()
       self.input_str.value = "Default Value!"
   ```

8. **Accessing Values from Ports:**
   ```python
   input_str = self.input_str.value if self.input_str.value else "Default Value"
   input_int = self.input_int.value if self.input_int.value else 0
   ```

## Example Component Workflow

Below is an example of a Xircuits component that takes in a string and outputs a random integer. This example serves as a cheatsheet, illustrating key concepts discussed in this guide.

```python
# SampleComponent.py

from xai_components.base import InArg, OutArg, Component, xai_component

@xai_component(color="blue")
class HelloNewLibrary(Component):

    # Define ports as class properties
    input_str: InArg[str]
    output_int: OutArg[int]

    def __init__(self):
        super().__init__()
        # Initialize default values
        self.input_str.value = "Default Value!"

    def execute(self, ctx) -> None:
        # Access value from input port
        input_str = self.input_str.value if self.input_str.value else "Default Value"
        print("Hello " + input_str)

        # Generate and set a random integer to the output port
        import random
        x = random.randint(0, 100)
        self.output_int.value = x
```

## Initializing Values

There are two methods for setting default values for `InArg` if the user does not supply the parameter in the canvas.

1. **Set Default Value in `__init__`:**
   ```python
   def __init__(self):
       super().__init__()
       self.input_str.value = "Default Value!"
   ```

2. **Set Default Value in `execute`:**
   ```python
   def execute(self, ctx) -> None:
       input_str = self.input_str.value if self.input_str.value else "Default Value"
       input_int = self.input_int.value if self.input_int.value else 0
   ```

## Conclusion

By following this guide, you can create custom Xircuits components that are versatile and easy to integrate into your workflows. Use the provided examples and cheatsheet as a quick reference to streamline the development process. Happy coding!
