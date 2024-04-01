# Events

The Xircuits Events System introduces a dynamic way to handle event-driven programming within your Xircuits workflows. This system allows components to listen for specific events and react accordingly, enabling a more modular and decoupled design of workflows.

## Overview

The Events Component Library is included in the base Xircuits installation and requires no additional setup. It is ready to use out of the box, allowing for immediate integration of event-driven functionality into your workflows.

Events in Xircuits provide a mechanism for triggering actions in response to specific occurrences within a workflow. This is accomplished through two primary components: `OnEvent` and `FireEvent`.

### `OnEvent` Component

The `OnEvent` component acts as an event listener, waiting for a specified event to occur. When the event is fired, the `OnEvent` component executes its associated actions.

### `FireEvent` Component

The `FireEvent` component is used to trigger an event. All `OnEvent` components listening for this event will be executed, and any data passed as the payload will be available to them.

<p align="center">
  <img width="90%" src="/img/docs/tutorials/events.gif"></img>
  <figcaption class="image-caption">Events Preview</figcaption>
</p>