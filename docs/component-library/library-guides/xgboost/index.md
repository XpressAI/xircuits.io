# XGBoost

XGBoost is an optimized distributed gradient boosting library designed to be highly efficient, flexible and portable. It implements machine learning algorithms under the Gradient Boosting framework.

## Example

Let's start with training a XGBoost model using the Iris dataset, then evaluating its performance. In this guide, we'll be using these components:

- `SKLearnLoadDataset`: This component loads a specific toy dataset from the sklearn dataset module based on the provided dataset name.

- `SKLearnTrainTestSplit`: This component takes an sklearn dataset and splits it into train and test sets based on the provided parameters like train split ratio, shuffle option, etc.

- `XGBoostClassifier`: This component trains an XGBoost classifier on the provided training data and target. It allows customization of various parameters like the number of estimators, maximum depth, learning rate, and objective.

- `XGBoostPredict`: This component uses a trained XGBoost classifier to make predictions on the provided testing data. If the test target is also provided, it calculates and returns the accuracy of the model's predictions.

Ensure you have both `xai_sklearn` and `xai_xgboost` installed.

Open a new canvas and try connecting them one after the other. For `SKLearnLoadDataset`, you can refer to the [Scikit learn dataset page](https://scikit-learn.org/stable/datasets/toy_dataset.html) on which dataset you can fetch. For this example, let's use the iris dataset. 

The resulting workflow should be similiar to XGBoostClassifier.xircuits. If it is, try running it!

You should get the following output.
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


    Executing: SKLearnLoadDataset

    Executing: SKLearnTrainTestSplit
    Split Parameters:
    Train Split 0.75 
    Shuffle: True 
    Random State: None
    Train data shape: (37, 4), Train target shape: (37,)
    Test data shape: (113, 4), Test target shape: (113,)

    Executing: XGBoostClassifier

    Executing: XGBoostPredict
    Accuracy: 94.69%

    Finished Executing
</code>
</details>
</br>

Easy enough right?

## Using Your Own Data

Now that you've successfully trained an XGBoost model and performed a prediction based on the Iris dataset, you might be interested in using your own data. If so, you can use the following component:

`CSVToSKLearnDataset`: This component reads a CSV file and transforms it into a format compatible with sklearn.datasets. It also handles tasks such as selecting specific columns as features and targets, dealing with NA/missing values, and encoding categorical targets.

Replace `SKLearnLoadDataset` with `CSVToSKLearnDataset` and update the inPorts. For this example, we can use the [pinguin dataset](https://www.kaggle.com/code/parulpandey/penguin-dataset-the-new-iris). If it does not exist in your working directory, you can fetch it using the `xircuits-examples` command. Update its inPorts so that it looks like this.

![image](https://github.com/XpressAI/xircuits.io/assets/68586800/f9d355d6-6e8a-42e6-9d27-a67cdd946c7c)

As with the previous example, simply press run. You should see 

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


    Executing: CSVToSKLearnDataset
    Data shape: (344, 2), Target shape: (344,)

    Executing: SKLearnTrainTestSplit
    Split Parameters:
    Train Split 0.75 
    Shuffle: True 
    Random State: None
    Train data shape: (86, 2), Train target shape: (86,)
    Test data shape: (258, 2), Test target shape: (258,)

    Executing: XGBoostClassifier

    Executing: XGBoostPredict
    Accuracy: 75.97%

    Finished Executing
</code>
</details>
</br>

Feel free to experiment around with the parameters, say adding columns to for the data or adjusting the split size. 