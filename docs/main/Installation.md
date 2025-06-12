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

To install Xircuits, run:

```bash
pip install xircuits
```

## Canary Installation

If you're interested in the cutting-edge features of Xircuits (which might include unstable features), you can get the latest version directly from our Github Actions. Look for a Python Package Builder run on the master branch, and download the wheel artifact.

<details>
  <summary>Video</summary>
  <p align="center">

  ![](/img/docs/download-wheel.gif)

  </p>
</details>

After downloading, extract the wheel to your working directory and install it with:

```bash
pip install xircuits-version-py3.none-any.whl
```

## Installing Xircuits Component Libraries

Xircuits is designed for extensibility, with a range of component libraries available to enhance its functionality. It includes a set of pre-installed components, but you may need specialized functionalities available in external libraries. We provide a collection of dozens of libraries accessible at our [component libraries collection](https://github.com/XpressAI/xircuits/blob/master/xai_components#external-library). 

Installing these libraries is straightforward. For instance, to use the Pytorch components from our [Pytorch component library](https://github.com/XpressAI/xai-pytorch), simply run:

```bash
xircuits install pytorch
```

Components from our collection can also be installed via the [component library interface](/docs/component-library/installation#installation-using-the-xircuits-library-interface).

## Launch

To start using Xircuits, execute:

```bash
xircuits
```

Upon launch, `xai_components` will be loaded in your current working directory.