---
sidebar_position: 4
tags:
  - glossary
---

# Branch and Loop Components

With the 1.7 update, Xircuits allows you to implement branch conditionals and loops in your workflow by allowing users to specify `BaseComponent` as a class attribute. 

In the frontend canvas, it will be rendered as a flow `▶` port, which users are able to flow link to other library components as opposed to just passing values to a parameter port. In this document, we will refer to these extra flow ports as `controlflow ports`.

Under the hood, the compiler will utilize the `SubGraphExecutor` to execute branch logic.

The general rule of the thumb of controlflow components are:
1. A controlflow component will have more than one out-flow `▶` ports - the main flow which is always at the top and additional controlflow `▶` ports.
2. The execution flow will always go to the controlflow ports first, 
*given* that the condition is fulfilled. 
3. If there is no next Component after the a controlflow branch, it will return to the previous main flow.

Consider the following branch example:


```python
from xai_components.base import Component, xai_component

@xai_component
class BranchComponent(Component):
    when_true: BaseComponent
    when_false: BaseComponent
    done: bool

    condition: InArg[bool]
    
    def do(self, ctx) -> BaseComponent:
        if self.condition.value:
            next = self.when_true
        else:
            next = self.when_false
        while next:
            is_done, next = next.do(ctx)
        try:
            return self.done, self.next
        except:
            return self.done, None
```

![controlflow-example](/img/docs/tutorials/controlflow-example.gif)

The output is show below:

<details>

Xircuits is running...


Executing: Print
This will be printed if the first branch is true!

Executing: Print
Finally, this will be executed once the final branch flow is complete!

Finished Executing

</details>

We have several implementations of controlflow components in the `controlflow` component library. 

