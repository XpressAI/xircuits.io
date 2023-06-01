---
sidebar_position: 3
---

# Basic Usage

1. Copy the sample BabyAGI Xircuits file to your project folder.

```bash
cp xai_components/xai_gpt_agent_toolkit/babyagi.xircuits .
```

2. Start JupyterLab/Xircuits by running:

```bash
xircuits
```

3. Use the printed out URLs to browse to http://localhost:8888/lab and double click the babyagi.xiruits file.

4. Click play to watch it go and try to make the world a better place.

## Browser Access/Usage

For the browser tool to work in the most useful way, you must start Chrome in remote debugging mode before
starting your agents. To do that run the following in powershell

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
```