---
sidebar_position: 0
---

# The Xircuits Interface

Xircuits is built on Jupyterlab, you will see a lot of familiar data scientist related tools. The following section introduces you to the Xircuits related interfaces. For the full Jupyterlab interface exploration, you may refer to the [Jupyterlab documentation](https://jupyterlab.readthedocs.io/en/stable/user/interface.html).

The two main parts of Xircuits are:
1. [The Component Library Tray](#the-component-library-tray)
2. [The Workflow Canvas](#the-workflow-canvas)

![xircuits-interface](/img/docs/references/xircuits-interface.png)

## Launching Xircuits

First things first - you can launch Xircuits from the command line by running:

```
$ xircuits
```

## The Component Library Tray

You can access the component library tray by selecting the block icon on the left toolbar. 

![xircuits-component-tray](/img/docs/references/xircuits-component-tray.png)

From top to bottom:
1. **Search Bar**: Searches your component.
2. **Refresh**: Refreshes component list. Use when adding new components and/or modifying existing ones.
3. **Xircuits Component List**: Components to be dragged into the Xircuits canvas. There are two main types of components.
    - [General Components](../technical-concepts/xircuits-components/getting-started-with-xircuits-components.md#general-components) - General use components that supply *parameters* or *hyperparameters* to library components.
    - [Library Components](../technical-concepts/xircuits-components/getting-started-with-xircuits-components.md#xircuits-library-components) - Custom components that are created from various Python frameworks. 

    Read the [component documentation](../technical-concepts/xircuits-components/getting-started-with-xircuits-components.md) for a more in-depth explanation on components.

## The Workflow Canvas

You can start the Xircuits workflow canvas in two ways:
1. Opening an existing .xircuits file.
2. Creating a new Xircuits canvas via launcher.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/open-xircuits.gif"></img></p>
</details>

The following are the common canvas interfaces that you will use:

  1. [Xircuits Toolbar](#the-xircuits-toolbar)
  2. [Component Interfaces](#component-related-interfaces)
  3. [Link Interfaces](#link-related-interfaces)
  4. [Context Menu Interface](#right-click-context-menu)
### The Xircuits Toolbar

The Xircuits toolbar is displayed on top of every Xircuits canvas. From left to right:

![xircuits-toolbar](/img/docs/references/xircuits-toolbar.png)

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
    - **Remote Run**: Saves, compiles, then performs a cmd-based remote run. Used often for Spark Submit. For more information, read [Remote Run](../references/remote-run.md).

### Component Related Interfaces

Components are the gears of a Xircuits workflow which performs specific actions in sequence. Here's an example:

![xircuits-component-example](/img/docs/references/xircuits-component.png)

Each Xircuits components will usually have the following attributes:
  1. **Component Name:** A unique name that identifies the component. 
  2. **Triangle [▶] Ports:** These ports indicate the sequence of the workflow. All ▶ ports must be connected from the `Start` Node to `Finish` Node.
  3. **Parameter Ports:** These ports modify the behavior of the library component. They can be linked by `Literal`, `Hyperparameter` components or by other library components. If the inPort has a `*` symbol, it is a `compulsory inPort`. Users *must* link the port with a parameter. 

There are a few additional interfaces for library components. They are located at top right corner of components. 

![xircuits-context-menu](/img/docs/references/xircuits-tooltip.png)

1. **Information Tooltip [ `i` ] :** Displays the component information tooltip, if any. In the Python component code, the comment is enclosed in the triple ''' ''' quotation marks. 
2. **Lock Component [ `🔒` ] :** Locks selected component. Locked components cannot be moved, linked-to nor deleted.


:::tip

You are able to modify `Literal Components` by double clicking them.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/references/edit-literal.gif"></img></p>
</details>
:::


### Link Related Interfaces

There are 2 types of links in Xircuits. 

  1. **Sequence Links:** They indicate the sequence of a Xircuits workflow. Sequence links are blue line flows connecting ▶ ports which will turn solid yellow when highlighted. 
  <details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/references/sequence-link.gif"></img></p>
  </details>

  2. **Parameter Links:** They indicate data flow from parameter component to library component, or from library component to another library component. Parameter links are grey in color and turn into a yellow flow when highlighted. 
  <details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/references/parameter-link.gif"></img></p>
  </details>

- Selecting and dragging a link will create a point in the line. Use it route links so it's visually intuitive.
- To delete a link, select it first by shift-clicking, then press delete.


For the full list of node - port - link interactions, refer to the Xircuits logic [documentation](/docs/references/node-port-link-logic.md).

### Right Click Context Menu

Finally, you can open the context menu by right clicking anywhere on the Xircuits canvas.

![xircuits-context-menu](/img/docs/references/xircuits-context-menu.png)

1. **Cut**: Cuts selected component(s) to clipboard.
2. **Copy**: Copies selected component(s) to clipboard.
3. **Paste**: Pastes component(s) from clipboard to canvas.
4. **Reload Node**: Reloads selected component. Rerenders component based on current component Python script, useful when adding / removing / modifying ports.
5. **Edit**: Modifies `Literal Components`. 
6. **Open Script**: Opens component's Python script. 
7. **Delete**: Deletes component(s).
8. **Undo**: Goes back one step.
9. **Redo**: Goes forward one step.
10. **Add Comment**: Inserts a [`Comment Component`](../references/special-components.md#comment-component).
