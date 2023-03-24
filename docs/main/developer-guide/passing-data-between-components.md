---
sidebar_position: 2
id: passing-data-between-components
title: Passing Data between Components
---

# Passing Data between Components

There are two ways of passing data between components: through ports and by utilizing the Xircuits context (ctx). The guide below will walk you through a simple example using ports. 


## Passing Data via Ports

Passing data via ports is as simple as declaring the port variable as `InArg` or `OutArg`, which will then be rendered by the Xircuits canvas.


1. Start with a simple component definition that prints Hello.

    <details>
      <summary>Code Snippet</summary>

      ```python
      from xai_components.base import InArg, OutArg, InCompArg, Component, xai_component

      @xai_component(color="red")
      class HelloOutComponent(Component):

          def __init__(self):

              self.done = False

          def execute(self, ctx) -> None:

              username = "Xircuits"
              print("Hello " + username + " from HelloOutComponent!")
              
              self.done = True
      ```      
    </details>

    <details>
    <summary>Video</summary>
      <p align="center">
      <img src="/img/docs/developer-guide/create-simple-component.gif"></img></p>
    </details><br></br>

2. Declare an `outPort` with type `OutArg` that passes a string. Is it also a good practice to specify it as empty when you initialize in `__init__(self)`. Finally to pass the data to the next components, explicitly set the port value in the `execute()` method, shown in `#(3)`.

    <details>
      <summary>Code Snippet</summary>

      ```python
      from xai_components.base import InArg, OutArg, InCompArg, Component, xai_component

      @xai_component(color="red")
      class HelloOutComponent(Component):
          
          outport_example: OutArg[str] #(1)

          def __init__(self):

              self.outport_example = OutArg.empty() #(2)
              self.done = False

          def execute(self, ctx) -> None:

              username = "Xircuits"
              print("Hello " + username + " from HelloOutComponent!")

              self.outport_example.value = username #(3)
              self.done = True
      ```
    </details>

    <details>
    <summary>Video</summary>
      <p align="center">
      <img src="/img/docs/developer-guide/add-outport.gif"></img></p>
    </details><br></br>

3. Create another Xircuits component has an `InPort`. As with the previous component, declare the type as `InArg` which takes in a `str` type. To access the data passed from the port, you can simply call it via `self.port_name.value` as shown in `#(4)`.

    <details>
      <summary>Code Snippet</summary>

      ```python
      @xai_component(color="red")
      class HelloInComponent(Component):
          
          inport_example: InArg[str]

          def __init__(self):

              self.inport_example = InArg.empty()
              self.done = False

          def execute(self, ctx) -> None:
              
              username = self.inport_example.value #(4)

              print("Hello " + username + " from HelloInComponent!")

              self.done = True
      ```

    </details>

    <details>
    <summary>Video</summary>
      <p align="center">
      <img src="/img/docs/developer-guide/add-inport.gif"></img></p>
    </details>


## Notes:
- An inPort can also be linked to a `Literal` or a `Argument` component given the correct data type.
- Declaring the port type as `any` will bypass the port type check.


Read More:
- [Xircuits Context](main/technical-concepts/xircuits-context.md)
- [Literals and Arguments](main/technical-concepts/xircuits-components/literal-and-arguments-components.md)