---
sidebar_position: 3
---

# Variable Components

Variable components are components that act like variables in workflows. We have provided 3 components in the controlflow component library:

- 

- `SetVariableComponent`

- `GetVariableComponent`

Some use cases of Variable Components:

- using Variable Components to access and modify commonly used variables.

- setting a constant with `SetVariableComponent` and referring to it with `GetVariableComponent`.

- using `GetVariableComponent` to fetch data from a port that is too far.

- using Variable Components to control loops.

- using Variable Components to pass and access data to nested workflows.

======================================
__   __  ___                _ _
\ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
 \ \  \  /| | '__/ __| | | | | __/ __|
 / /  /  \| | | | (__| |_| | | |_\__ \
/_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

======================================

Xircuits is running...


Executing: Example

Executing: SetVariableComponent

Executing: Inner

Executing: GetVariableComponent

Executing: Print
Hello Xircuits!

Finished Executing
