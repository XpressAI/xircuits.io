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

Before proceeding, ensure that you have already have your component library repository. We've provided a [guide](/docs/main/developer-guide/creating-a-xircuits-component-library.md) for that.


### 1. Fork the xai-components-manifest Repository

Navigate to the [xai-components-manifest repository](https://github.com/XpressAI/xai-components-manifest) and fork it to your account. This gives you a personal copy to work on.

### 2. Clone Your Fork and Create a Branch

Clone your fork locally and create a feature branch:

```bash
git clone https://github.com/your_username/xai-components-manifest.git
cd xai-components-manifest
git checkout -b add-your-lib
```

```bash
sample-user@machine ~/xai-components-manifest
$ git clone https://github.com/sample-user/xai-components-manifest.git
Cloning into 'xai-components-manifest'...
...
$ cd xai-components-manifest
$ git checkout -b sample-user/add-xai-sample-library
Switched to branch 'sample-user/add-xai-sample-library'
```

### 3. Update the Manifest File

Add your component library details to `xai_components_manifest.jsonl`. You can do this via the command line or a text editor.

#### Command Line Example

```bash
echo '{"path": "xai_components/xai-yourlib", "url": "https://github.com/your_username/xai-yourlib", "library_id": "YOURLIB", "git_ref": "main"}' \
  >> xai_components_manifest.jsonl
```

:::info

Ensure you use the folder name format `xai_<library>`, for example `xai_yourlib`, so Xircuits can locate it.


Once added, commit your change:

```bash
git add xai_components_manifest.jsonl
git commit -m "Add xai-yourlib to components manifest"
```

### 4. (Optional) Regenerate Metadata Locally

To preview the metadata output, run:

```bash
python create_metadata.py
```

This will generate:

- `index.json`
- `metadata/<library_id>.json`

### 5. Create a Pull Request

Push your branch to your fork and open a pull request against `XpressAI/xai-components-manifest`. Include a description of your component library and link to its repository.

Once merged, your library will be available to all Xircuits users via the `xircuits component library` CLI command.

---

And you're done! We'll give a look at your PR as soon as possible, so keep track the review tab now and then. You can also join our Discord if you would like to discuss anything. 
