---
sidebar_position: 4
---

# Remote Run

The remote run is a special Xircuits feature which allows user to execute tasks remotely. While the main usage is for [Spark Submit](../examples/spark/spark-submit.md). It can also be used for submitting jobs to servers.

### Configuring the Remote Run

The remote run configurations can be viewed at `.xircuits/config.ini`. You will have 3 levels of configuration depth:

1. `REMOTE_EXECUTION`: The main remote run category. Example is `SPARK`.
2. `RUN_TYPES`: The subcategories under the main remote runs options. Each of the run types will have their own `CONFIGURATION`. Example for remote execution category `SPARK` is `LOCAL` and `CLUSTER`. 
3. `CONFIGURATION`: The configurations for each `RUN_TYPES`. There are 4 parameters that should be specified:

    1. `name`: The name of the configuration. You may use the same name as the `CONFIGURATION`.
    2. `command`: The command that is to be executed. Multiple lines should be appended with `\`.
    3. `msg`: The message to be displayed when users execute the configuration.
    4. `url`: The url to be displayed. Useful when an external dashboard exists. For example the Spark dashboard is `http://localhost:8088/`.

### How it Works
Under the hood, the execute configuration is performed using using the [subprocess](https://docs.python.org/3/library/subprocess.html) module. A new process is spawned when Remote Run is selected and executed.

The `command` in `CONFIGURATION` will be appended to the compiled Python Xircuits file, such that what will be executed is

$ `command` `CompiledScript.py`

For example, if your `command` is `$SPARK_HOME/bin/spark-submit` and you've compiled `SparkLinePlot.xircuits` into `SparkLinePlot.py`, the process that will be executed is:

```
$SPARK_HOME/bin/spark-submit SparkLinePlot.py
```

The output is displayed in the Xircuits Output Terminal.

```
======================================
__   __  ___                _ _
\ \  \ \/ (_)_ __ ___ _   _(_) |_ ___
 \ \  \  /| | '__/ __| | | | | __/ __|
 / /  /  \| | | | (__| |_| | | |_\__ \
/_/  /_/\_\_|_|  \___|\__,_|_|\__|___/

======================================

Xircuits is running...

Remote Execution in process...

Please go to http://localhost:8088/ for more details

Running Spark Submit using local mode
```


<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/examples/spark/spark-remote-submit.gif"></img></p>
</details>

### Note:

Every time config.ini is updated, Xircuits will only detect the change after changing run type on the toolbar.