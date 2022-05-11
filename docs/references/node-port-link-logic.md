---
sidebar_position: 2
---
# Node, Port and Link Logic

To ensure a robust codegen compilation, we have set several rules and logics for nodes, ports and links.

## Node Logic

- A node is a [xircuits component](../technical-concepts/xircuits-components/getting-started-with-xircuits-components.md).
- Each canvas will have a `Start` and `Finish` node, which cannot be deleted.
- Nodes can be locked. Nodes that are locked cannot be moved nor deleted.
- All component library nodes must be linked to compile and execute a workflow. 

## Port Logic
- Each node will have ▶ Ports and optionally parameter ports.
- Parameter Ports are `inArg` and `outArg` rendered into `inPorts` and `outPorts` respectively.
- You can only link from an `outPort` to an `inPort`.

### Triangle [ `▶` ] Ports

- ▶ Ports indicates sequence of execution.
- All ▶ ports must be linked from `Start` to `Finish`.
- You cannot create a ▶ loop. 
- You can only link ▶ ports to ▶ ports, and parameter to parameter ports.

### Compulsory Ports
- `Compulsory inPorts` are rendered `inCompArg` indicated with the `*` symbol. 
- A parameter must be supplied to compile and run the workflow.

### Port Type Checking

- A port may have a specific type it is expecting, eg `str` or `int`. Supplying a wrong type will throw out an error tooltip.
- An exception to this rule is the `any` port, which will bypass any port type check.
- The following table is the port visualization of certain data types. Those not included in the list will simply have the port blank.

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
    <img src="https://user-images.githubusercontent.com/84708008/161918620-34e20908-f32d-406b-8e47-104e91249472.gif"></img></p>
    </details>

## Link Logic
- A link is created when you select and drag from a port.
- Linking an `outPort` to an `inPort` will indicate [data passing between components](../developer-guide/passing-data-between-components.md).
- If a link is not dropped on a port, it will prompt the component tray interface. Selecting one of the components will automatically link the ▶ ports.
    <details>
    <summary>Video</summary>
    <p align="center">
    <img src="https://user-images.githubusercontent.com/68586800/165813394-3d81e135-1c40-42c6-b480-7cba48114c1c.gif
    "></img></p>
    </details>

### Smart Link
- When linking ▶ ports, Xircuits will perform a check whether the parameter port labels have an intersection, and if so, attempt to link it.
  - **Example**: The `out_sparksession` wil be linked to the `in_sparksession` as there is a `sparksession` intersection.
    <details>
    <summary>Video</summary>
    <p align="center">
    <img src="https://user-images.githubusercontent.com/84708008/165257379-77776d0e-8b20-4ef9-820b-40b9e80697e4.gif"></img></p>
    </details>


### Stacking Links
- For `string`, `list` and `dict` ports, you are able to stack multiple links. For each additional link, the values will be concatenated (if strings) or added (if list or dict).