---
sidebar_position: 3
---

# Variable Components

Variable components are components that act like variables in workflows. We have provided 3 components in the controlflow component library:

- `DefineVariableComponent`
- `SetVariableComponent`
- `GetVariableComponent`

<p align="center">
  <img width="50%" src="/img/docs/VariableComponents.png"></img>
  <figcaption class="image-caption">Variable Components</figcaption>
</p>

## DefineVariableComponent

The `DefineVariableComponent` is used to define and initialize a variable in a single step. It combines the functionality of `SetVariableComponent` and `GetVariableComponent`.

### Parameters:
- `name`: The name of the variable to be defined.
- `value`: The initial value to be assigned to the variable.

### Outputs:
- `value`: The value of the defined variable, available for immediate use.

## SetVariableComponent

The `SetVariableComponent` is used to create or update a variable in the workflow.

### Parameters:
- `name`: The name of the variable to be set or updated.
- `value`: The value to be assigned to the variable.

## GetVariableComponent

The `GetVariableComponent` is used to retrieve the value of a previously set variable.

### Parameters:
- `name`: The name of the variable to be retrieved.

### Outputs:
- `value`: The current value of the specified variable.

## Usage

Variable Components can be used in various ways within Xircuits workflows:

1. To define and access commonly used variables throughout the workflow.
2. To set a constant value and refer to it later in the workflow.
3. To fetch data from a distant port in the workflow.
4. To control loop iterations and conditions.
5. To pass and access data in nested workflows.

## Implementation Details and Xircuits Context

Variable Components interact with the Xircuits context, which acts as a global storage for variables during workflow execution. This context allows data to be passed between components without direct port connections, which is particularly useful for variables used across multiple components in a workflow.

The Xircuits Context is implemented as a dictionary that can be accessed and modified within component code. Variable Components interact with this context as follows:

- `SetVariableComponent` and `DefineVariableComponent` add or update entries in the context.
- `GetVariableComponent` retrieves values from the context.

When a variable is set using `SetVariableComponent` or `DefineVariableComponent`, it is stored in this context. The `GetVariableComponent` then retrieves values from this context when needed.

For more detailed information on the Xircuits Context and its broader applications, refer to the [Xircuits Context documentation](link-to-xircuits-context-docs).

## Best Practices

While Variable Components offer flexibility, it's recommended to use them judiciously:

1. Prefer direct connections between components when possible for better visibility.
2. Use Variable Components when other methods are not feasible or would make the workflow overly complex.
3. When using Variable Components, ensure consistent naming to avoid confusion.
4. Consider using Literal Values for constants instead of Variable Components, as they provide better at-a-glance understanding of the workflow.
5. Utilize the Xircuits Context for variables that are frequently used across multiple components to reduce the need for multiple connections.

## Limitations

- Variable Components rely on the Xircuits context, which is reset between workflow executions. Variables do not persist across different runs of the workflow.
- Overuse of Variable Components can make workflows harder to understand and maintain.
- While the Xircuits Context provides flexibility, excessive use can lead to less explicit data flow in the workflow.

For more detailed information on how to use Variable Components in practice, refer to the tutorial documentation on [Using Variables](docs/main/concepts-and-explainations/using-variables.md).