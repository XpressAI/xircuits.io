---
sidebar_position: 5
---

# Parallelism in Xircuits

Xircuits supports multithreading for parallel execution of workflows, particularly useful for I/O-heavy tasks. This guide will show you how to implement multithreading in your Xircuits workflows using the `RunParallelThread` and `AwaitFutures` components.

## Introduction

Multithreading in Xircuits allows for concurrent task execution, which is especially beneficial for operations like network requests or independent data processing.

## Prerequisites

- Latest version of Xircuits
- Updated `base.py` file in the `xai_components` directory

## Implementing Multithreading

### Step 1: Set Up Your Workflow

Create a new workflow or open an existing one where you want to use multithreading.

### Step 2: Add Parallel Execution Components

1. Drag the `RunParallelThread` component into your workflow.
2. Configure it to define the workflow segment for parallel execution.
3. Connect the tasks you want to execute in parallel to the `body` flow execution of `RunParallelThread`.
4. Add the `AwaitFutures` component in the main flow path.
5. Connect the `futures` outPort of `RunParallelThread` to the `futures` inPort of `AwaitFutures`.

<p align="center">
  <img width="50%" src="/img/docs/ParallelExecutionComponents.png"></img>
  <figcaption class="image-caption">Parallel Execution Components</figcaption>
</p>

### Step 3: Use Branch Components

You will need to use [Branch Components](/docs/main/how-tos/branch-and-loops) to separate the parallel execution from the main flow. The `RunParallelThread` should be in the `body` flow execution path of a branch component, while `AwaitFutures` remains in the main flow path.

Common branch components include:
- `ForEach`: Iterates over a list of items
- `While`: Looping based on a condition

### Step 4: Example Workflow

Let's look at the `RunParallelExample.xircuits` workflow:

<p align="center">
  <img width="90%" src="/img/docs/RunParallelExample.png"></img>
  <figcaption class="image-caption">RunParallelThread Example</figcaption>
</p>

In this example:
1. We use a `ForEach` component as our branch.
2. The `RunParallelThread` is placed in the `body` flow of the `ForEach`.
3. The tasks to be executed in parallel (random sleep and print) are connected to the `body` flow of `RunParallelThread`.
4. The `AwaitFutures` component is in the main flow path, after the `ForEach`.
5. The `futures` outPort of `RunParallelThread` is connected to the `futures` inPort of `AwaitFutures`.

This setup allows each iteration of the `ForEach` loop to start a new thread, executing the sleep and print operations in parallel.

### Step 5: Run the Workflow

1. Compile your workflow.
2. Run it to observe the parallel execution in action.


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

  Executing: RunParallelExample
  Executing: RunParallelThread
  Executing: GetRandomNumber
  Executing: SleepComponent
  Sleeping for 3 seconds.
  ...
  Executing: AwaitFutures
  Executing: RunParallelThread
  Executing: Print
  1
  ...
  Executing: Print
  4

  Finished Executing
  ```
</details>

## Conclusion

By integrating multithreading into your Xircuits workflows, you can significantly improve efficiency for time-consuming operations. Use the `RunParallelThread` and `AwaitFutures` components in conjunction with branch components to leverage concurrent execution in your projects. Remember to keep `RunParallelThread` in the branch's body flow and `AwaitFutures` in the main flow for proper parallel execution.