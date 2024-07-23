---
sidebar_position: 4
---

# Integrating Python Code with Xircuits

Welcome to the next level of using Xircuits! In this tutorial, you’ll learn how to create a custom component library, develop custom components, and define dependencies. This will allow you to integrate your own Python code into Xircuits workflows. We assume you have the knowledge from the first two tutorials and some familiarity with Python.

## Creating a Custom Component Library

First, let's create a custom component library to house your new components.

1. **Create a New Directory:** Inside the `xai_components` directory, create a new folder named `my_custom_library`.

2. **Initialize the Library:** Create an `__init__.py` file inside `my_custom_library` to make it a Python package.

## Developing Custom Components

Now, let's create a custom component. You’ll learn how to use `InArg` and `OutArg` to handle inputs and outputs.

### Creating a Sample Component

1. **Create Component File:** Create a new file named `SampleComponent.py` inside `my_custom_library`.

2. **Add Essential Imports:**

    ```python
    from xai_components.base import InArg, OutArg, Component, xai_component
    ```

3. **Define the Component Class:**

    ```python
    @xai_component
    class HelloNewLibrary(Component):
        input_str: InArg[str]
        output_int: OutArg[int]

        def execute(self, ctx) -> None:
            input_str = self.input_str.value
            print("Hello " + input_str)
            import random
            x = random.randint(0, 100)
            self.output_int.value = x
    ```

### Initializing Values

You might want to set default values for `InArg` if the user does not supply them. Here are two methods:

1. **Set Default Value in `__init__`:**

    ```python
    def __init__(self):
        super().__init__()
        self.input_str.value = "Default Value!"
    ```

2. **Set Default Value in `execute`:**

    ```python
    def execute(self, ctx) -> None:
        input_str = self.input_str.value if self.input_str.value else "Default Value!"
    ```

### Using `InArg` and `OutArg`

- **InArg:** Used for input arguments. Example: `input_str: InArg[str]`.
- **OutArg:** Used for output arguments. Example: `output_int: OutArg[int]`.

For more details, refer to the [Xircuits Component Documentation](https://docs.xircuits.io/component-docs).

## Defining Dependencies

To define the dependencies for your custom component library, follow these steps:

1. **Create `requirements.txt`:** Inside `my_custom_library`, create a `requirements.txt` file.

2. **List Dependencies:** Add the necessary dependencies to this file. For example:

    ```
    random
    ```

### Installing Dependencies

After defining your dependencies, install them using pip:

```bash
pip install -r xai_components/my_custom_library/requirements.txt
```

## Integrating Components in Xircuits

Once you've created your components, integrate them into the Xircuits interface.

1. **Refresh the Component Tray:** In Xircuits, press the refresh button on the component tray. Your custom components should now appear and be usable in the Xircuits canvas.

### Using the Custom Component

1. **Drag and Drop:** Drag your custom `HelloNewLibrary` component onto the canvas.

2. **Connect Ports:** Link the `input_str` port to a Literal or Argument component to supply the input value. Connect the `output_int` port to the next component or the `Finish` node to print out the value.

### Example Workflow

1. **Add Components:**
    - `Start` -> `Literal` (set value to "World") -> `HelloNewLibrary` -> `Finish`

2. **Configure and Run:**
    - Configure the `Literal` component to supply a string value.
    - Link the `output_int` of `HelloNewLibrary` to the `Finish` node to print the output.

## Additional Tips

### Running the Workflow

Save and compile your workflow, then execute it to see the results.

```plaintext
Xircuits is running...
Executing: HelloNewLibrary
Hello World
Generated number: 42
Finish Executing
```

### Using the Command Line

To run the generated script from the command line:

1. **Set Python Path:**

    ```bash
    export PYTHONPATH="$PWD:$PYTHONPATH"
    ```

2. **Run Script:**

    ```bash
    python MyFirstWorkflow.py --input_str "World"
    ```

By following these steps, you've learned how to create a custom component library, develop custom components, and define dependencies. This enhances your ability to integrate your own Python code into Xircuits workflows. Keep exploring and expanding your Xircuits skills!
