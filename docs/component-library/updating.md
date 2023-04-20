---
sidebar_position: 3
---


# Updating
The Xircuits Component Libraries are continuously evolving, with new features, improvements, and bug fixes being added regularly. To ensure that you have access to the latest components and functionalities, it's essential to keep your libraries up to date.

Since the component libraries are Git repositories, updating them is a straightforward process. In this section, we'll discuss how to update your libraries using two different methods: pulling the latest changes and re-cloning the library.

## Updating using Git Pull
To update a component library, navigate to the library's directory within your project's xai_components folder. Once inside the library folder, run the following command:

```
git pull
```

This command will fetch the latest changes from the remote repository and merge them with your local copy. Keep in mind that if you have modified any workflows or component code within the library, there might be conflicts during the merge process. In such cases, you'll need to resolve the conflicts manually before you can successfully update the library.

## Updating by Re-Cloning the Library
If you prefer a clean update or encounter conflicts that are difficult to resolve, you can choose to delete the library folder and re-clone it. This method ensures that you have the most recent version of the library without any conflicts or discrepancies. To do this, first delete the library folder within your project's xai_components directory. Next, follow the manual installation steps outlined earlier in the Installation section to re-clone the library and install its requirements.