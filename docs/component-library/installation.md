---
sidebar_position: 2
---

# Installation

To get started with the Xircuits Component Libraries, you need to fetch the libraries and install them. This can be accomplished by:
- Using the Xircuits CLI command
- Installing through the Xircuits tray library interface
- Manually cloning the libraries and installing the requirements

Let's explore each method in detail.

## Quick Installation using Xircuits CLI
The quickest and most convenient way to fetch and install the Xircuits Component Libraries is by using the provided Xircuits CLI command. If a library is listed in the [component library list](https://github.com/XpressAI/xircuits/tree/master/xai_components#external-library), you can install it by running the following command in your terminal:

```
xircuits install component-lib-name
```

Replace `component-lib-name` with the name of the component library you wish to install. This command will fetch and install the library for you, allowing you to start using the components immediately. Repeat this process for each library you want to include in your project.

## Installation using the Xircuits Library Interface

Alternatively, you can install libraries using the component library tray interface within Xircuits. Open Xircuits, navigate to the library tray, and look for libraries listed under `Available for Installation`. Libraries in white are remote and can be installed. Right-click on a library and select the `Install` option. The library repository will be cloned to the xai_components directory, and you will be prompted to choose a kernel. This kernel will execute the pip install command, allowing you to monitor the installation progress. 

![project-template](/img/docs/component-library/install-from-tray.gif)

After the installation is complete, the component library will be ready for use.

## Manual Installation
If a library is not available as a submodule or you prefer to install it manually, clone the component library into your project's directory. Navigate to the xai_components folder in your project and clone the desired library using the following command:

```
git clone https://github.com/xircuits/xai_libName
```

Replace `xai_libName` with the name of the component library you intend to install. After cloning, navigate to the newly created xai_libName folder and install the required dependencies by running:

```
pip install -r requirements.txt
```

This will install all necessary packages and dependencies for the components to function correctly. With the library and its requirements installed, you are ready to use the Xircuits Component Libraries in your project. Remember to repeat this process for each library you wish to include.
