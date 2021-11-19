---
sidebar_position: 4
---

# Usage

## Launching a Vector Engine Spark Shell

The minimum configuration required to start a Spark Shell is:

```bash
 $SPARK_HOME/bin/spark-shell --master yarn \
        --num-executors=8 --executor-cores=1 --executor-memory=4G \
        --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
        --conf spark.executor.extraClassPath=/opt/cyclone/spark-cyclone-sql-plugin.jar \
        --conf spark.plugins=com.nec.spark.AuroraSqlPlugin \
        --conf spark.executorEnv.VE_OMP_NUM_THREADS=1 \

```

## Running a Pyspark job in Vector Engine

For example we have this simple job saved as `compat.py`

```python
#!/usr/bin/env python3

from pyspark.sql import SparkSession
import pyspark.sql.functions as F
import pyspark.sql.types as T

from timeit import default_timer as timer

def main():
    app_name = f'groups_benchmark'
    spark = SparkSession.builder.appName(app_name).getOrCreate()

    start_time = timer()

    print("Loading data")

    csv = (spark
        .read
        .format("csv")
        .schema(
            T.StructType(
                [
                    T.StructField("_c0", T.DoubleType()), 
                    T.StructField("_c1", T.DoubleType()), 
                    T.StructField("_c2", T.DoubleType())
                ]
            )
        )
        .load("/user/username/data/XY_doubles_R100000_P100_csv")
    )

    csv.createOrReplaceTempView("test1")
    spark.sql("CACHE TABLE test1").explain(extended=True)

    query = "SELECT _c0, SUM(_c1) as y FROM test1 GROUP BY _c0"
    print("Executing " + query)
    print(spark.sql(query).collect())

if __name__ == '__main__':
    main()

```

We can run this python job in VE by configuring the `spark-submit` as follows:

```bash
$SPARK_HOME/bin/spark-submit \
    --master yarn \
    --num-executors=8 --executor-cores=1 --executor-memory=7G \
    --name compat.py_VE \
    --jars /opt/cyclone/spark-cyclone-sql-plugin.jar \
    --conf spark.executor.extraClassPath=/opt/cyclone/spark-cyclone-sql-plugin.jar \
    --conf spark.plugins=com.nec.spark.AuroraSqlPlugin \
    --conf spark.executor.resource.ve.amount=1 \
    --conf spark.executor.resource.ve.discoveryScript=/opt/spark/getVEsResources.sh \
    compat.py
```
