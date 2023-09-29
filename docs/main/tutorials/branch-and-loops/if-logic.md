# IF Logic

Since the 1.7 update, Xircuits allows you to implement conditionals and loops in your workflow. `BranchComponent` is an example of such, a controlflow component that implements the IF condition.

Consider the following workflow:

![branch-component](/img/docs/tutorials/branch-components.gif)

`BranchComponent` will alter its behavior depending on the `condition` inPort. The output of the above workflow is shown below.

<details>
    ```
    ======================================
    __   __  ___                _ _
    \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
    \ \  \  /| | '__/ __| | | | | __/ __|
    / /  /  \| | | | (__| |_| | | |_\__ \
    /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

    ======================================
    Xircuits is running...


    Executing: Print
    You can chain multiple branches together!

    Executing: Print
    The 2nd branch is True!

    Executing: Print
    Finally, this will be executed once the final branch flow is complete!

    Finished Executing
    ```
</details>

For more information on how controlflow works, you may refer to the [controlflow reference](../../technical-concepts/xircuits-components/branch-and-loop-components) page.