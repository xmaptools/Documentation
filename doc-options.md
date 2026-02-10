# Options

*Based on XMapTools 4.5 embedded documentation – Help file version 11.01.2024*

---

This page describes the tools available in the **Options** section.

<br />
<p align="center">
<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/Options_Tools.png" alt="Option Tools" width="700">
</p>

*Figure 1: Option tools in XMapTools.*


## Colour Bar & Colour Palette

Use these options to change the colour palette, change the resolution of the colour map (number of colours), change the scale of the colour bar to logarithmic and add a black or white layer at the bottom and/or top of the colour palette.

### Colormap

<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SS_Options_colormap.png" alt="Colormap" width="20" style="display: inline; vertical-align: middle;"> Set the colour palette to be used for the colour bar throughout XMapTools.

The recommended colour palettes are largely inspired by [www.ColorBrewer.org](http://www.colorbrewer.org) by Cynthia A. Brewer, Geography, Pennsylvania State University. The following abbreviations are used in the drop-down menu: Colourblind friendly (C), Linear (L), Divergent (D) and Print friendly (P).

**Default palettes:**
- XMap (default), Spectral, SingleRed, Frenchy, Fruity, Ocean, Forest, Winter 2021, Blues, Reds, B&W, Horizon, Watermelon, Purples

**Scientific colour maps by [Simon Garnier (viridisLite)](https://github.com/sjmgarnier/viridisLite):**
- VIRIDISLITE plasma, viridis, inferno, magma

**Scientific colour maps by [Fabio Crameri](https://www.fabiocrameri.ch/colourmaps/):**
- SCM Acton, Bam, Bamako, BamO, Batlow, BatlowK, BatlowW, Berlin, Bilbao, Broc, Buda, Bukavu, Cork, CorkO, Davos, Devon, Fes, GRayC, Hawaii, Imola, Lajolla, Lapaz, Lisbon, Nuuk, Oleron, Oslo, Roma, RomaO, Tofino, Tokyo, Turku, Vanimo, Vik

### Log scale

<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SS_Options_logbox.png" alt="Log" width="20" style="display: inline; vertical-align: middle;"> Check the *Log (Use a log colormap)* box to set a logarithmic axis for the colour bar. If this option is not selected, a linear scale is used instead.

### Colormap resolution

<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SS_Options_resolution.png" alt="Resolution" width="20" style="display: inline; vertical-align: middle;"> Sets the number of colours used in the colormap (i.e. the resolution of the colour bar). Colour palettes defined with more colours are resampled. The default value is 256.

### Layer options

<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SS_Options_boxes.png" alt="Layers" width="20" style="display: inline; vertical-align: middle;"> Adds a black or white layer at the bottom (lower) and/or top (upper) of the colour palette. When selected, the layer can be set to either black or white in the corresponding drop down menu.

### Negative values

<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SS_Options_negvalues.png" alt="Negative" width="20" style="display: inline; vertical-align: middle;"> If selected, negative values are displayed in the plotted map. By default, XMapTools ignores negative values in plots.

### Auto Contrast

The *Apply Auto Contrast* option activates automatic contrast enhancement each time a new map is displayed.


## Other Options

### Median filter for 3D surface

<img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SS_Options_medfilter.png" alt="Median filter" width="20" style="display: inline; vertical-align: middle;"> Defines the value of the median filter to be applied when plotting a new 3D surface (see main menu *Edit > Plot 3D surface*). Changing this option will not update plots already generated.


## XMapTools Main Window

This is the current resolution of the programme. Please submit this value if you are experiencing display problems with XMapTools.
