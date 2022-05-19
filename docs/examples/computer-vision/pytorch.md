---
sidebar_position: 2
description: Learn how to make a Xircuits workflow to train a custom unet model in Pytorch, perform inference, or converting a torch model into an onnx model.
---

# Pytorch

## Training a Custom Binary Unet Model
![unet-training](/img/docs/examples/computer-vision/unet-training.png)

##### Example: PyTorchUnetTrainSample.xircuits
To train a binary unet model in PyTorchUnetTrainSample.xircuits, you would need a few components:
1. `ReadMaskDataset`: In order to run this component, please download any segmentation dataset that contains the images and segmentation images and ensure the image name in image folder is same in the segmentation folder. Any preprocessing can also be done in this component before passing to the next component.
```
class ReadMaskDataSet(Component):
    ...

    def execute(self, ctx) -> None:

        if self.dataset_name.value and self.mask_dataset_name.value:

            # Preprocessing can be done here if needed

            self.dataset.value = (self.dataset_name.value, self.mask_dataset_name.value)

        else:
            print("Dataset was not found!")

        self.done = True
```
Besides, custom dataset should follow in this tree format.
```
# working directory
# |
# +-- Datasets
# |    |
# |    +-- images
# |        |    |
# |        |    +-- car
# |        |          |
# |        |          +-- image1.png...
# |        |          +-- image2.png...
# |    +-- segmentations
# |        |    |
# |        |    +-- car
# |        |          |
# |        |          +-- image1.png...
# |        |          +-- image2.png...
```
3. `ImageTestSplit`: You may want to change the split ratio (default is 0.8), random seed (for reproducibility) and training image size.
3. `PrepareUnetDataLoader`: This component should create the data loader (for training and testing data loader). You may want to change the batch size for the image loader, shuffle (default is True), and workers (number of worker for the data loader, default is 0).
4. `CreateUnetModel`: This component should create the unet model. However, you can also specify the learning rate (default is 0.001), early stop patience (default is 15) and verbose (default is True).
5. `TrainUnet`: This component is the final step of the unet training. You can specify the number of epochs and path you want to save the model after performing the training.

**Do note**: That each component is needed from the previous component and output to be used later in the next component. Besides, any needed changes can be done in the python file associated with the component.

## Loading Unet model and Perform Inference
![unet-inference](/img/docs/examples/computer-vision/unet-inference.gif)

##### Example: PyTorchUnetInferenceSample.xircuits
To perform a binary unet model inference in PyTorchUnetInferenceSample.xircuits, you would need to first load the Unet model and perform the preprocessing step before loading the testing image. But in this case, we would have all the needed functions inside one single component (i.e. UnetPredict).
1. `UnetPredict`: To do the unet inference, please load the model whether in torch format or onnx format and an image path in the config.

## Converting Torch model to Onnx model
![unet-to-onnx](/img/docs/examples/computer-vision/unet-to-onnx.png)

##### Example: ConvertToOnnxSample.xircuits
To convert a torch model into an onnx model, you would need a few components:
1. `UnetModel`: Create the unet model, but you also specify the gpu (default is 0 (cpu)).
2. `ConvertTorchModelToOnnx`: In order to run the complete conversion pipeline, you need to specify the input model path (pth format) and output model path (onnx format).
