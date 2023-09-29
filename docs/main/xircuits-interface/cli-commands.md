---
sidebar_position: 5
---

# CLI Commands

The following is a list of Xircuits related commands that you can use on the command line interface (CLI) after you've installed it.

###  `xircuits`

Launches Jupyterlab. Will initialize `.xircuits` config file at current directory as well as offer to load the `xai_components` to the current working directory.

#### Options

| Name | Default | Description |
| --- | --- | --- |
| `--branch [branchName]` | master | Downloads `xai_components` from a specific Xircuits branch. |

Additionally, you should also be able to run any [Jupyterlab specific CLI commands](https://nocomplexity.com/documents/jupyterlab/notebooks/jupyterlab-cli.html).

### `xircuits-components`

Loads the `xai_components` directory to the current working directory.

#### Options

| Name  | Description |
| --- | --- |
| `--branch [branchName]` | Downloads the `xai_components` directory from a specified branch. |
| `--sublib [submodule Name]` | Downloads a Xircuits submodule component library, for example the [Xircuits Pycaret](https://github.com/XpressAI/xai-pycaret) library. For the full list of additional libraries, refer to the [component library list](https://github.com/XpressAI/xircuits/tree/master/xai_components). |

### `xircuits-submodules` [xai_subComponentLibName]

Initialize and load a [`xai_components` submodule library](https://github.com/XpressAI/xircuits/tree/master/xai_components#external-library)  to the current working directory and install the required packages.

#### Options

| Name  | Description |
| --- | --- |
| `--no-install` | Will only initialize and load the submodule component library without installing it. |

### `xircuits-examples`

Downloads the `examples` and `datasets` directories from the main branch.

#### Options

| Name | Description |
| --- | --- |
| `--branch [branchName]` | Downloads the `examples` and `datasets` directories from a specific Xircuits branch. |

### `xircuits-compile [source_file.xircuits] [out_file.py]`

Compiles a Xircuits workflow `workflow_name.xircuits` into `compiled_name.py`. Useful when you want to compile a workflow without opening Jupyterlab.

#### Options

| Name  | Description |
| --- | --- |
| `[python_paths_file]` | JSON file with a mapping of component name to required python path. e.g. {'MyComponent': '/some/path'} |