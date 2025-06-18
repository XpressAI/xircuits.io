---
sidebar_position: 6
---

# Adding Templates to the Launcher

The Xircuits Launcher supports custom user workflow templates. This feature is primarily designed for developers running their own Xircuits server or fork for their users. You can create custom workflow templates that appear alongside the built-in Xircuits Templates.

<p align="center">

![](/img/docs/xircuits_launcher.png)

<figcaption class="image-caption">Default Xircuits Launcher with built-in templates</figcaption>
</p>

## Setup

1. Create the templates directory in your home folder:
   ```
   ~/.xircuits/templates/
   ```

2. Add your `.xircuits` workflow files to this folder.

Your working directory can look like this.
```
~/xai_components/
~/.xircuits/
└── templates/
    ├── my-workflow.xircuits
    ├── data-pipeline.xircuits
    └── custom-agent.xircuits
```


:::tip
If you enable hidden files in the JupyterLab file browser, you can manage your templates through the file browser interface by navigating to the `.xircuits/templates/` folder and moving files directly.
:::

## Usage

User templates will appear in the **"User Templates"** section of the Launcher after a refresh. Click any template to open it as a new untitled file (your original template remains unchanged)

<p align="center">

![](/img/docs/xircuits_launcher_user_templates.png)

<figcaption class="image-caption">Xircuits Launcher with User Templates section</figcaption>
</p>

## Notes

- Templates open as copies - your originals are never modified
- If the templates folder is empty or missing, the "User Templates" section won't appear