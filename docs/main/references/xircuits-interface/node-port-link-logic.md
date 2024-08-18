---
sidebar_position: 3
---
# Node, Port, and Link Logic

To ensure robust codegen compilation, we have established several rules and logics for nodes, ports, and links in Xircuits.

## Node Logic

- A node is a [Xircuits component](./components/).
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

    
<details>
<summary>Custom Ports</summary>
<p align="center">
<img src="/img/docs/interface-custom-ports.gif"></img></p>
</details>

## Link Logic

- Links are created by selecting and dragging from a port.
- Linking an `outPort` to an `inPort` indicates [data passing between components](main/developer-guide/passing-data-between-components.md).
- If a link is not dropped on a port, it prompts the component tray interface.
<details>
<summary>Component Chaining Interface</summary>
<p align="center">
<img src="/img/docs/interface-chain.gif"></img></p>
</details>

### Smart Link

- When linking ▶ ports, Xircuits checks for parameter port label intersections and attempts to link them automatically.

<details>
<summary>Video: Interface Smart Link</summary>
<p align="center">
<img src="/img/docs/interface-smart-link.gif"></img></p>
</details>

## Dynamic Ports

Dynamic Ports are specialized ports that expand dynamically when linked, while being treated as a singular variable in the compiled code.

### Behavior of Dynamic Ports

- DynaList, DynaTuple, and DynaDict are processed as normal lists, tuples, and dicts in the compiled code, preserving the order of the dynaport sequence.
- Linking to an empty dynaport spawns a new identical dynaport below it, with a [x] label updated for each subsequent link.
- All types of Literals can link to DynaLists and DynaTuples, but only Literal Dicts can link to DynaDicts.
- Removing a link to a dynaport automatically updates the following dynaports.
- Creating a link to an already linked dynaport shifts the existing link and following dynaports.
- Dynaports inherit other default port behaviors, such as reloading.



<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tdbJLUIUZPk?si=AnERo_c2IgnA9isl" title="Dynamic Ports" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/CMLT5V6uhuk?si=WfY50Aw1niPUTA4N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/f_aZuBFlokQ?si=V2tkY-ghmjxuFGzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>