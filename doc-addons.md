# Add-ons

*Based on XMapTools 4.5 embedded documentation – Help file version 09.06.2026*

---

This page describes the tools available in the **Add-ons** section. Contact Pierre Lanari if you want to develop an add-on for XMapTools.

## Export

This module allows XMapTools data to be exported. It is available for both Map Data and Spot Data.

The export format is defined by the user and can be used to export data for a specific software (e.g. MinPlot). Select the Data source, a maskfile and the type of data to be exported (e.g. Median, Mean or random selection, see Fig. 1).

The BRC correction is a correction from XMapTools 4.3 (Lanari et al. 2019) that eliminates mixing pixels using the maskfile data.

<br />
<p align="center">
<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/Export_Interface_01.png" alt="Export module" width="500">
</p>

*Figure 1: Export module for Map Data in XMapTools 4.5.*

Spot data can be exported using the *Export* module available in the *Add-on* section. Open the module and select the *Export Spot Data* mode. Select your data source (e.g. Quanti in Fig. 2) and press the *Generate & Save* button.

<br />
<p align="center">
<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SpotData_Interface_03.png" alt="Export Spot Data" width="500">
</p>

*Figure 2: Export module for Spot Data in XMapTools 4.5.*


## IMG Converter

The image converter module allows images to be converted to numeric data. Press the *Load Image* button to load an image. The image can be cropped by using the pink ROI and clicking the *Crop Image* button. The min and max values can be set manually (e.g. 0 and 100 in Fig. 3). Press the *Save Map* button to save the converted data into a txt file.

<br />
<p align="center">
<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/ImageConverter_Interface_01.png" alt="Image Converter" width="700">
</p>

*Figure 3: Image Converter module.*


## Bingo-Antidote

Bingo-Antidote is a petrological software originally developed by Pierre Lanari and Erik Duesterhoeft that offers an alternative modelling strategy based on iterative thermodynamic models integrated with quantitative compositional mapping. Bingo-Antidote 2.0 is distributed as an add-on to XMapTools. It comes with a redesigned graphical user interface and improved functionality.

Visit [https://xmaptools.ch/bingo-antidote/](https://xmaptools.ch/bingo-antidote/) to find out more. See also the dedicated [Bingo-Antidote documentation page](/bingo-antidote).
