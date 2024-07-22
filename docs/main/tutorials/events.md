# Events

The Xircuits Events component library introduces a dynamic way to handle event-driven programming within your Xircuits workflows. This system allows components to listen for specific events and react accordingly.

In this tutorial, you will learn how to integrate event-driven functionality into your Xircuits workflows using the `OnEvent` and `FireEvent` components.

### Prerequisites

- Ensure you have Xircuits installed. The Events component library is included in the base installation, so no additional setup is required.

### Step 1: Setting Up the Workflow

1. Open your Xircuits workspace.
2. Create a new workflow or open an existing one where you want to implement the event-driven system.

### Step 2: Adding the `OnEvent` Component

1. From the components library, drag and drop the `OnEvent` component into your workflow.
2. Configure the `OnEvent` component:
   - **Event Name**: Specify the name of the event you want this component to listen for.
   - **Actions**: Define the actions to be executed when the event is fired.

### Step 3: Adding the `FireEvent` Component

1. Drag and drop the `FireEvent` component into your workflow.
2. Configure the `FireEvent` component:
   - **Event Name**: Specify the name of the event you want to trigger.
   - **Payload**: Optionally, add any data you want to pass along with the event.

### Step 4: Connecting Components

1. Connect the `FireEvent` component to the parts of the workflow where you want the event to be triggered.
2. Ensure the `OnEvent` component is placed appropriately to listen for the triggered event and execute its actions.

### Step 5: Running the Workflow

1. Run your workflow.
2. Observe how the `OnEvent` component reacts when the `FireEvent` component triggers the specified event.

<p align="center">
  <img width="90%" src="/img/docs/tutorials/events.gif"></img>
  <figcaption class="image-caption">Events Preview</figcaption>
</p>

