---
sidebar_position: 0
---

# Overview

Xircuits is a Jupyterlab-based extension that enables visual, low-code, training workflows. It allows anyone to easily create executable python code in seconds.

It is created by data scientists for data scientists. 

## Key Features

- **Visual Low Code Workflow**: Anyone can create complex workflows in seconds by simply dragging the components and connecting them.
- **Code Generation (CodeGen)**: Xircuits generates fully functional python code that can immediately be run in Xircuits or the terminal.
- **Customizable Components**: Xircuit components are very extendable and customizable. Create your own Xircuits component library and share it to the world!

## Workflow
1. Create a new Xircuits from the Jupyterlab launcher or open an existing .xircuit file.

![xircuit](01-open-xircuit.gif)

2. Drag components from the Xircuits Component Tray to form your training workflow. Share data among your components using the in and out ports.

![xircuit-components](02-components.gif)

3. Press Compile button! The Xircuits will compile the components into a working python code.

![xircuit-parser](03-python-parser.gif)

4. Run the compiled python code using your own terminal or use our Output Viewer. 

![xircuit-runner](04-xircuits-runner.gif)

5. Unexpected output? Would like to have more in-depth insights of the data between components? Mark the components you'd like to observe and try out our debugger.