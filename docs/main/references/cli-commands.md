---
sidebar_position: 2
---

# CLI Commands

The following is an updated list of CLI commands for Xircuits that you can use after you've installed it. You also can type `xircuits --help` in your terminal to display a list of all available commands:

```bash
$ xircuits --help

usage: xircuits {start,install,fetch-only,examples,compile,list} ...

Xircuits Command Line Interface

positional arguments:
  {start,install,fetch-only,examples,compile,list}
    start               Start Xircuits.
    install             Fetch and installs a library for Xircuits.
    fetch-only          Fetch a library for Xircuits. Does not install.
    uninstall           Uninstall a component library for Xircuits.
    examples            Download examples for Xircuits.
    compile             Compile a Xircuits workflow file.
    list                List available component libraries for Xircuits.
```

---

### Start Xircuits
```bash
xircuits
```
or 
```bash
xircuits start
```
- Starts Xircuits, typically launching JupyterLab and initializing the `.xircuits` config file in the current directory. It also loads the `xai_components` into the current working directory.
- You can append any JupyterLab-specific launch commands, for example:
    ```bash
    xircuits start --no-browser
    ```

---

### Install Xircuits Component Library
```bash
xircuits install <component library name>
```
- Fetches and uses `pip` to install a component library for Xircuits based on its `requirements.txt`.
- The component library will be saved at `./xai_components/`.
- You can provide a component library name from the supported [component library list](https://github.com/XpressAI/xircuits/tree/master/xai_components) or a GitHub repository URL.

---

### Fetch Xircuits Component Library
```bash
xircuits fetch-only <component library name>
```
- Fetches but does not install a component library for Xircuits.
- The component library will be saved at `./xai_components/`.
- You can provide a component library name from the supported [component library list](https://github.com/XpressAI/xircuits/tree/master/xai_components) or a GitHub repository URL. 
- If the directory already exists, it will return an error.

---

### Uninstall Xircuits Component Library

```bash
xircuits uninstall <component library name>
```

* Uninstalls a previously installed component library from the `./xai_components/` directory.
* Shows a success message when the library is removed.
* If the library does not exist, a warning will be shown.
* Core libraries such as `xai_utils` and `xai_events` are protected and cannot be uninstalled.

---

### Download Xircuits Examples
```bash
xircuits examples
```
- Loads the `examples` directory from the Xircuits wheel to your current directory.

---

### Compile Xircuits File
```bash
xircuits compile <source_file> <out_file> [python_paths_file]
```
- Compiles a Xircuits workflow from `source_file.xircuits` into `out_file.py`. This is useful for compiling a workflow without opening JupyterLab.
- Optionally provide `python_paths_file`, a JSON file with a mapping of component names to required Python paths, e.g., `{'MyComponent': '/some/path'}`.

---

### List Component Installation 
```bash
xircuits list
```
- Lists installed, available, and remote component libraries for Xircuits.

---

Each command also supports the `-h` option for help, which provides additional information and usage examples for the command.