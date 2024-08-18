---
sidebar_position: 3
---

# Loops, Branches, and Conditional Logic

In Xircuits, we have provided the `controlflow` component library which implements loops, branches, and conditional logic operations. Here are some common components to perform them: the `BranchComponent`, `LoopComponent`, `ForEach`, and `ComparisonComponent`.

## Branching If Logic with BranchComponent

The `BranchComponent` allows you to create branches in your workflow based on a condition, similar to an if-else statement in traditional programming. 

<p align="center">
  <img width="50%" src="/img/docs/branchComponent.png"></img>
  <figcaption class="image-caption">BranchComponent</figcaption>
</p>

Consider the following workflow:

<p align="center">
  <img width="90%" src="/img/docs/BranchComponentExample.png"></img>
  <figcaption class="image-caption">BranchComponent Example</figcaption>
</p>

The `BranchComponent` will alter its behavior depending on the `condition` inPort. In this case, as a `Literal True` is connected to the `BranchComponent`, it will execute the `Print` component which is connected to the "This will be printed if the condition is true!" Literal String. Finally, as with all branch components, it will go to the default flow port after completing the branch execution flow and execute one additional `Print` component.

The output of the above workflow is shown below.

<details>
  <summary>Expected Output</summary>

  ```
  ======================================
  __   __  ___                _ _
  \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
   \ \  \  /| | '__/ __| | | | | __/ __|
   / /  /  \| | | | (__| |_| | | |_\__ \
  /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

  ======================================

  Xircuits is running...


  Executing: Example

  Executing: Print
  This will be printed if the condition is True!

  Executing: Print
  Finally, this will be executed once the final branch flow is complete!

  Finished Executing
  ```

</details>

If you would like more examples of `BranchComponent`, `ControlflowBranch.xircuits` workflow is something you can try.

## Looping with LoopComponent

The `LoopComponent` enables repetitive execution of a workflow segment based on a condition, similar to a while loop.

<p align="center">
  <img width="50%" src="/img/docs/loopComponent.png"></img>
  <figcaption class="image-caption">LoopComponent</figcaption>
</p>

Consider the example `ControlflowLoop.xircuits`:

<p align="center">
  <img width="90%" src="/img/docs/ControlflowLoop.xircuits.png"></img>
  <figcaption class="image-caption">LoopComponent Example</figcaption>
</p>

`LoopComponent` will keep looping as long as the condition is set to be `True`.

<details>
  <summary>Expected Output</summary>

  ```
  ======================================
  __   __  ___                _ _
  \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
   \ \  \  /| | '__/ __| | | | | __/ __|
   / /  /  \| | | | (__| |_| | | |_\__ \
  /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

  ======================================

  Xircuits is running...


  Executing: ControlflowLoop

  Executing: Print
  Dormammu 

  Executing: Print
  I've come to bargain!

  Executing: SleepComponent
  Sleeping for 1 seconds.

  Executing: Print
  I've come to bargain!

  Executing: SleepComponent
  Sleeping for 1 seconds.

  ...
  ```

</details>

As shown from the output, this workflow will continue indefinitely as the condition is always `True`. What if you want to set a set number of loops? You can use the `ForEach` component mix a `Variable` component and a `Comparison` component, which will be covered next.

## Iterating with ForEach Component

The `ForEach` component iterates over a list of items, executing a workflow segment for each item, similar to a for loop. Consider the following workflow:

<p align="center">
  <img width="90%" src="/img/docs/ForEachComponentExample.png"></img>
  <figcaption class="image-caption">ForEachComponent Example</figcaption>
</p>

In this workflow, the `ForEach` component will iterate through each item in the list. The item and the index are printed one after the other.

<details>
  <summary>Expected Output</summary>

  ```
  ======================================
  __   __  ___                _ _
  \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
   \ \  \  /| | '__/ __| | | | | __/ __|
   / /  /  \| | | | (__| |_| | | |_\__ \
  /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

  ======================================

  Xircuits is running...


  Executing: ForEachComponentExample

  Executing: Print
  sugar

  Executing: Print
  0

  Executing: Print
  spice

  Executing: Print
  1

  Executing: Print
  and everything nice

  Executing: Print
  2

  Executing: Print
  also chemical X

  Executing: Print
  3

  Finished Executing
  ```

</details>


## Comparison and Conditional Logic

The `ComparisonComponent` performs comparisons between two values and returns a boolean result, useful for creating conditions in branches and loops. Consider the following advanced example:

<p align="center">
  <img width="90%" src="/img/docs/ControlflowCounterLoop.xircuits.png"></img>
  <figcaption class="image-caption">Comparison Components to Control Loops Example</figcaption>
</p>

In this workflow, we first define a boolean variable called `is_running` using `DefineVariableComponent`. This boolean is the condition of looping for the `LoopComponent`. The workflow then defines a counter that decreases each step. Then finally using the `ComparisonComponent`, we define only when the counter is less than 1, `is_running` will be `False`.

<details>
  <summary>Expected Output</summary>

  ======================================
  __   __  ___                _ _
  \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
  \ \  \  /| | '__/ __| | | | | __/ __|
  / /  /  \| | | | (__| |_| | | |_\__ \
  /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

  ======================================

  Xircuits is running...


  Executing: ControlflowBranch

  Executing: Print
  You can chain multiple branches together!

  Executing: Print
  The 2nd branch is True!

  Executing: Print
  Finally, this will be executed once the final branch flow is complete!

  Finished Executing

</details>

These are just some of the controlflow components that are available, if you are a developer, you can even create your own branch component. For more technical details on how these components work, you can refer to the [branch components reference documentation](/main/references/components/branch-and-loop-components.md).