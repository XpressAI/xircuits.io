# Sub Xircuits

Sub-Xircuits is a powerful feature in Xircuits that allow users to create modular, reusable components that can be easily integrated into larger workflows. This guides you on how to provides a guide on how to use sub-Xircuits to enhance your workflows.

## Overview

Sub-Xircuits function similarly to subroutines or functions in traditional programming, encapsulating a specific set of tasks or logic within a single, reusable component. They can be thought of as mini-Xircuits that can be embedded within a larger Xircuits workflow.

### Creating a Sub-Xircuit

1. **Start by creating a new Xircuits workflow.** This is similar to initiating any project within Xircuits. Consider this as crafting a focused workflow intended for a specific reusable task.

2. **Define your outputs.** Link any data or results you want to pass back to the main workflow to the `Finish` node's `outputs`. This step is crucial as it defines what the larger workflow receives from your sub-Xircuit. The `Finish` node is a DynaPort which expands for multiple outputs, so attach as many as necessary.

3. **Save and test your workflow.** After setting up your workflow, save it. It's advisable to run it at this stage to confirm its functionality.

### Integrating into a Component Library

4. **Move the Xircuits file to a component library.** To make your sub-Xircuit recognized and usable, it must be placed in a component library directory. You can choose an existing library or create a new one. The sub-Xircuit becomes available for use only when situated in such directories.

5. **Compile your sub-Xircuit.** After placing it in the correct directory, compile your Xircuits file. 

:::info Compilation Process
The `@xai_component` decorator is what distinguishes a regular Python class as a Xircuits component. When you compile a Xircuits workflow, the compiler automatically applies this decorator at the top of the class in your compiled Python file. This step enables the component library parser to recognize and incorporate it as a usable component.
:::

### Utilizing the Sub-Xircuit

6. **Access your sub-Xircuit from the component library tray.** Once compiled, your new sub-Xircuit component will appear in the component library tray under the same name as the original Xircuits file. For example, if you compiled `Example.xircuits` into `Example.py` within the `xai_templates` directory, it will be ready for use there.

7. **Drag and drop your sub-Xircuit onto the canvas.** Similar to any other component in Xircuits, you can now drag your sub-Xircuit onto the workflow canvas and integrate it into your larger workflow as needed.

8. **Connect and pass outputs.** The outputs you configured in your sub-Xircuit are now the outputs of this new component. The data processed within your sub-Xircuit can now be passed to rest of your workflow.

9. **Run and compile the main workflow.** With your sub-Xircuit integrated, you can proceed to run and compile your main workflow, leveraging the modular, reusable component you've crafted.

<p align="center">
  <img width="90%" src="/img/docs/tutorials/subxircuits.gif"></img>
  <figcaption class="image-caption">Sub Xircuits Preview</figcaption>
</p>