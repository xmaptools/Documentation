# XMapTools documentation

## Table of content


__LA-ICP-MS__: 
- [File format LA-ICP-MS](#file-format-la-icp-ms)
- [Converter for LA-ICP-MS data](#converter-for-la-icp-ms-data)



## File format LA-ICP-MS

The importer module should be able to read files in the following format. Note that some format require a conversion before to be imported in XMapTools. 

### Agilent
The date and time are read from the third row.
```
D:\Agilent\ICPMH\1\DATA\Name\map.b\map.d
Intensity Vs Time,CPS
Acquired      : 2022-01-24 11:11:45 AM using Batch map.b
Time [Sec],Li7,Na23,Mg25
0.6196,50.00,82227.81,0.00
1.1516,50.00,79613.57,0.00
[...]
```

### Thermo Fisher CSV
The Date and time are read from the first row. 
```
Standards run :02-27-2024 11:16:40 AM;
Software: [...]
Configuration: [...]
S-SQ-N%2FA: [...]
RF Generator: [...]
Ion Optics: [...]
Vacuum: [...]
Detector: [...]
Cooling System: [...]
Power Supply: [...]
Gas Supply: [...]
Pulse Counting: [...]

Time,7Li,23Na,24Mg,25Mg, 
,dwell time=0.01;xcal factor=59347.84333,dwell time=0.001;xcal factor=72480.60121,dwell time=0.01;xcal factor=73115.42471
0.01326,400.006400102402,89317.9719802497,0
0.41544,0,67180.0425139374,0 
0.81759,0,76231.74450329,0
[...]
```

### Thermo Fisher FIN2
__Warning__: This file must be converted to CSV format using the 'Tools > Convert FIN2 to CSV' option in the converter.

The Date and time are read from the first row. 
```
Finnigan MAT ELEMENT Raw Data
Friday, July 04, 2025 11:31:12
2025_07_04_Name1.FIN
231
0
16,16,16
CPS
Time,Li7,B10,B11
3.236000,340192.875000,585.555542,887.700012
4.044000,342415.125000,459.555542,934.299988
[...]
```


### Perkin Elmer
The date and time are read from the file timestamp.
```
Intensity Vs Time, Counts per Second
Time in Seconds ,Mg/25,Al/27,P/31,Ca/42

0.,200.0016000128,1000.0400016001,3067.0428905946,31639.99295109
0.28,200.0016000128,1600.102406554,3267.0935668927,30837.992406645
[...]
```


## Converter for LA-ICP-MS data









## Log generator module

When the log generator module is used the time shift should be set to zero. 








