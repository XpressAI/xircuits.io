---
sidebar_position: 0
---

# Overview


![frontpage](https://user-images.githubusercontent.com/68586800/160965807-ba0fb65d-3912-4155-96fd-010ae082830b.gif)

Xircuits is a Jupyterlab-based extension that enables visual, low-code, training workflows. It allows anyone to easily create executable python code in seconds.

It is created by data scientists for data scientists. 

## Key Features

<details>
  <summary><b>Rich Xircuits Canvas Interface</b></summary>
  <br></br>
  <p align="center">Unreal Engine-like Chain Component Interface<br></br>
  <img src="https://user-images.githubusercontent.com/68586800/165813394-3d81e135-1c40-42c6-b480-7cba48114c1c.gif
" width="600"></img></p>

  <p align="center">Custom Nodes and Ports<br></br>
  <img src="https://user-images.githubusercontent.com/84708008/161918620-34e20908-f32d-406b-8e47-104e91249472.gif" width="600"></img></p>
  
  <p align="center">Smart Link and Type Check Logic<br></br>
  <img src="https://user-images.githubusercontent.com/84708008/165257379-77776d0e-8b20-4ef9-820b-40b9e80697e4.gif" width="600"></img></p>
  
  <p align="center">Component Tooltips<br></br>
  <img src="https://user-images.githubusercontent.com/84708008/163518580-186d4298-3344-4280-a87a-67be90eec13f.gif" width="600"></img></p>
</details>

<details>
  <summary><b>Code Generation</b></summary>

  Xircuits generates executable python scripts from the workflow. As they're very customizable, you can perform DevOps automation like actions. Consider this Xircuits template which trains an mnist classifier.
  
  ![hyperpara-codegen](https://user-images.githubusercontent.com/68586800/165815661-2b6e17e8-ed1d-4950-97b1-658d2bd14410.gif)

  You can run the code generated python script in Xircuits, but you can also take the same script to train 3 types of models in one go using bash script:

    TrainModel.py --epoch 5 --model "resnet50"
    TrainModel.py --epoch 5 --model "vgg16"
    TrainModel.py --epoch 5 --model "mobilenet"

</details>

<details>
<summary><b>Famous Python Library Support</b></summary>
Xircuits is built on top of the shoulders of giants. Perform ML and DL using Tensorflow or Pytorch, accelerate your big data processing via Spark, or perform autoML using Pycaret. We're constantly updating our Xircuits library, so stay tuned for more!

Didn't find what you're looking for? Creating Xircuits components is very easy! If it's in python - it can be made into a component. Your creativity is the limit, create components that are easily extendable!

</details>

<details>
<summary><b>Effortless Collaboration</b></summary>
Created a cool Xircuits workflow? Just pass the .xircuits file to your fellow data scientist, they will be able to load your Xircuits canvas instantly.

![collab](https://user-images.githubusercontent.com/68586800/165814749-bd782c59-f4d1-4452-a668-48543006d69e.gif)

Created a cool component library? All your colleagues need to do is to drop your component library folder in theirs and they can immediately use your components.


</details>

And many more.
## Workflow
1. Create a new Xircuits from the Jupyterlab launcher or open an existing .xircuits file.

![xircuit](./images/open-xircuit.gif)

2. Drag components from the Xircuits Component Tray to form your training workflow. Share data among your components using the in and out ports.

![xircuit-components](./images/components.gif)

3. Press Compile button! The Xircuits will compile the components into a working python code.

![xircuit-parser](./images/python-parser.gif)

4. Run the compiled python code using your own terminal or use our Output Viewer. 

![xircuit-runner](./images/xircuits-runner.gif)