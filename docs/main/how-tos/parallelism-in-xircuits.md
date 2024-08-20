---
sidebar_position: 5
---

# Parallelism in Xircuits

Xircuits has introduced multithreading capabilities to enhance parallel execution of workflows, especially useful for I/O-heavy tasks. This guide will walk you through setting up multithreading in your Xircuits workflows using the new `RunParallelThread` and `AwaitFutures` components.

## Introduction

With the introduction of multithreading, Xircuits can now perform tasks in parallel. This is particularly useful when dealing with operations that can be executed concurrently, such as network requests or independent data processing tasks.

### Key Components:
- **RunParallelThread**: Enables parallel execution of workflows.
- **AwaitFutures**: Ensures all threads complete before the workflow continues.

## Prerequisites

- Ensure you have the latest version of Xircuits installed.
- Update your `base.py` file in the `xai_components` directory to avoid compatibility issues.

## Steps to Implement Multithreading

### Step 1: Setting Up the Workflow

1. Open your Xircuits workspace.
2. Create a new workflow or open an existing one where you want to implement multithreading.

### Step 2: Adding the `RunParallelThread` Component

1. From the components library, drag and drop the `RunParallelThread` component into your workflow.
2. Configure the `RunParallelThread` component:
   - Define the segment of the workflow that you want to run in parallel.

<p align="center">
  <img width="50%" src="/img/docs/RunParallelThreadComponent.png"></img>
  <figcaption class="image-caption">RunParallelThread Component</figcaption>
</p>

### Step 3: Example Workflow

Consider the following example workflow `RunParallelExample.xircuits`:

<p align="center">
  <img width="90%" src="/img/docs/RunParallelExample.png"></img>
  <figcaption class="image-caption">RunParallelThread Example</figcaption>
</p>

In this workflow, each thread sleeps for a random amount of time and then prints its input element, demonstrating parallel execution.

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
  Executing thread 0: sleeping for 1 second.
  Executing thread 1: sleeping for 2 seconds.
  Executing thread 2: sleeping for 3 seconds.

  Finished thread 0: output 0
  Finished thread 1: output 1
  Finished thread 2: output 2

  Finished Executing
  ```

</details>

### Step 4: Awaiting Futures

To ensure all threads complete before moving on, use the `AwaitFutures` component:

1. Drag and drop the `AwaitFutures` component into your workflow.
2. Connect it to the `RunParallelThread` component to await the completion of all threads.

<p align="center">
  <img width="50%" src="/img/docs/AwaitFuturesComponent.png"></img>
  <figcaption class="image-caption">AwaitFutures Component</figcaption>
</p>

### Step 5: Running the Workflow

1. Compile your workflow.
2. Run it and observe the parallel execution.

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
  Executing thread 0: sleeping for 1 second.
  Executing thread 1: sleeping for 2 seconds.
  Executing thread 2: sleeping for 3 seconds.

  Awaiting all threads to complete...

  Finished thread 0: output 0
  Finished thread 1: output 1
  Finished thread 2: output 2

  All threads completed.

  Finished Executing
  ```

</details>

## Conclusion

With the new multithreading capabilities in Xircuits, you can now perform tasks in parallel, significantly improving efficiency for time consuming operations. Follow the steps outlined in this guide to integrate multithreading into your workflows and take advantage of concurrent execution.