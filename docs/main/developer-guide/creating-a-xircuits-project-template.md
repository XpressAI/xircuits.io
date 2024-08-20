---
sidebar_position: 4
id: creating-a-xircuits-project-template
title: Creating a Xircuits Project Template
---

# How to Create a Xircuits Project Template

In the [tutorial](/docs/project-template/running-a-xircuits-project-template), you've learnt on how to run a Xircuits project template. This guide will help you how to create your own. The recommended way is to use the repository project template.

## Starting a New Xircuits Project from the Project Template

We have provided a Xircuits project template repository [here](https://github.com/XpressAI/xircuits-project-template). To use it:

  1. Navigate to the [library template](https://github.com/XpressAI/xircuits-project-template) in your web browser. Select `Use this template`. 
  2. You will be prompted to create a new repository from `xircuits-project-template`. Give it a name and whether you'd want to make it a public or private repository. Once done, select `Create repository from template`.
  3. A new Xircuits project template should be created for you to clone. 

And that's it! As a checklist, these are the things you would need to do:
  1. Add your Xircuits components to `xai_components`.
  2. Add your workflows to `xircuits-workflows`.
  3. Add your required python packages in `requirements.txt`.
  4. Add your build commands in `setup.sh`.
  5. Update your readme for users.

## Adding External Xircuits Component Libraries to the Project as Submodules

If you're using Xircuits component libraries that are also used in your other projects, we encourage you to modularize by keeping it as *submodule* repositories. You can refer to the previous [guide](creating-a-xircuits-component-library.md) on how to create a component library.

Once created, you can add it as a submodule by running:
```
cd xai_components
git submodule add https://github.com/your_org/your_lib xai_lib_name
```

This will create a `.gitmodules` file. Don't forget to commit it.

Finally in your `setup.sh`, you can include these commands which will pull the component library:
```
git submodule init
git submodule update
```


## Submitting the Project Template to Xircuits

If your project is something extendable and you'd like to share to the world, you are more welcome to submit it to our official [Xircuits Project Template list](https://github.com/XpressAI/xircuits/tree/master/project-templates#list-of-open-source-project-templates).