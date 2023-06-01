---
sidebar_position: 2
---

# Getting Started

These instructions will help you set up the GPT Agent Toolkit on your local machine.

This is a component library so you don't need to clone this directly. Instead install
Xircuits and install this component library into it.

## Shameless plug

If the following is too much work or too complicated.  Sign up to the Xpress AI Platform waitlist to get access to a single app that has everything you need to get started.

[Join the Xpress AI Platform Waitlist.](https://xpress.ai/join-waitlist)


## Software Prerequisites

Before you begin, make sure you have the following software installed on your system:

- Python 3.8 or higher
- pip (Python package installer)
- git 

## API Prerequisites

You will need an API key from Open AI to use GPT-3.5 and either a Vecto or Pinecone account for agent memory.

Create a .env file and put your API keys into the respective lines.

```
OPENAI_API_KEY=<Your OpenAI API Key here>
OPENAI_ORG=<Your OpenAI Org (if you have one)>
```

With the latest version you no longer need Vector or Pinecone to get started, but if you want to use them
add one of the following credentials.

For Vecto users:
```
VECTO_API_KEY=<An ACCOUNT_MANAGEMENT Vecto key>
```

For Pinecone users:
```
PINECONE_API_KEY=<Your Pinecone API key>
PINECONE_ENVIRONMENT=<Your Pinecone environment>
```


## Create a project

Windows:

```
mkdir project
cd project
python -m venv venv
venv\Scripts\activate
```

Linux of macOS:
```bash
mkdir project
cd project
python3 -m venv venv
source ./venv/bin/activate
git init .
```

## Installation

1. Install xircuits

```bash
pip install xircuits
```

2. Launch xircuits-components tool to install the base component library

```bash
xircuits-components
```

3. Install Vecto (if using vecto)

```bash
pip install git+https://github.com/XpressAI/vecto-python-sdk.git
```


4. Add the OpenAI and GPT Agent Toolkit component libraries

```bash

git submodule add https://github.com/XpressAI/xai-openai xai_components/xai_openai
git submodule add https://github.com/XpressAI/xai-gpt-agent-toolkit.git xai_components/xai_gpt_agent_toolkit

pip install -r xai_components/xai_openai/requirements.txt
pip install -r xai_components/xai_gpt_agent_toolkit/requirements.txt

```

5. Run the playwright installer to enable the Browser tool:

```bash
playwright install
```