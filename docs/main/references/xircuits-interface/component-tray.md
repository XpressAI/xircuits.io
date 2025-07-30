---
sidebar_position: 1
---

# Component Library Tray

The Component Library Tray is an essential part of the Xircuits interface, providing access to all available components for building your workflows. It consists of three main parts: the search bar, library context menus, and the components themselves.

<p align="center">

![](/img/docs/xircuits-component-tray.png)

<figcaption class="image-caption">Xircuits Component Tray</figcaption>
</p>


## Accessing the Component Tray

You can access the Component Library Tray by selecting the block icon on the left toolbar of the Xircuits interface.

## 1. Search Bar

At the top of the Component Library Tray, you'll find a search bar that allows you to quickly find specific components. It searches both the component name and the component docstring, with component names taking priority.

### Search Bar Context Menu

<p align="center">

![](/img/docs/tray-context-main.png)

<figcaption class="image-caption">Main Context Menu</figcaption>
</p>

Next to the search bar, there's a context menu (accessible via the `...` icon) with the following options:


- **Refresh Component Library**: Updates the component list. Use this if you've edited components from an external text editor and the changes haven't been reflected in the component list.
- **Toggle Display Nodes in Library**: Toggles the display of nodes in the library.
- **Create New Component**: Initiates the process of creating a new component.

## 2. Components

The Component Library Tray displays all available components, categorized into:

- General Components
- Library Components (Local)
- Available for Installation (Remote Libraries)

Users can drag and drop these components into their workflow to build their Xircuits projects.

For local libraries, you can click on the library name to reveal the components within that library. Hovering over a component will display its docstring, providing quick information about its functionality.

For more detailed information on components and their usage, please refer to the [Components documentation](/docs/main/references/components/).

## 3. Library Context Menus

Both local and remote libraries have their own context menus, accessible by clicking on the `...` icon next to library names. For local libraries, this icon will appear after you expand the library name.

### For Local Libraries:

<p align="center">

![](/img/docs/tray-context-local-component-library.png)

<figcaption class="image-caption">Local Library Context Menu</figcaption>
</p>


1. **Show in File Explorer**: Opens the file browser at the location of the library.
2. **See Readme**: Opens the library's README file in a markdown viewer.
3. **Show Example**: Opens an example file for the library.
4. **Open Repository**: Opens the library's repository in a new tab.
5. **Uninstall AGENT**: Removes the library from Xircuits after confirmation.

Note: The availability of these options depends on the library's configuration in its `pyproject.toml` file.

### For Remote Libraries:

<p align="center">

![](/img/docs/tray-context-remote-component-library.png)

<figcaption class="image-caption">Remote Library Context Menu</figcaption>
</p>

Remote libraries are listed under the **AVAILABLE FOR INSTALLATION** header. Their context menu includes:

1. **Install [Library Name]**: Initiates the installation process for the selected library.
2. **Open Repository**: Opens the library's repository in a new tab (if available).

These features combine to make the Component Library Tray a powerful tool for managing and utilizing components in your Xircuits projects.

## Troubleshooting

1. If you find that the Component Library Tray is empty, please check whether the `.xircuits` file exists in the base working directory. This file is crucial for the proper functioning of the Component Library Tray.

2. If you've made a new local component library and it does not appear in the tray, ensure that you've properly followed the steps of creating a new library.

## Technical Details

For those interested in the technical aspects of how the Component Library Tray works:

:::note[How it Works]

The Component Library Tray's contents are parsed from the `component_library_config.json` file, which is located in the `.xircuits` directory. This configuration file is generated from two sources:

1. The `.gitmodules` file in the `.xircuits` directory
2. Parsing through the `xai_components/` directory, searching for `pyproject.toml` files

The `component_library_config.json` is updated in two scenarios:
- When a component change is saved
- When the "Refresh Component Library" option is selected from the context menu
:::