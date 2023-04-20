---
sidebar_position: 2
---

# Installation
To get started with the Xircuits Component Libraries, you need to complete two main steps: fetching the libraries and installing them. There are two ways to accomplish this, either using the Xircuits CLI command for a quick installation or manually cloning the libraries and installing the requirements. Let's explore both methods in detail.

## Quick Installation using Xircuits CLI
The quickest and most convenient way to fetch and install the Xircuits Component Libraries is by using the provided Xircuits CLI command. If a library is included as a submodule in the main Xircuits repository, you can install it by running the following command in your terminal:

```
xircuits-submodules component-lib-name
```

Replace component-lib-name with the name of the component library you want to install. This command will fetch the library and install it for you, allowing you to start using the components right away. Repeat this process for each library you want to include in your project.

## Manual Installation
If a library is not available as a submodule or you prefer to install it manually, you can clone the Xircuits Component Libraries into your project's directory. To do this, navigate to the xai_components folder in your project, and then clone the desired library using the following command:

```
git clone https://github.com/xircuits/xai_libName
```

Replace xai_libName with the name of the component library you wish to install. Once the library has been cloned, navigate to the newly created xai_libName folder and install the required dependencies by running:

```
pip install -r requirements.txt
```

This will install all the necessary packages and dependencies needed for the components to function correctly. With the library and its requirements now installed, you are ready to start using the Xircuits Component Libraries in your project. Remember to repeat this process for each library you wish to include.