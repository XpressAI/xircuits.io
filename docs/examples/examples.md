---
sidebar_position: 2
---

# PySpark Examples

The repository has a few example PySpark scripts that you can use to validate that your install is working correctly.

There is an SBT command to copy the examples via SCP to your SX-Aurora TSUBASA system.

```shell
$ sbt "deployExamples your-system"
```

Then you can run any of these commands to run the pyspark scripts.

```shell
$ /opt/spark/bin/spark-submit \
    --name PairwiseAddExample \
    --master yarn \
    --deploy-mode cluster \
    --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
    /opt/cyclone/examples/example-add-pairwise.py

$ /opt/spark/bin/spark-submit \
    --name AveragingExample \
    --master yarn \
    --deploy-mode cluster \
    --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
    /opt/cyclone/examples/example-avg.py

$ /opt/spark/bin/spark-submit \
    --name SumExample \
    --master yarn \
    --deploy-mode cluster \
    --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
    /opt/cyclone/examples/example-sum.py

$ /opt/spark/bin/spark-submit \
    --name SumMultipleColumnsExample \
    --master yarn \
    --deploy-mode cluster \
    --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
    /opt/cyclone/examples/example-sum-multiple.py


$ /opt/spark/bin/spark-submit \
    --name AveragingMultipleColumns5Example \
    --master yarn \
    --deploy-mode cluster \
    --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
    /opt/cyclone/examples/example-avg-multiple.py

$ /opt/spark/bin/spark-submit \
    --name MultipleOperationsExample \
    --master yarn \
    --deploy-mode cluster \
    --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
    /opt/cyclone/examples/example-multiple-operations.py

```
