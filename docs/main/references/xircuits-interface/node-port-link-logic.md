---
sidebar_position: 3
---
# Node, Port, and Link Logic

To ensure robust codegen compilation, we have established several rules and logics for nodes, ports, and links in Xircuits.

## Node Logic

- A node is a [Xircuits component](/docs/main/references/components/).
- Each canvas has a `Start` and `Finish` node, which cannot be deleted.
- Nodes can be locked, preventing movement or deletion.
- All component library nodes must be linked to compile and execute a workflow.

## Port Logic

- Each node has ▶ Ports and optionally parameter ports.
- Parameter Ports are `inArg` and `outArg` rendered into `inPorts` and `outPorts` respectively.
- Links can only be created from an `outPort` to an `inPort`.

### Flow [ `▶` ] Ports

- Flow Ports indicate the sequence of execution.
- All flow ports must be linked from `Start` to `Finish`.
- Flow loops are not allowed.
- Flow ports can only link to other flow ports, and parameter ports to parameter ports.

### Compulsory Ports

- `Compulsory inPorts` are rendered `inCompArg` indicated with the `*` symbol.
- A parameter must be supplied to compile and run the workflow.

### Port Type Checking

- Ports may have specific expected types (e.g., `str` or `int`).
- The `any` port bypasses type checking.
- Port visualization for different data types:

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

### Dynamic Ports

- Dynamic Ports expand dynamically when linked, while being treated as a singular variable in the compiled code.
- Types: DynaList, DynaTuple
- Linking to an empty dynaport spawns a new identical dynaport below it, with an updated [x] label.

    <details>
    <summary>Preview</summary>
    <div className="iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CMLT5V6uhuk?si=WfY50Aw1niPUTA4N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </details>

- All Literals can link to DynaLists and DynaTuples.
- Removing a link updates subsequent dynaports automatically.
- Creating a link to an already linked dynaport shifts existing links and following dynaports.

    <details>
    <summary>Preview</summary>
    <div className="iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f_aZuBFlokQ?si=V2tkY-ghmjxuFGzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </details>

- Dynaports inherit other default port behaviors, such as reloading.

## Link Logic

- Links are created by selecting and dragging from a port.
- Linking an `outPort` to an `inPort` indicates data passing between components.
- If a link is not dropped on a port, it prompts the component tray interface.

    <details>
    <summary>Component Chaining Interface</summary>
    <p align="center">
    <img src="/img/docs/interface-chain.gif"></img></p>
    </details>

- If a link is not dropped on a port, it prompts the component tray interface.
- You can create a point in a link by `ctrl` + clicking on a link. This will allow you to route links around components.

### Smart Link

- When linking ▶ ports, Xircuits checks for parameter port label intersections and attempts to link them automatically.

    <details>
    <summary>Video: Interface Smart Link</summary>
    <p align="center">
    <img src="/img/docs/interface-smart-link.gif"></img></p>
    </details>
