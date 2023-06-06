---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# Installation
You will need Python 3.8+ to install Xircuits. 
:::tip

We recommend installing in a virtual environment such as Python [venv](https://docs.python.org/3/library/venv.html).
<Tabs>

<TabItem value="win" label="Windows">

```bash
python -m venv venv
source venv/Scripts/activate
```

</TabItem>
<TabItem value="MacOS / Linux" label="MacOS / Linux">

```bash
python -m venv venv
source venv/bin/activate
```

</TabItem>
</Tabs>

:::

To install Xircuits run:

```
pip install xircuits
```

## Canary Installation

If you'd like the latest goodies (but might be unstable features) of Xircuits, you may grab the wheel from our Github Actions. Select the Python Package Builder run from a master branch, and download the wheel artifact.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/download-wheel.gif"></img></p>
</details>

After downloading the artifact, extract the wheel to your working directory then install it using 

```
pip install xircuits-version-py3.none-any.whl
```


## Installing Xircuits Component Libraries

Before being able to use a component library, you need to install them via `pip install xircuits[packageName]`.

For example, to be able to use the Pytorch components, run:
```
pip install xircuits[pytorch]
```

Additionally you can also get all the component library packages via:

```
pip install xircuits[full]
```
We wouldn't recommended it though as it's very large! For the full list of supported libraries, you can visit the [component libraries page](https://github.com/XpressAI/xircuits/blob/master/xai_components/readme.md).

## Download Examples

We have provided some workflows for you to try. To fetch them, run:

```
xircuits-examples
```
## Launch

Finally to launch it, run:
```
xircuits
```
You will be prompted to load the `xai_components` in the current path. We recommend doing so to be able to edit them.