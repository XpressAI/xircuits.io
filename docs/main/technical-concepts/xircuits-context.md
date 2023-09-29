---
sidebar_position: 5
id: xircuits-context
title: Xircuits Context
tags:
  - glossary
---

Aside from passing data between components by connecting the outPort to inPort, data can be passed between components via Context (ctx). This is useful for variables that are constantly used in most if not all components in a workflow (such as SparkSession), so you don't have to link it multiple times.

In the Python component code side, the `ctx` is added to the base component `execute()` method. A component that would like to add or access data from `ctx` can treat it as a normal `dict`. Here's an example of a component that uses it:

```python
from xai_components.base import Component, xai_component
@xai_component()
class HelloContext(Component):
        
    def execute(self, ctx):
        context_dict = {"new ctx": "Hello Xircuits!"}
        ctx.update(context_dict)
```
