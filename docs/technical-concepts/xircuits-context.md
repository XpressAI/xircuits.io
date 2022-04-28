---
sidebar_position: 3
id: xircuits-context
title: Xircuits Context
tags:
  - glossary
---

## Xircuits Context
Aside from passing data between components by connecting the outPort to inPort, data can be passed between components via Context (ctx). This is useful for variables that are constantly used in most if not all components (such as SparkSession in Spark xircuits), so you don't have to link it multiple times.

* The `ctx` is added to the base component `execute()` method. 
* A component that would like to pass data to the context can be treated as a dict, and would be implemented as the following:
```python
from xai_components.base import Component, xai_component
@xai_component()
class HelloContext(Component):
        
    def execute(self, ctx):
        context_dict = {"new ctx": "Hello Xircuits!"}
        ctx.update(context_dict)
```
- In codegen, by default `ctx` will contain the xircuits args and hyperparameters.
```python
# python example.py --epoch=554
{'args': Namespace(epoch=554, experiment_name='2022-04-22 16:13:40')}
```
