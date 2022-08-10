---
sidebar_position: 3
---
# Special Components

## Add Import Component

The `AddImport` component is a special component that adds lines to the compiled python script. It is especially useful when needing to add an import in the compiled script.

Consider the following use case:

You have a logistic regression model that predicts the price of the house given several parameters. The catch is - the model inPort requires an numpy import. 

One way of doing this is by creating a IntList2Numpy component. The other way is to directly supply parameters to the port itself. 

But wait, it says np not recognized - what gives? Let's look at the generated code.


This is where the AddImport

By adding import numpy as np in the header, you can then supply parameters directly.

## Comment Component
The comment component is a component that displays messages. Unlike normal components, you can add a Comment component via right-click context menu.
-> add gif

Execution-wise, the Comment component has no effect, it's purely a tooltip to help Xircuits users understand the workflow.