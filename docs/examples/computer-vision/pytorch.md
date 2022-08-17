---
sidebar_position: 2
description: Learn how to make a Xircuits workflow to train a mnist model in Pytorch, save the weights, then perform inference using the saved weights.
---

# Pytorch

Before running this example, ensure that you have already installed the torch packages. You can do this by:

```
$ pip install xircuits[pytorch]
```
## Training a Torch ML Model

The following example showcases how to load a Torch dataset, specify a Torch model, train and evaluate, then save the state in Xircuits.
![torch-train](/img/docs/examples/computer-vision/torch-train.png)
##### Example: TorchTrainModel.xircuits


1. `LoadTorchVisionDataset`: Loads a [Torch Vision Dataset](https://pytorch.org/vision/stable/datasets.html). For this case, we're loading the [FASIONMNIST dataset](https://pytorch.org/vision/stable/generated/torchvision.datasets.FashionMNIST.html#torchvision.datasets.FashionMNIST).  
2. `TorchDataLoader`: Creates an iterator for the dataset. The batch size can be adjusted depending on your device memory. By default the size is 64.
3. `TorchModel`: A custom PyTorch neural network model that expects a 28*28 input. Internally it is defined as:
    ```
    class NeuralNetwork(nn.Module):
        def __init__(self):
            super(NeuralNetwork, self).__init__()
            self.flatten = nn.Flatten()
            self.linear_relu_stack = nn.Sequential(
                nn.Linear(28*28, 512),
                nn.ReLU(),
                nn.Linear(512, 512),
                nn.ReLU(),
                nn.Linear(512, 10)
            )

        def forward(self, x):
            x = self.flatten(x)
            logits = self.linear_relu_stack(x)
            return logits
    ```
    You may modify the model definition by opening the script via right click menu. Additionally, you can also experiment on changing the loss function and optimizers which are passed to the `TrainTorchModel` component. By default they are using CrossEntropyLoss and SGD with learning rate of 1e-3.

4. `TrainTorchModel`: Trains a Torch model given a Torch neural network config as well as a data iterator from `TorchDataLoader`. Epochs are configurable.
5. `TestTorchModel`: Tests a trained Torch model instance against data provided from `TorchDataLoader`. 
6. `SaveTorchModelState`: Saves the trained Torch model into a state dict `.pth`. If the path is not provided, the model will be saved under the same name as the Xircuits canvas.

<details>
<summary>Expected Output</summary>
<code>

    ======================================
    __   __  ___                _ _
    \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
    \ \  \  /| | '__/ __| | | | | __/ __|
    / /  /  \| | | | (__| |_| | | |_\__ \
    /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

    ======================================

    Xircuits is running...

    
    Executing: LoadTorchVisionDataset
    Downloading FashionMNIST to data

    Executing: TorchDataLoader
    Shape of X [N, C, H, W]: torch.Size([64, 1, 28, 28])
    Shape of y: torch.Size([64]) torch.int64

    Executing: TorchModel
    Using cpu device
    NeuralNetwork(
    (flatten): Flatten(start_dim=1, end_dim=-1)
    (linear_relu_stack): Sequential(
        (0): Linear(in_features=784, out_features=512, bias=True)
        (1): ReLU()
        (2): Linear(in_features=512, out_features=512, bias=True)
        (3): ReLU()
        (4): Linear(in_features=512, out_features=10, bias=True)
    )
    )

    Executing: TrainTorchModel
    Using cpu device

    Epoch 1
    -------------------------------
    loss: 2.298100  [    0/60000]
    loss: 2.294125  [ 6400/60000]
    loss: 2.274020  [12800/60000]
    loss: 2.263388  [19200/60000]
    loss: 2.250272  [25600/60000]
    loss: 2.205179  [32000/60000]
    loss: 2.225069  [38400/60000]
    loss: 2.186872  [44800/60000]
    loss: 2.180459  [51200/60000]
    loss: 2.145460  [57600/60000]

    Epoch 2
    -------------------------------
    loss: 2.157059  [    0/60000]
    loss: 2.150169  [ 6400/60000]
    loss: 2.091775  [12800/60000]
    loss: 2.104574  [19200/60000]
    loss: 2.052130  [25600/60000]
    loss: 1.982857  [32000/60000]
    loss: 2.017010  [38400/60000]
    loss: 1.938391  [44800/60000]
    loss: 1.943105  [51200/60000]
    loss: 1.860412  [57600/60000]

    Epoch 3
    -------------------------------
    loss: 1.902195  [    0/60000]
    loss: 1.868288  [ 6400/60000]
    loss: 1.757673  [12800/60000]
    loss: 1.796579  [19200/60000]
    loss: 1.678521  [25600/60000]
    loss: 1.632160  [32000/60000]
    loss: 1.656519  [38400/60000]
    loss: 1.565977  [44800/60000]
    loss: 1.594191  [51200/60000]
    loss: 1.476008  [57600/60000]

    Executing: TestTorchModel
    Using cpu device
    Test Error: 
    Accuracy: 63.3%, Avg loss: 1.502265 


    Executing: SaveTorchModelState
    Saved PyTorch Model State to examples/TorchTrainModel.pth

    Finish Executing
</code>
</details>



## Performing Inference using Torch

The following example showcases how to load a Torch model state and perform an inference.

![torch-inference](/img/docs/examples/computer-vision/torch-inference.png)

To perform inference, you will need the following components:

1. `Image2TorchTensor`: converts an image loaded from provided path to a Torch tensor.
2. `TorchModel`: creates a custom Torch model config. Ensure that you have used the same model config used in training.
3. `LoadTorchModelState`: loads a Torch model state from a previously saved .pth. You will also need to provide the original Torch model class, in this case the previous `TorchModel`.
4. `TorchModelPredictFromTensor`: loads performs a prediction given a Torch model configuration, tensor, and class list. For this example, we have trained using the fashionMNIST dataset, and therefore the classes are `"T-shirt/top", "Trouser", "Pullover", "Dress", "Coat", "Sandal", "Shirt", "Sneaker", "Bag", "Ankle boot"`.


<details>
<summary>Expected Output</summary>
<code>

    ======================================
    __   __  ___                _ _
    \ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
    \ \  \  /| | '__/ __| | | | | __/ __|
    / /  /  \| | | | (__| |_| | | |_\__ \
    /_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

    ======================================

    Xircuits is running...


    Executing: Image2TorchTensor
    Size of the Original image:  (11667, 13610)
    Size of the image after resize:  (28, 28)
    Size of the tensor:  torch.Size([1, 28, 28])

    Executing: TorchModel
    Using cpu device
    NeuralNetwork(
    (flatten): Flatten(start_dim=1, end_dim=-1)
    (linear_relu_stack): Sequential(
        (0): Linear(in_features=784, out_features=512, bias=True)
        (1): ReLU()
        (2): Linear(in_features=512, out_features=512, bias=True)
        (3): ReLU()
        (4): Linear(in_features=512, out_features=10, bias=True)
    )
    )

    Executing: LoadTorchModelState
    Using cpu device

    Executing: TorchModelPredictFromTensor
    Using cpu device
    Predicted: "Shirt"

    Finish Executing
</code>
</details>