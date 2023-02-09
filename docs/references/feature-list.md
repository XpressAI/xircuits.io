The following is an exhaustive list of features that we've implemented in Xircuits. 

# Installation
 
1. A user can install Xircuits with:
    ```
    $ pip install xircuits
    ```
    It will add add `xircuits`, `xircuits-[release-version].dist-info`, and `xai_components` to site-packages.

2. A user can install Xircuits and the required component library packages listed in `xai_components/xai_library_name/requirements.txt` with:
    ```
    $ pip install xircuits[component_library_name]
    ```

# CLI Commands
Once installed, users, users should be able to perform the following:

1. Launch Xircuits with
    ```
    $ xircuits
    ```
    Will create .xircuits config file at current directory as well as offer to download the xai_components from the main branch.

2. Launch Xircuits and additionally downloads xai_components from a specific branch with 
    ```
    $ xircuits --branch branchName
    ```

3. Download Xircuits examples and datasets with
    ```
    $ xircuits-examples
    ```

4. Downloads the examples and datasets directories from a specific branch.
    ```
    $ xircuits-examples --branch branchName
    ```

5. Download Xircuits components
    ```
    $ xircuits-components
    ```

6. Download the xai_components directory from a specified branch.
    ```
    $ xircuits-components --branch branchName
    ```

7. Download a submodule component library.
    ```
    $ xircuits-components --sublib componentLibraryName
    ```

# Component Library Tray

1. The tray can be accessed by pressing the block icon.
2. It contains the component search bar as well as the component libraries.
3. Every installation will have the general components.
4. 

## Component Library
1. A component library will be rendered in the tray if there a directory inside `xai_components` with the prefix `xai_`.
2. If it does not appear, press the refresh icon.


## Xircuits Components
1. A component will be rendered in the tray if it is given a @xai_component decorator.
2. You can change the color of the node by specifying color= keyword on @xai_component


# Tray Logic
1. Dragging a component from a tray will render a component.


## Literals
1. We have  
`string`, `int`, `float`, `boolean`, `list`, `tuple`, `dict`, `any`


## Hyperparameters


## Node Logic

1. Each canvas will have a `Start` and `Finish` node, which cannot be deleted.
2. Nodes can be locked. Nodes that are locked cannot be moved nor deleted.

## Port Logic
1. Each node will have ▶ Ports and optionally parameter ports.
2. Parameter Ports are `inArg` and `outArg` rendered into `inPorts` and `outPorts` respectively.
3. You can only link from an `outPort` to an `inPort`.

### Flow [ `▶` ] Ports

1. All flow ports must be linked from `Start` to `Finish`.
2. You cannot create a flow loop. 
3. You can only link flow ports to flow ports, and parameter to parameter ports.

### Compulsory Ports
1. `Compulsory inPorts` are rendered `inCompArg` indicated with the `*` symbol. 
2. A parameter must be supplied to compile and run the workflow.

### Port Type Checking

1. A port may have a specific type it is expecting, eg `str` or `int`. Supplying a wrong type will throw out an error tooltip.
2. An exception to this rule is the `any` port, which will bypass any port type check.
3. The following table is the port visualization of certain data types. Those not included in the list will simply have the port blank.

    | Data Type | Port UI |
    |-----------|---------|
    | `string`  | `" "`   |
    | `int`     | ` 1`    |
    | `float`   | `1.0`   |
    | `boolean` | `⊤⊥`    |
    | `list`    | `[ ]`   |
    | `tuple`   | `( )`   |
    | `dict`    | `{ }`   |
    | `any`     | `[_]`   |

    <details>
    <summary>Video</summary>
    <p align="center">
    <img src="/img/docs/interface-custom-ports.gif"></img></p>
    </details>

## Link Logic
- A link is created when you select and drag from a port.
- Linking an `outPort` to an `inPort` will indicate [data passing between components](../developer-guide/passing-data-between-components.md).
- If a link is not dropped on a port, it will prompt the component tray interface. Selecting one of the components will automatically link the ▶ ports.


### Smart Link
- When linking ▶ ports, Xircuits will perform a check whether the parameter port labels have an intersection, and if so, attempt to link it.

### Stacking Links
- For `string`, `list` and `dict` ports, you are able to stack multiple links. For each additional link, the values will be concatenated (if strings) or added (if list or dict).

# Code Generation (CodeGen)

1. A Python code will be generated from a xircuits canvas when users compile the workflow.
2. The python code has 3 sections:
    1. 

## CodeGen Header
1. The codegen will import
    ```
    from datetime import datetime
    from time import sleep
    import sys
    from argparse import ArgumentParser

    ```

2. To ensure that the component library is always detected, the CodeGen will append the import path for `xai_components`
With the format:
    ```
    sys.path.append("working_dir_path//xai_components")
    ```

3. The CodeGen will import the component class with the following format:
    ```
    from xai_library_name.python_module import ComponentName1
    from xai_library_name.python_module import ComponentName2
    ```

## CodeGen Main()
1. The main function will start with defining the Xircuits context (ctx) dictionary and passing whatever argument supplied in the command line or output.
    ```
    def main(args):

        ctx = {}
        ctx['args'] = args
    ```

2. Next is declaring variables that corresponds to the flow sequence of the component nodes in the canvas.

    ```
    c_1 = ComponentName1()
    c_2 = ComponentName2()
    c_3 = CompulsoryHyperparameter()
    ```

3. For each Literal connected to a parameter port, the codegen will apply the variable accordingly.

    | Literal | Port UI |
    |-----------|---------|
    | `String`  | `""" """`   |
    | `Int`     | ` 1`    |
    | `float`   | `1.0`   |
    | `boolean` | `true` or `false`   |
    | `list`    | `[ ]`   |
    | `tuple`   | `( )`   |
    | `dict`    | `{ }`   |

    Note:
    We have used """ """" to allow multiline strings.

4. For Hyperparameter input, the 

    c_3.comp_str.value = """abc"""
    c_3.comp_int.value = 123

    c_1.next = c_2
    c_2.next = c_3
    c_3.next = None

    next_component = c_1
    while next_component:
        is_done, next_component = next_component.do(ctx)



2. 

# Xircuits Config

The Xircuits config 

# The Xircuits Dialog

1. Xircuits support the following hyper parameters:

2. On execution, the users will have the following UI for each type.


### The Xircuits Toolbar

The Xircuits toolbar is displayed on top of every Xircuits canvas. From left to right:


1. **Save**: Save current Xircuits canvas.
2. **Undo**: Goes back one step.
3. **Redo**: Goes forward one step.
4. **Reload from Disk**: Reverts back to last saved point.
5. **Cut**: Cuts selected component(s) to clipboard.
6. **Copy**: Copies selected component(s) to clipboard.
7. **Paste**: Pastes component(s) from clipboard to canvas.
8. **Lock**: Locks all components in canvas. Locked components cannot be moved, linked-to nor deleted.
9. **Log**: Open Xircuits log window.
10. **Test**: A button for Xircuits core feature testing purposes.
11. **Compile**: Codegens a Python script based on current canvas. 
12. **Save and Run**: Executes the generated Python script on the Python kernel based on Run Options.
13. **Xircuits Run Options**
    - **Local Run**: Saves, compiles, and executes Xircuits canvas locally.
    - **Run w/o Compile**: Saves current canvas but does not compile the Python script. Executes Python script with the same filename as the .xircuits file.
    - **Remote Run**: Saves, compiles, then performs a cmd-based remote run. Used often for Spark Submit.