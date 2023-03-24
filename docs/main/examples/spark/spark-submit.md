---
sidebar_position: 2
---

# Xircuits Spark Submit

Before proceeding, ensure that you have already configured your system to run Spark submit operations. If you can perform
```
$spark-submit example.py
```
You're ready to proceed with this section.

### Xircuits Spark Submit

Xircuits provides an user interface to submit Spark applications via [custom remote run](main/references/remote-run.md). Running it is simple:

1. Create your spark application in the Xircuits canvas.
2. Compile! Verify that the script has been generated.
3. Run the script by going to the Run Options  > Selecting `Spark` > selecting the Spark run type.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/examples/spark/spark-remote-submit.gif"></img></p>
</details>

If you have chosen cluster mode, your application should run in the Spark dashboard at `localhost:8080`.

<details>
  <summary>Video</summary>
  <p align="center">
  <img src="/img/docs/examples/spark/spark-submit-cluster.gif"></img></p>
</details>


### Modifying the Spark Submit Parameters

You can update the Spark submit parameters by configuring the Xircuits remote submit config.

1. Launch Xircuits with
```
xircuits --ContentsManager.allow_hidden=True
```
2. In the`View` panel, click `Show Hidden Files`. You should be able to see the `.xircuits` directory.

3. Open `.xircuits/config.ini`. You will see the remote submit configs.

4. Under `[CLUSTER]`, you may add / modify the submit parameters as desired.

:::tip

 For multiple lines, you will need to add a forward slash ( \\ ). You also should not append the python script to the spark submit parameters as it is automatically added by Xircuits.

:::


By default, the following are the configs set:

#### Spark Submit Local Config
```
[LOCAL]
name =  LOCAL
command = $SPARK_HOME/bin/spark-submit
msg = Running Spark Submit using local mode 
url = http://localhost:8088/
```

#### Spark Submit Cluster Config

```
name =  CLUSTER
command = $SPARK_HOME/bin/spark-submit \
        --py-files env_spark.zip \
        --archives env_spark.zip \
        --master yarn \
        --conf spark.yarn.appMasterEnv.LD_LIBRARY_PATH='/usr/local/cuda-11.2/targets/x86_64-linux/lib/:$LD_LIBRARY_PATH' \
        --conf spark.yarn.appMasterEnv.PYSPARK_PYTHON='/usr/local/bin/python3.9' \
        --conf spark.yarn.appMasterEnv.PYSPARK_DRIVER_PYTHON='/usr/local/bin/python3.9' \
        --num-executors=8 --executor-cores=1 --executor-memory=10G --driver-memory=10G \
        --name cluster_mode \
        --deploy-mode cluster \
        --conf spark.rpc.message.maxSize=1024 \
        --conf spark.driver.maxResultSize=10G 
msg = Running Spark Submit using YARN cluster mode 
url = http://localhost:8088/
```

:::note

You will need to first select the normal `Run` before the `Spark Submit` for the changes reflected in the Spark Submit dialog. 

:::