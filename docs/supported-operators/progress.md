---
sidebar_position: 1
---
# Progress Checklist 


## Data Types

| Functions                                                    | Supported ✅ ? |
| ------------------------------------------------------------ | ------------ |
| [ArrayType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.ArrayType.html#pyspark.sql.types.ArrayType) | ⬜️            |
| [BinaryType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.BinaryType.html#pyspark.sql.types.BinaryType) | ⬜️            |
| [BooleanType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.BooleanType.html#pyspark.sql.types.BooleanType) | ⬜️            |
| [ByteType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.ByteType.html#pyspark.sql.types.ByteType) | ⬜️            |
| [DataType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.DataType.html#pyspark.sql.types.DataType) | ⬜️            |
| [DateType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.DateType.html#pyspark.sql.types.DateType) | ✅            |
| [DecimalType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.DecimalType.html#pyspark.sql.types.DecimalType) | ⬜️            |
| [DoubleType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.DoubleType.html#pyspark.sql.types.DoubleType) | ✅            |
| [FloatType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.FloatType.html#pyspark.sql.types.FloatType) | ✅            |
| [IntegerType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.IntegerType.html#pyspark.sql.types.IntegerType) | ✅            |
| [LongType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.LongType.html#pyspark.sql.types.LongType) | ✅            |
| [MapType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.MapType.html#pyspark.sql.types.MapType) | ⬜️            |
| [NullType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.NullType.html#pyspark.sql.types.NullType) | ⬜️            |
| [ShortType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.ShortType.html#pyspark.sql.types.ShortType) | ✅            |
| [StringType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.StringType.html#pyspark.sql.types.StringType) | ✅️            |
| [StructField](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.StructField.html#pyspark.sql.types.StructField) | ⬜️            |
| [StructType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.StructType.html#pyspark.sql.types.StructType) | ⬜️            |
| [TimestampType](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.types.TimestampType.html#pyspark.sql.types.TimestampType) | ✅️            |

## DataFrame APIs

| Functions                                                    | Accelerated ✅ ? |
| ------------------------------------------------------------ | ------------ |
| [DataFrame.approxQuantile](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.approxQuantile.html#pyspark.sql.DataFrame.approxQuantile) | ⬜️            |
| [DataFrame.corr](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.corr.html#pyspark.sql.DataFrame.corr) |  ✅️            |
| [DataFrame.count](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.count.html#pyspark.sql.DataFrame.count) | ✅            |
| [DataFrame.cov](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.cov.html#pyspark.sql.DataFrame.cov) |  ⬜️️            |
| [DataFrame.crossJoin](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.crossJoin.html#pyspark.sql.DataFrame.crossJoin) | ⬜️            |
| [DataFrame.crosstab](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.crosstab.html#pyspark.sql.DataFrame.crosstab) | ⬜️            |
| [DataFrame.cube](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.cube.html#pyspark.sql.DataFrame.cube) | ⬜️            |
| [DataFrame.distinct](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.distinct.html#pyspark.sql.DataFrame.distinct) | ✅️            |
| [DataFrame.groupBy](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.groupBy.html#pyspark.sql.DataFrame.groupBy) | ✅            |
| [DataFrame.join](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.join.html#pyspark.sql.DataFrame.join) | ✅            |
| [DataFrame.orderBy](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.orderBy.html#pyspark.sql.DataFrame.orderBy) | ✅            |
| [DataFrame.select](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.select.html#pyspark.sql.DataFrame.select) | ✅            |
| [DataFrame.sort](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.DataFrame.sort.html#pyspark.sql.DataFrame.sort) | ✅            |

## Functions

| Functions                                                    | Accelerated ✅ ? |
| ------------------------------------------------------------ | ------------ |
| [abs](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.abs.html#pyspark.sql.functions.abs) | ✅            |
| [acos](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.acos.html#pyspark.sql.functions.acos) | ✅️            |
| [acosh](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.acosh.html#pyspark.sql.functions.acosh) | ✅️            |
| [add\_months](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.add_months.html#pyspark.sql.functions.add_months) | ⬜️            |
| [approxCountDistinct](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.approxCountDistinct.html#pyspark.sql.functions.approxCountDistinct) | ✅            |
| [asin](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.asin.html#pyspark.sql.functions.asin) | ✅️            |
| [asinh](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.asinh.html#pyspark.sql.functions.asinh) | ✅️            |
| [atan](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.atan.html#pyspark.sql.functions.atan) | ✅️            |
| [atanh](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.atanh.html#pyspark.sql.functions.atanh) | ✅️            |
| [atan2](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.atan2.html#pyspark.sql.functions.atan2) | ⬜️            |
| [avg](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.avg.html#pyspark.sql.functions.avg) | ✅            |
| [ceil](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.ceil.html#pyspark.sql.functions.ceil) | ⬜️            |
| [conv](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.conv.html#pyspark.sql.functions.conv) | ⬜️            |
| [corr](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.corr.html#pyspark.sql.functions.corr)| ✅            |
| [cos](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.cos.html#pyspark.sql.functions.cos) | ⬜️            |
| [cosh](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.cosh.html#pyspark.sql.functions.cosh) | ✅️            |
| [count](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.count.html#pyspark.sql.functions.count) | ✅            |
| [countDistinct](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.countDistinct.html#pyspark.sql.functions.countDistinct) | ✅            |
| [cume\_dist](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.cume_dist.html#pyspark.sql.functions.cume_dist) | ⬜️            |
| [current\_date](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.current_date.html#pyspark.sql.functions.current_date) | ⬜️            |
| [current\_timestamp](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.current_timestamp.html#pyspark.sql.functions.current_timestamp) | ⬜️            |
| [date\_add](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.date_add.html#pyspark.sql.functions.date_add) | ⬜️            |
| [date\_format](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.date_format.html#pyspark.sql.functions.date_format) | ⬜️            |
| [date\_sub](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.date_sub.html#pyspark.sql.functions.date_sub) | ⬜️            |
| [date\_trunc](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.date_trunc.html#pyspark.sql.functions.date_trunc) | ⬜️            |
| [datediff](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.datediff.html#pyspark.sql.functions.datediff) | ⬜️            |
| [dayofmonth](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.dayofmonth.html#pyspark.sql.functions.dayofmonth) | ⬜️            |
| [dayofweek](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.dayofweek.html#pyspark.sql.functions.dayofweek) | ⬜️            |
| [dayofyear](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.dayofyear.html#pyspark.sql.functions.dayofyear) | ⬜️            |
| [days](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.days.html#pyspark.sql.functions.days) | ⬜️            |
| [exp](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.exp.html#pyspark.sql.functions.exp) | ✅️            |
| [explode](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.explode.html#pyspark.sql.functions.explode) | ⬜️            |
| [explode\_outer](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.explode_outer.html#pyspark.sql.functions.explode_outer) | ⬜️            |
| [expm1](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.expm1.html#pyspark.sql.functions.expm1) | ⬜️            |
| [expr](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.expr.html#pyspark.sql.functions.expr) | ✅            |
| [factorial](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.factorial.html#pyspark.sql.functions.factorial) | ⬜️            |
| [isnan](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.isnan.html#pyspark.sql.functions.isnan) | ✅            |
| [isnull](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.isnull.html#pyspark.sql.functions.isnull) | ✅️            |
| [levenshtein](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.levenshtein.html#pyspark.sql.functions.levenshtein)| ⬜️            |
| [log](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.log.html#pyspark.sql.functions.log) | ✅️            |
| [log10](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.log10.html#pyspark.sql.functions.log10) | ✅️            |
| [log1p](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.log1p.html#pyspark.sql.functions.log1p) | ✅️            |
| [log2](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.log2.html#pyspark.sql.functions.log2) | ✅️            |
| [max](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.max.html#pyspark.sql.functions.max) | ✅            |
| [mean](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.mean.html#pyspark.sql.functions.mean) | ✅️            |
| [min](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.min.html#pyspark.sql.functions.min) | ✅            |
| [minute](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.minute.html#pyspark.sql.functions.minute) | ⬜️            |
| [month](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.month.html#pyspark.sql.functions.month) | ⬜️            |
| [months](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.months.html#pyspark.sql.functions.months) | ⬜️            |
| [months\_between](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.months_between.html#pyspark.sql.functions.months_between) | ⬜️            |
| [next\_day](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.next_day.html#pyspark.sql.functions.next_day) | ⬜️            |
| [nth\_value](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.nth_value.html#pyspark.sql.functions.nth_value) | ⬜️            |
| [percent\_rank](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.percent_rank.html#pyspark.sql.functions.percent_rank) | ⬜️            |
| [percentile\_approx](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.percentile_approx.html#pyspark.sql.functions.percentile_approx) | ⬜️            |
| [pow](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.pow.html#pyspark.sql.functions.pow) | ✅️            |
| [quarter](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.quarter.html#pyspark.sql.functions.quarter) | ⬜️            |
| [radians](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.radians.html#pyspark.sql.functions.radians) | ⬜️            |
| [rank](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.rank.html#pyspark.sql.functions.rank) | ⬜️            |
| [second](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.second.html#pyspark.sql.functions.second) | ⬜️            |
| [shiftLeft](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.shiftLeft.html#pyspark.sql.functions.shiftLeft) | ⬜️            |
| [shiftRight](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.shiftRight.html#pyspark.sql.functions.shiftRight) | ⬜️            |
| [shiftRightUnsigned](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.shiftRightUnsigned.html#pyspark.sql.functions.shiftRightUnsigned) | ⬜️            |
| [signum](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.signum.html#pyspark.sql.functions.signum) | ⬜️            |
| [sin](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.sin.html#pyspark.sql.functions.sin) | ✅️            |
| [sinh](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.sinh.html#pyspark.sql.functions.sinh) | ✅️            |
| [size](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.size.html#pyspark.sql.functions.size) | ⬜️            |
| [skewness](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.skewness.html#pyspark.sql.functions.skewness) | ⬜️            |
| [slice](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.slice.html#pyspark.sql.functions.slice) | ⬜️            |
| [sort\_array](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.sort_array.html#pyspark.sql.functions.sort_array) | ⬜️            |
| [soundex](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.soundex.html#pyspark.sql.functions.soundex) | ⬜️            |
| [split](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.split.html#pyspark.sql.functions.split) | ⬜️            |
| [sqrt](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.sqrt.html#pyspark.sql.functions.sqrt) | ✅️            |
| [stddev](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.stddev.html#pyspark.sql.functions.stddev) | ✅️            |
| [stddev\_pop](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.stddev_pop.html#pyspark.sql.functions.stddev_pop)(col) | ⬜️            |
| [stddev\_samp](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.stddev_samp.html#pyspark.sql.functions.stddev_samp)(col) | ⬜️            |
| [struct](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.struct.html#pyspark.sql.functions.struct) | ⬜️            |
| [substring](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.substring.html#pyspark.sql.functions.substring) | ✅            |
| [substring\_index](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.substring_index.html#pyspark.sql.functions.substring_index) | ⬜️            |
| [sum](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.sum.html#pyspark.sql.functions.sum)) | ✅            |
| [sumDistinct](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.sumDistinct.html#pyspark.sql.functions.sumDistinct) | ⬜️            |
| [tan](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.tan.html#pyspark.sql.functions.tan) | ✅            |
| [tanh](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.tanh.html#pyspark.sql.functions.tanh) | ✅            |
| [timestamp\_seconds](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.timestamp_seconds.html#pyspark.sql.functions.timestamp_seconds) | ⬜️            |
| [toDegrees](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.toDegrees.html#pyspark.sql.functions.toDegrees) | ⬜️            |
| [toRadians](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.toRadians.html#pyspark.sql.functions.toRadians) | ⬜️            |
| [upper](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.upper.html#pyspark.sql.functions.upper) | ⬜️            |
| [var\_pop](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.var_pop.html#pyspark.sql.functions.var_pop) | ⬜️            |
| [var\_samp](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.var_samp.html#pyspark.sql.functions.var_samp) | ⬜️            |
| [variance](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.variance.html#pyspark.sql.functions.variance) | ⬜️            |
| [weekofyear](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.weekofyear.html#pyspark.sql.functions.weekofyear) | ⬜️            |
| [when](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.when.html#pyspark.sql.functions.when) | ✅            |
| [window](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.window.html#pyspark.sql.functions.window) | ⬜️            |
| [year](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.year.html#pyspark.sql.functions.year) | ⬜️            |
| [years](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.years.html#pyspark.sql.functions.years) | ⬜️            |

## Grouping

| Functions                                                                                                                                                                                                      | Supported ✅?                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [GroupedData.avg](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.GroupedData.avg.html#pyspark.sql.GroupedData.avg)                                                         | ✅ |
| [GroupedData.count](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.GroupedData.count.html#pyspark.sql.GroupedData.count)                                                         | ✅ |
| [GroupedData.max](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.GroupedData.max.html#pyspark.sql.GroupedData.max)                                                       | ✅️ |
| [GroupedData.mean](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.GroupedData.mean.html#pyspark.sql.GroupedData.mean)                                                       | ✅️ |
| [GroupedData.min](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.GroupedData.min.html#pyspark.sql.GroupedData.min)                                                        | ✅️ |
| [GroupedData.pivot](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.GroupedData.pivot.html#pyspark.sql.GroupedData.pivot)                                    | ⬜️ |
| [GroupedData.sum](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.GroupedData.sum.html#pyspark.sql.GroupedData.sum)                                                        | ✅ |
