---
sidebar_position: 1
---

# CLI Commands

The following is a list of Xircuits related commands that you can use on the command line interface (CLI).

### Start Xircuits

```
$ xircuits
```
- Launches Jupyterlab. Will create `.xircuits` config file at current directory as well as offer to download the `xai_components` from the main branch.

```
$ xircuits --branch branchName
```
- Downloads `xai_components` from a specific branch.

### Download Xircuits Examples + Datasets

```
$ xircuits-examples
```
- Downloads the `examples` and `datasets` directories from the main branch.

```
$ xircuits-examples --branch branchName
```
- Downloads the `examples` and `datasets` directories from a specific branch.


### Download Xircuits Components

```
$ xircuits-components
```
- Downloads the `xai_components` directory from the main branch.

```
$ xircuits-components --branch branchName
```
- Downloads the `xai_components` directory from a specified branch.

### Download Additional Xircuits Components

```
$ xircuits-components --sublib componentLibraryName
```
- Downloads a submodule component library, for example the [Xircuits Pycaret](https://github.com/XpressAI/xai-pycaret) library. For the full list of additional libraries, refer to the [component library list](https://github.com/XpressAI/xircuits/tree/master/xai_components).