# Event Components

Xircuits has a dynamic way to handle event-driven programming within your Xircuits workflows. This system allows components to listen for specific events and react accordingly, enabling a more modular and decoupled design of workflows.

## Overview

The Events Component Library is included in the base Xircuits installation and requires no additional setup. It is ready to use out of the box, allowing for immediate integration of event-driven functionality into your workflows.

### Key Components

#### `OnEvent` Component

- **Purpose**: Acts as an event listener, waiting for a specified event to occur.
- **Usage**: Configure the `OnEvent` component to specify which event to listen for and what actions to execute when the event is fired.
- **Example**: An `OnEvent` component could be used to listen for a "data_ready" event and then trigger a data processing action.

#### `FireEvent` Component

- **Purpose**: Used to trigger an event within the workflow.
- **Usage**: Configure the `FireEvent` component to specify the event name and any payload data to pass along when the event is triggered.
- **Example**: A `FireEvent` component could be used to signal that a data fetching operation has completed, triggering other components to start processing the fetched data.

## Advantages of Using Events

- **Modularity**: Events promote a modular design by decoupling components. Each component can function independently, listening for and reacting to specific events.
- **Scalability**: Event-driven workflows can be easily scaled as new events and listeners can be added without modifying existing components.
- **Flexibility**: By using events, workflows can be more flexible, allowing for dynamic changes in response to different conditions or inputs.

<p align="center">

![](/img/docs/events.gif)

<figcaption class="image-caption">Events Preview</figcaption>
</p>
