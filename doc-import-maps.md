# Import Maps Tool

*Based on XMapTools 4.5 embedded documentation – Help file version 14.01.2024 by M. Tedeschi & P. Lanari*

---

This page describes the **Import Tool**, which can be used to import maps, set the destination, and make basic corrections. Closing the Import Tool will stop the import process (no data will be imported).

## Selecting Files

The **Select** <img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/icon_add_round.png" alt="Select" width="20" style="display: inline; vertical-align: middle;"> button allows a set of map files to be imported. Select compatible files from the *pick map file(s)* pop-up window. Multiple files can be selected together. If a selected file cannot be imported (e.g. due to an incompatible format), it will be skipped during the import.

### File Format

Map files must have the `*.txt`, `*.asc`, `*.dat` or `*.csv` extension, no header, and a name compatible with the XMapTools default element names for identification. The default lists of compatible element and oxide names are listed below.

## Import Table

Selected map files are listed in the main table. Additional maps can be added by pressing the **Add** <img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/icon_add_round.png" alt="Add" width="20" style="display: inline; vertical-align: middle;"> button.

| Column | Description |
|---|---|
| **File** | Contains the file names |
| **Map Name** | Contains the name of the corresponding element in the database |
| **Type** | Element or oxide |
| **Data** | Intensity or wt% |
| **Special** | EDS or WDS(?); in the case of WDS(?) a DTC is automatically selected |
| **DTC** | Dead time correction |
| **OC** | Orientation correction (do not use for EPMA and LA-ICPMS using the approach of Markmann et al. 2024) |
| **Destination** | In XMapTools, can be: Intensity, Quanti, Merged, Other; drop-down menu, can be edited |
| **Action** | Keep or eliminate; drop-down menu, can be edited |

## Corrections

Settings such as the dwell time can be changed in the *Corrections* section.

Press **Import data** <img src="https://raw.githubusercontent.com/xmaptools/XMapTools_Public/main/Program/Dev/help/img/SS_importdata.png" alt="Import data" width="20" style="display: inline; vertical-align: middle;"> to import the selected maps into XMapTools after the corrections have been applied.

- Intensity maps will be available in the *Intensity* category
- Other maps will be available in the *Other* category

## Compatible Element Names

XMapTools supports all standard element symbols from H (1.00797) to Lr (260), including all lanthanides and actinides. Map files should be named with the corresponding element symbol for automatic identification.

## Compatible Oxide Names

The following oxides are supported (non-exhaustive list of common oxides):

| Oxide | Element | Conversion Factor |
|---|---|---|
| SiO2 | Si | 0.467 |
| TiO2 | Ti | 0.600 |
| Al2O3 | Al | 0.529 |
| FeO | Fe | 0.777 |
| Fe2O3 | Fe | 0.699 |
| MnO | Mn | 0.774 |
| MgO | Mg | 0.603 |
| CaO | Ca | 0.715 |
| Na2O | Na | 0.742 |
| K2O | K | 0.830 |
| P2O5 | P | 0.436 |
| Cr2O3 | Cr | 0.684 |
| NiO | Ni | 0.786 |
| ZnO | Zn | 0.803 |
| ZrO2 | Zr | 0.740 |
| BaO | Ba | 0.896 |
| SrO | Sr | 0.846 |
| H2O | H | 0.112 |
| CO2 | C | 0.273 |
| SO3 | S | 0.400 |

Additional oxides are supported including rare earth element oxides (La2O3, Ce2O3, CeO2, Nd2O3, Sm2O3, Eu2O3, Gd2O3, Dy2O3, Er2O3, Yb2O3, Lu2O3, etc.), high field strength element oxides (Nb2O5, Ta2O5, HfO2, ThO2, UO2, U3O8, WO3, etc.) and many more.
