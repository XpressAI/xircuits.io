---
sidebar_position: 3
---

# Classification

Before starting any of these examples, please ensure that you installed <code>Pycaret=>2.2</code> in your working environment. You can use <code>pip install pycaret==2.3.8</code> to install it too.    
## Basic Pycaret AutoML Binary classification
![basic_class_example](images/basic_class_example.gif)
##### Example: AutoMLBasicBinaryClassification.xircuits

In this example, you will learn how to build a basic Pycaret classification application that reads a tabular dataset,setup environment, compare training on multiple ML models, fine-tune models, plot results and save the trained model.

1. To start the workflow,first you will need to get a dataset with  `GetData`. Here we chose the *credit* dataset. Additionally, `SampleTestData` could be used to set-aside a testing dataset. 
   
2. To setup the Pycaret AutoML environment you will need the `SetupClassification`. This component initializes the training environment and creates the transformation pipeline. `SetupClassification` component must be present before executing any other component. It takes two mandatory parameters: `in_dataset` and `target(label column)`. All the other parameters are optional.   
   
3. `CompareModelsClassification`: This component trains and evaluates performance of all estimators available in the model library using cross validation.The output of this component is a score grid with average cross validated scores. Additionally, it output a list of the top performing models, number of top model returned can be controlled by the *num_top* input. 
   
### Compare Model Output
![Binary_compare_models](images/Binary_compare_models.png)

4. `CreateModelClassification`: This component trains and evaluates the performance of a **given model** using cross validation.The output of this component is a score grid with CV scores by fold and the created model. 

5. `TuneModelClassification`: This component tunes the hyperparameter of a given model, in this case the output model from `CreateModelClassification`. The output of this component is a score grid with CV scores by fold of the best selected model based on optimize parameter and the tuned model. 
   
6. `PlotModelClassification`: This component analyzes the performance of a trained model on holdout set. the type of the plot wanted could be set in *plot_type*.

### Plot Feature Graph
![Binary_feature](images/Binary_feature.png)


7. `PredictModelClassification`: This component predicts Label and Score (probability of predicted class) using a trained model. When the *predict_dataset* input is None, it predicts label and score on the holdout(validation) set.
   
8. `FinalizeModelClassification`: This component trains a given estimator on the entire dataset including the holdout set.
   
8.  `AutoMLClassification`: This component returns the best model out of all trained models in current session based on the input *optimize* parameter(default optimize is Accuracy). 
    
10.  `SaveModelClassification`: This component saves the transformation pipeline and trained model object into the current working directory as a pickle file for later use.

## Pycaret AutoML Model Operation
![blend_class_example](images/blend_class_example.gif)
##### Example: AutoMLClassificationBlendModels.xircuits 

In this example, you will learn how to build to apply transformation on the dataset, **Blend** the top performing model into one model and calibrate the model.

1. As with the previous example, you would start with a `GetData` and `SampleTestData`.

2. To perform transformation on the dataset you would require to pass parameters to the transformation inputs in `SetupClassification`. available dataset transform operation:
   1. *normalize* : when set to True, it transforms the numeric features by scaling them to a given range. 
   2. *transformation* : when set to True, it applies the power transform to make data more Gaussian-like.   
   3. *ignore_low_variance* : When set to True, all categorical features with insignificant variances are removed from the data.
   4. *remove_multicollinearity* : When set to True, features with the inter-correlations higher than the defined threshold are removed.
   5. *multicollinearity_threshold* :Threshold for correlated features. Ignored when remove_multicollinearity is not True.
   6. *bin_numeric_features* : To convert numeric features into categorical,It takes a list of strings with column names that are related.
   7. *group_features* : When the dataset contains features with related characteristics, group_features parameter can be used for feature extraction. It takes a list of strings with column names that are related.

    More data transformation techniques from Pycaret could be added to the `SetupClassification` component simply by adding new inputs to the component script. 

3. `BlendModelsClassification`: This component trains a Soft Voting / Majority Rule classifier for select models passed in the top_model list. Here, you could pass a list of top models from the `CompareModelsClassification` component or create multiple models and link them to the *model_1,model_2,model_3* inputs. 

4. `CalibrateModelClassification`: This component calibrates the probability of a given estimator using isotonic or logistic regression. The output of this function is a score grid with CV scores by fold and calibrated model. 

5. `logging`: This component save all the trained models logs to MLflow dashboard can access at localhost:5000, to activate logging you will need to set *log_experiment* in `SetupEnvironmentClassification` component to True.  


## Basic Pycaret AutoML Multiclass classification
![multi_class_example](images/multi_class_example.gif)
##### AutoMLBasicMulticlassClassification.xircuits

In this example, we have used the same components to build a basic Pycaret Multiclass classification that reads a tabular dataset. We setup the environment, compare training on multiple ML models, fine-tune models, then pick and save the best performance trained model.

1. For this example we also fetch the dataset with  `GetData`,  but chose the *iris* dataset which has multiple classes.
   
2. In the `SetupClassification`, we need to ensure the *target* input is supplied with the dataset label column name(species).
   
3. `PlotModelClassification` gives us insights on the model performance. The following are some plots that can be generated:

### Plot Boundary Graph 

![multiclass_boundary](images/multiclass_boundary.png)

### Plot Confusion Matrix Graph

![multiclass_confusion_matrix](images/multiclass_confusion_matrix.png)

### Plot Class Report Graph

![multiclass_class_report](images/multiclass_class_report.png)
