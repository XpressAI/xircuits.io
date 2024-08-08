---
sidebar_position: 1
---

# Overview


![frontpage](/img/docs/xircuits-frontpage.gif)

Xircuits is a Jupyterlab-based extension that enables visual, low-code, training workflows. It allows anyone to easily create executable Python code in seconds.

It is created by data scientists for data scientists. 

## Key Features

<details>
  <summary><b>Rich Xircuits Canvas Interface</b></summary>
  <br></br>
  <p align="center">Unreal Engine-like Chain Component Interface<br></br>
  <img src="/img/docs/interface-chain.gif" width="600"></img></p>

  <p align="center">Custom Nodes and Ports<br></br>
  <img src="/img/docs/interface-custom-ports.gif" width="600"></img></p>
  
  <p align="center">Smart Link and Type Check Logic<br></br>
  <img src="/img/docs/interface-smart-link.gif" width="600"></img></p>
  
  <p align="center">Component Tooltips<br></br>
  <img src="/img/docs/interface-tooltips.gif" width="600"></img></p>
</details>

<details>
  <summary><b>Code Generation</b></summary>

  Xircuits generates executable Python scripts from the canvas. As they're very customizable, you can perform DevOps automation like actions. Consider this Xircuits workflow which trains an mnist classifier.
  
  ![codegen-argument](/img/docs/codegen-argument.gif)

  You can run the code generated Python script in Xircuits, but you can also take the same script to train 3 types of models in one go using bash script:

    TrainModel.py --epoch 5 --model "resnet50"
    TrainModel.py --epoch 5 --model "vgg16"
    TrainModel.py --epoch 5 --model "mobilenet"

</details>

<details>
<summary><b>Famous Python Library Support</b></summary>
Xircuits is built on top of the shoulders of giants. Perform ML and DL using Tensorflow or Pytorch, accelerate your big data processing via Spark, or perform autoML using Pycaret. We're constantly updating our Xircuits library, so stay tuned for more!

Didn't find what you're looking for? Creating Xircuits components is very easy! If it's in Python - it can be made into a component. Your creativity is the limit, create components that are easily extendable!

</details>

<details>
<summary><b>Effortless Collaboration</b></summary>
Created a cool Xircuits workflow? Just pass the .xircuits file to your fellow data scientist, they will be able to load your Xircuits canvas instantly.

![collab](/img/docs/collab.gif)

Created a cool component library? All your colleagues need to do is to drop your component library folder in theirs and they can immediately use your components.


</details>

And many more.

## How it Works
1. Create a new Xircuits from the Jupyterlab launcher or open an existing .xircuits file.

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ONlBHT5OSbo?si=phd92Yy-B3f6CFyn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

2. Drag components from the Xircuits Component Tray to complete your workflow. Share data among your components using the inPorts and outPorts. Supply or edit Literals which modifies the component behavior!

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rPtulYp9rCo?si=ffK3RrUSeL3CScpq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

3. Press Compile button! The Xircuits will compile the workflow into a Python script. A compiled workflow can also be called in other workflows as a component!

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/xoZY4jeGSy4?si=GvSvM5t486b2BV32" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

4. Run it!

<div className="iframe-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uxHlnOwKYv0?si=8SpzxK7KrNOlukOZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullscreen allow="fullscreen;"></iframe>
</div>

Xircuits will execute the compiled Python code on the Output Viewer.  