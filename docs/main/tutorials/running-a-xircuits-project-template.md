---
sidebar_position: 2
---

# Running a Project Template

The following tutorial will walk you through a Xircuits project template. You will clone an existing Xircuits project, install all requirements, then run it.

## Prerequisites
For this tutorial, ensure that: 
1. You have a Python version that is compatible with Xircuits (Python 3.8+).
2. You have Git installed and able to clone repositories.

## Starting a Xircuits Project from a Template
Starting a Xircuits project template is simple. All you need is to clone an existing project template by:

```console
$ git clone project-url
```

You can view the available project repositories [here](https://github.com/XpressAI/xircuits/tree/master/project-templates#list-of-open-source-project-templates). 

**For this tutorial, clone `https://github.com/XpressAI/template-iris_classification`**


## Getting Familiar with a Xircuits Project Template

When using a project template, you will primarily work with these files and directories:

1. **Readme** - the starting point of every project. Typically contains information on how to setup the project, the Xircuits workflows, and often a description of the components inside.
2. **xircuits-workflows** - this is where all the Xircuits workflows that can perform the project objective are kept.
3. **xai_components** - this is where the Xircuits components used in the `xircuits-workflows` are defined.

**Explore the Iris Classification project template.**

## Setting Up a Project Template

For each project template, the recommended way of setting up the project and installation is by running the `setup.sh` shell script. 

```bash
bash setup.sh
```

For simple project templates, it will usually just perform `pip install -r requirements.txt` that will install the python packages along with Xircuits. For more advanced projects, it may download datasets, create directories and other commands.

**Setup the Iris Classification project template by running `bash setup.sh`.**

## Run the Xircuits Workflows

Once you've setup the project, a Xircuits project template becomes a normal Xircuits project where you should be able to run things right away.
1. Launch Xircuits with `xircuits` from the project template main directory. 
2. Navigate to `xircuits-workflows`.
3. Run the Xircuits workflows. 

**Run IrisClassification.xircuits. You should get the following output:**

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/tutorials/iris_template.gif"></img></p>
</details>

Congratulations you have successfully ran your first Xircuits project template! From here, you should be able to run any project templates. Be sure to checkout the [Xircuits project template section](../../project-template/index.md) if you want to see the various project template workflows made by our engineers and open source contributors.