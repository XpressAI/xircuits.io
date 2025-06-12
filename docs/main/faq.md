---
sidebar_position: 10
---

# FAQs
**Q: Do I need to build Xircuits to be able to use it?**

Nope, the easiest way to install it is by `pip install xircuits`. If you'd like the latest goodies (but might be unstable features) of Xircuits, you may grab the wheel from our [Github Actions](https://github.com/XpressAI/xircuits/actions). Select the Python Package Builder run from a master branch, and download the wheel artifact.
<details>
  <summary>Video</summary>
  <p align="center">

  ![Download wheel](/img/docs/download-wheel.gif)

  </p>
</details>

**Q: What's the difference between installing and building Xircuits?**

Installing Xircuits means you'll be pip installing it from from pypi or a wheel. You will have access to all Xircuits features, such as running, creating and modifying your own Xircuits workflow as well as components, but you will be unable to modify the core Xircuits features.

Building Xircuits means you will clone the Xircuits repository and run the build steps. Here you will be able to modify and create your own core Xircuits features such as custom nodes, ports, link logic and much more.