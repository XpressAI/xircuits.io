---
sidebar_position: 1
id: contributing-a-xircuits-component-library
title: Contributing a Xircuits Component Library
tags:
  - component dev
  - tutorials
---

# Contributing your Own Xircuits Component Library

This section will focus on how to create a component library pull request so you can showcase your library in our [Xircuits Component Library list](https://github.com/XpressAI/xircuits/tree/master/xai_components#readme)! Users can interact with the component libraries featured in this list using the Xircuits [component library command](main/references/cli-commands.md).

Before proceeding, ensure that you have already have your component library repository. We've provided a [guide](main/developer-guide/creating-a-xircuits-component-library.md) for that.


### 1. Fork the Xircuits Repository

  Navigate to the [Xircuits repository](https://github.com/XpressAI/xircuits) and create a [fork](https://github.com/XpressAI/xircuits/fork) to your account. This is your own copy of Xircuits to freely experiment with changes without affecting the original one.

### 2. Clone and Create a Branch

  Once you have your own fork, clone it to your local by:

  ```
  cd your_working_dir
  git clone https://github.com/your_username/xircuits
  cd xircuits
  ```

  Then create a branch for your component library PR.

  ```
  git checkout -b your-lib-branch-name
  ```

  Verify that you've successfully created your branch.

  <details>
    <summary><b>Sample Log</b></summary>

    sample-user@LAPTOP MINGW64 ~/Documents/Github/xircuits-sample-user-fork
    $ git clone https://github.com/sample-user/xircuits
    Cloning into 'xircuits'...
    remote: Enumerating objects: 5820, done.
    remote: Counting objects: 100% (5820/5820), done.
    remote: Compressing objects: 100% (1687/1687), done.
    remote: Total 5820 (delta 4064), reused 5750 (delta 4039), pack-reused 0
    Receiving objects: 100% (5820/5820), 8.52 MiB | 7.69 MiB/s, done.
    Resolving deltas: 100% (4064/4064), done.

    sample-user@LAPTOP MINGW64 ~/Documents/Github/xircuits-sample-user-fork
    $ cd xircuits/

    sample-user@LAPTOP MINGW64 ~/Documents/Github/xircuits-sample-user-fork/xircuits (master)
    $ git checkout -b sample-user/new-component-lib
    Switched to a new branch 'sample-user/new-component-lib'
  </details>

### 3. Add Component Library as Submodule

  External component libraries are implemented as [submodules](https://github.com/XpressAI/xircuits/blob/master/adr/0003-Refactor%20Component%20Libraries%20as%20Submodules.md) in Xircuits. To add your component library, use the git submodule command.

  ```
  git submodule add https://github.com/sample-user/xai-sample-library xai_components/xai_sample
  ```

  
:::info

Don't forget that you should prepend `xai_` to the directory name in order for your component library to be parsed by the Xircuits component tray. So if your repository name is `xai-sample-library`, please convert the hyphen ( - ) to underscore ( _ ).

:::
  <details>
    <summary><b>Sample Log</b></summary>

    sample-user@LAPTOP-GO9QVI9H MINGW64 ~/Documents/Github/xircuits-sample-user-fork/xircuits (master)
    $ git submodule add https://github.com/sample-user/xai-sample-library xai_components/xai_sample
    Cloning into 'C:/Users/sample-user/Documents/Github/xircuits-sample-user-fork/xircuits/xai_components/xai_sample'...
    remote: Enumerating objects: 7, done.
    remote: Counting objects: 100% (7/7), done.
    remote: Compressing objects: 100% (6/6), done.
    remote: Total 7 (delta 0), reused 6 (delta 0), pack-reused 0
    Receiving objects: 100% (7/7), 6.06 KiB | 6.06 MiB/s, done.
    warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it
  </details>
  
  If successful, you should be able to see them staged in git. Commit both the .gitmodules and your component library and push them.  
  <details>
  <summary><b>VS Code Example</b></summary>
    <p align="center">
    <img src="/img/docs/contributing/vscode-submodule.png"></img></p>
  </details>

### 4. Create the PR! 

Navigate to your Xircuits repository and create the pull request! To ensure that we can help you merge it, [please allow us to be able to push commits to your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork#enabling-repository-maintainer-permissions-on-existing-pull-requests). 

  <details>
  <summary><b>VS Code Example</b></summary>
    <p align="center">
    <img src="/img/docs/contributing/submit-component-lib-pr.png"></img></p>
  </details><br/>

And you're done! We'll give a look at your PR as soon as possible, so keep track the review tab now and then. You can also join our Discord if you would like to discuss anything. 