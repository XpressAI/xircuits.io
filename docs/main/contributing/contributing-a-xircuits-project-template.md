---
sidebar_position: 2
id: contributing-a-xircuits-project-template
title: Contributing a Xircuits Project Template
tags:
  - component dev
  - tutorials
---

# Contributing your Own Xircuits Project Template

You can create a lot of use cases in Xircuits, and we're more than happy to showcase what you've built in our list! Unlike the component library, creating a PR for a Xircuits project template is much easier. All you need is to update the official [Xircuits project template](https://github.com/XpressAI/xircuits/blob/master/project-templates/readme.md) readme with your project. We will verify that it works before adding it to the list.

### 1. Fork the Xircuits Repository

From the Xircuits repository, select the fork button. This will create a copy of the current Xircuits to your own Github profile. Any changes you do to this fork will only be reflected on your side. 


### 2. Clone and Create a Branch

  Once you have your own fork, clone it to your local by:

  ```
  $ cd your_working_dir
  $ git clone https://github.com/your_username/xircuits
  $ cd xircuits
  ```

  Then create a branch for your component library PR.

  ```
  $ git checkout -b your-project-template-name
  ```

### 3. Update the Xircuits Project Template List

Navigate to `project-templates/readme.md` and add your project to the list. 

### 4. Create the PR! 

Navigate to your Xircuits repository and create the pull request! To ensure that we can help you merge it, [please allow us to be able to push commits to your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork#enabling-repository-maintainer-permissions-on-existing-pull-requests). 

  <details>
  <summary><b>VS Code Example</b></summary>
    <p align="center">
    <img src="/img/docs/contributing/submit-component-lib-pr.png"></img></p>
  </details><br/>


And that's it! Sharing your project template is a good way of getting more contributors to help your repository. We're always looking out for more interesting use cases that you can build with Xircuits!