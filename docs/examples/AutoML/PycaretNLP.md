---
sidebar_position: 3
---

# NLP

Before starting any of these examples, please ensure that you installed <code>Pycaret=>2.2</code> in your working environment. You can use <code>pip install pycaret==2.3.8</code> to install it too. 

**Note :** Some functionalities in AutoML NLP requires an English language model. The language model is not downloaded automatically when you install Pycaret. To download the model, please type the following in your command line:

```
python -m spacy download en_core_web_sm
python -m textblob.download_corpora
```

## Basic Pycaret AutoML NLP

![NLP-basic-example](/img/docs/examples/AutoML/NLP_basic_example.gif)

##### Example: AutoMLBasicNLP.xircuit

In this example, you will learn how to build a basic NLP Pycaret application that reads a tabular dataset, setup environment, create and assign NLP ML models, plot results and save the trained model.

1. To start the workflow,first you will need to get a dataset with `GetData`. Here we chose the *kiva* dataset. Additionally, `SampleData` could be used to randomly sample certain number of row from the dataset.

2. To setup the Pycaret AutoML environment you will need the `SetupNLP`, This component initializes the training environment and creates the transformation pipeline. `SetupNLP` component must be present before executing any other component. It takes one mandatory parameter **in_dataset**. All the other parameters are optional.

3. `CreateModelNLP`: This component trains and evaluates the performance of a **selected model**. You specify the number of topics to group the words. The output of this component is a trained clustering model.

4. `AssignModelNLP`: This function assigns topic group labels to the dataset for a given model, in this case we used the trained model from `CreateModelNLP` which adds *Dominant_Topic* and *Perc_Dominant_Topic* columns to the dataset. *Dominant_Topic* in this example is the topic number with highest proportion and *Perc_Dominant_Topic* is the percentage of dominant topic over 1.

5. `PlotModelNLP`: This component analyzes the performance of a trained model on the dataset. The type of the plot desired can be set in *plot_type*.


### Plot Graphs
#### UMAP Dimensionality Plot
![UMAP_NLP](/img/docs/examples/AutoML/UMAP_NLP.png)

#### Bigram Frequency Plot
![Bigram_NLP](/img/docs/examples/AutoML/Bigram_NLP.png)

#### t-SNE (3d) Dimension Plot
![TSNE_NLP](/img/docs/examples/AutoML/TSNE_NLP.png)


6. Lastly, `SaveModelNLP`: This component saves the transformation pipeline and trained model object into the current working directory as a pickle file for later use.


##  Pycaret AutoML Model Tuning

![NLP-tune-example](/img/docs/examples/AutoML/NLP_tune_example.gif)

##### Example: AutoMLTuningNLP.xircuit

In this example, you will learn how to tune the *num_topics* parameter in NLP model.

1.  As with the previous example, you would start with a `GetData` and `SampleData`.
   
2. In this example we excluded some common words from the model, this done by passing a list of the excluded words to the *custom_stopwords* in the `SetupNLP` component.
   
3. Next, we created a basic *Latent Dirichlet Allocation* model with 4 topics using the `CreateModelNLP` component and plot the *Word Distribution Plot* using the `PlotModelNLP`.

### Plot Graphs
#### Word Distribution Plot
![Word_Distribution_NLP](/img/docs/examples/AutoML/Word_Distribution_NLP.png)

4. Tuned NLP model using unsupervised Coherence Value, Topic Coherence measures score a single topic by measuring the degree of semantic similarity between high scoring words in the topic. Using the `TuneModelNLP()` component and the *Latent Dirichlet Allocation* model we apply unsupervised model tuning and get the *Coherence Score* and *num_topics*. 
```
Best Model: Latent Dirichlet Allocation | # Topics: 400 | Coherence: 0.4573
```   
5. The other method to tune NLP model is by using a classifier or regressor model. In this example, The dataset we are using is labelled using `status` column. In this case we can use the `TuneModelNLP()` component to determine the best number of topics, since this is a classification problem we used a supervised machine learning approach with *Accuracy* as measure of interest to get the *Accuracy* and *num_topics*.
```
Best Model: Latent Dirichlet Allocation | # Topics: 8 | Accuracy : 0.869
```  
6. Lastly, `SaveModelNLP`: This component saves the transformation pipeline and trained model object into the current working directory as a pickle file for later use.
