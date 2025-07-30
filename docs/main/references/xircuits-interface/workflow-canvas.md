---
sidebar_position: 2
---

# Workflow Canvas

You can start the Xircuits workflow canvas in two ways:
1. Opening an existing .xircuits file.
2. Creating a new Xircuits canvas via launcher.

<details>
  <summary>Video</summary>
  <p align="center">

  ![](/img/docs/open-xircuits.gif)

  </p>
</details>

The following are the common canvas interfaces that you will use:

  1. [Xircuits Toolbar](#the-xircuits-toolbar)
  2. [Component Interfaces](#component-related-interfaces)
  3. [Link Interfaces](#link-related-interfaces)
  4. [Context Menu Interface](#right-click-context-menu)

### The Xircuits Toolbar

The Xircuits toolbar is displayed on top of every Xircuits canvas. From left to right:

![xircuits-toolbar](/img/docs/xircuits-toolbar.png)

1. **Undo**: Goes back one step.
2. **Redo**: Goes forward one step.
3. **Reload from Disk**: Reverts back to last saved point.
4. **Cut**: Cuts selected component(s) to clipboard.
5. **Copy**: Copies selected component(s) to clipboard.
6. **Paste**: Pastes component(s) from clipboard to canvas.
7. **Lock**: Locks all components in canvas. Locked components cannot be moved, linked-to nor deleted.
8. **Log**: Open Xircuits log window.
9. **Low Power Mode**: Toggle low power mode by disabling link animation.
10. **Toggle Light/Dark Mode**: Switches between light and dark themes.
11. **Reload All Nodes**: Reloads all nodes in the canvas. 
12. **Save**: Save current Xircuits canvas.
13. **Compile**: Codegens a Python script based on current canvas. 
14. **Save and Run**: Executes the generated Python script on the Python kernel based on Run Options.
15. **Xircuits Run Options**
    - **Local Run**: Saves, compiles, and executes Xircuits canvas locally.
    - **Run w/o Compile**: Saves current canvas but does not compile the Python script. Executes Python script with the same filename as the .xircuits file.
    - **Remote Run**: Saves, compiles, then performs a cmd-based remote run. Used often for Spark Submit. For more information, read [Remote Run](remote-run).

### Component Related Interfaces

Components are the gears of a Xircuits workflow which performs specific actions in sequence. Here's an example:

![xircuits-component-example](/img/docs/xircuits-component.png)

Each Xircuits components will usually have the following attributes:
  1. **Component Name:** A unique name that identifies the component. 
  2. **Flow [▶] Ports:** These ports indicate the sequence of the workflow. All flow ports must be connected from the `Start` Node to `Finish` Node.
  3. **Parameter Ports:** These ports modify the behavior of the library component. They can be linked by `Literal`, `Argument` components or by other library components. If the inPort has a `*` symbol, it is a `compulsory inPort`. Users *must* link the port with a parameter. 

There are a few additional interfaces for library components. They are located at top right corner of components. 

![xircuits-context-menu](/img/docs/xircuits-tooltip.png)

1. **Information Tooltip [ `i` ] :** Displays the component information tooltip, if any. In the Python component code, the comment is enclosed in the triple ''' ''' quotation marks. 
2. **Lock Component [ `🔒` ] :** Locks selected component. Locked components cannot be moved, linked-to nor deleted.

:::tip

You are able to modify `Parameter Components` (Literal nodes and Argument nodes) by double clicking them.

<details>
  <summary>Video</summary>
  <p align="center">

  ![](/img/docs/edit-literal.gif)

  </p>
</details>
:::


### Link Related Interfaces

There are 2 types of links in Xircuits. 

  1. **Flow Links:** They indicate the sequence of a Xircuits workflow. Flow links are blue line flows connecting ▶ ports which will turn solid yellow when highlighted. You can drop a flow link anywhere on a target node to auto-connect to its main flow port.
  <details>
  <summary>Video</summary>
  <p align="center">

  ![](/img/docs/sequence-link.gif)

  </p>
  </details>

  2. **Parameter Links:** They indicate data flow from parameter component to library component, or from library component to another library component. Parameter links are grey in color and turn into a yellow flow when highlighted. 
  <details>
  <summary>Video</summary>
  <p align="center">

  ![](/img/docs/parameter-link.gif)

  </p>
  </details>

- Shift selecting will create a point in the link. Use it to route links so it's visually intuitive.

### Right Click Context Menu

The Xircuits context menu offers various options based on the selected entities on the canvas. You can open the context menu by right-clicking anywhere on the Xircuits canvas.

![xircuits-context-menu](/img/docs/xircuits-context-menu.png)

**Context Menu Options:**

| **Option**         | **What it Does**                                                                                     | **When it Appears**                                                       |
|--------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| **Cut**            | Cuts the selected component(s) to the clipboard.                                                     | When nodes or links are selected.                                          |
| **Copy**           | Copies the selected component(s) to the clipboard.                                                   | When nodes or links are selected.                                          |
| **Paste**          | Pastes component(s) from the clipboard to the canvas.                                                | When nodes or links are selected.                                          |
| **Attach**         | Attach selected Literal component(s) to the selected library component if it's linked.                                      | When connected Literal nodes are selected.                                 |
| **Attach Literals**| Attaches all eligible Literal nodes to the selected library component(s).                                    | When component nodes are selected and can attach Literals.                 |
| **Detach Literals**| Detaches all eligible Literal nodes from the selected component(s).                                  | When component nodes are selected and have attached Literals.              |
| **Reload Node**    | Reloads the selected component, re-rendering it based on the current component Python script.        | When library component nodes are selected.                                         |
| **Edit**           | Modifies a `Parameter Component`.                                                                      | When a single Literal or Argument node is selected.                        |
| **Open Script**    | Opens the Python script associated with the selected component.                                      | When a single component node is selected.                                  |
| **Open Workflow**  | Opens the Xircuits workflow associated with the selected component.                                  | When a selected component is a workflow component.        |
| **Delete**         | Deletes the selected component(s) or links.                                                          | When nodes or links are selected.                                          |
| **Undo**           | Reverts the last action.                                                                             | When no nodes are selected.                                                |
| **Redo**           | Reapplies the last undone action.                                                                    | When no nodes are selected.                                                |
| **Add Comment**    | Inserts a [`Comment Component`](/docs/main/references/components/comment-component.md) at the specified node position.   | When no nodes are selected.                                                |

For the full list of node-port-link interactions, refer to the Xircuits logic [documentation](/docs/main/references/xircuits-interface/node-port-link-logic).
