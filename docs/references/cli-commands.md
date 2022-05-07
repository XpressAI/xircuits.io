---
sidebar_position: 1
---

# CLI Commands

The following is a list of Xircuits related commands that you can use on the command line interface (CLI).

## Starting Xircuits

```
xircuits
```
Launches Jupyterlab. Will create `.xircuits` config file at current directory as well as offer to download the `xai_components` from the main branch.

```
xircuits --branch branchName
```
Alternatively downloads `xai_components` from a specific branch.

## Downloading Xircuits Examples + Datasets

```
xircuits-examples
```
Downloads the `examples` and `datasets` directories from the main branch.

```
xircuits-examples --branch branchName
```
Downloads the `examples` and `datasets` directories from a specific branch.


## Downloading Xircuits Components

```
xircuits-components
```
Downloads the `xai_components` directory from the main branch.

```
xircuits-components --branch branchName
```
Downloads the `xai_components` directory from a specified branch.

```
xircuits-components --sublib componentLibraryName
```
Downloads a single submodule component library.