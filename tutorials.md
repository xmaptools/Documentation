# Tutorials

Comprehensive tutorials and guides for using XMapTools effectively.


## Tutorial 1: XMapTools for EPMA (2023)

Follow the steps in this tutorial to familiarise yourself with the EPMA data reduction procedure and discover the main features of XMapTools. 

A video tutorial is also available on YouTube and Bilibili:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 16px 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/SRXio2szh3c" title="XMapTools Course 1 – How to get started (EPMA)?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Located in China? <a href="https://www.bilibili.com/video/BV1ks4y1X7SM/" target="_blank">Watch this video on Bilibili</a>




### Dataset description

The dataset used in this tutorial comes from the study of Duesterhoeft & Lanari (2020). It consists of EPMA maps of the sample HAL104 from West Guilford (Ontario) of the Canadian Grenville Province. It was analysed using 15 KeV accelerating voltage, 100 nA specimen current, 130 ms dwell time, 20 µm step size, ~1 µm beam size with 1000*1000 pixels. The mapping time was ~75 h.

Please do not use these data for any other purpose than this tutorial without the explicit authorisation of the author(s).

| File          | Type          | Comment       |
| ------------- | ------------- | ------------- |
| _Ce.txt       | EDS map       | Mostly below detection limit |
| _Cr.txt       | EDS map       | Mostly below detection limit |
| _La.txt       | EDS map       | Mostly below detection limit |
| _Ni.txt       | EDS map       | Below detection limit |
| _P.txt        | EDS map       | Overlap with Zr |
| _S.txt        | EDS map       |               |
| Al.txt        | WDS map       |               |
| Ca.txt        | WDS map       |               |
| Fe.txt        | WDS map       |               |
| K.txt         | WDS map       |               |
| Mg.txt        | WDS map       |               |
| Mn.txt        | WDS map       |               |
| Na.txt        | WDS map       |               |
| SEI.txt       | Other         | Secondary electron image map |
| Si.txt        | WDS map       |               |
| Ti.txt        | WDS map       |               |
| TOPO.txt      | Other         | Topographic image map (obtained by BSE) |
| Standards.txt | Standard file | File containing the spot analyses used for map standardisation |

Reference: Duesterhoeft, E. & Lanari, P. (2020). Iterative thermodynamic modelling – Part 1: A theoretical scoring technique and a computer program (BINGO-ANTIDOTE). Journal of Metamorphic Geology, 38, 527-55.

### How to get started?

1. Download Tutorial_EPMA_2023.zip from the <a href="https://cloud.metp.ch/index.php/s/idQ2DtEcg7PPT94" target="_blank">download center</a>.
2. Unzip the folder in a suitable working directory (e.g. Documents/Mapping/EPMA/__Tutorial_EPMA_2023/__)
3. Open XMapTools. Note that starting XMapTools can take up to a minute; restarting the program is slightly faster
When the program is ready, a dialog box opens; pick the working directory __Tutorial_EPMA_2023__ and click the button "Open". You can change the working directory later, but you need to pick a directory when you start the program. A log file is automatically created in the selected working directory.

### Import maps


1. In the first workspace "PROJECT & IMPORT", click on the **Import** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/323-add.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button (Import Maps) to open the Import Tool module. 
2. Select all the map files to be imported and click on the button "Open". Note that you can select all the text files available in the folder and XMapTools will find out which ones can be imported as maps.
3. In the tab "Corrections", change the value of dwell time to 120 ms. 
4. Press the "Import Data" button. 

### X-ray data visualization (Part 1)

1. Quickly go through the maps and use the **Auto Contrast** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/XXX_magic-wand.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button or the live frequency polygon (see figure below) to adjust the lower and upper limits of the color bar. Note that the color bar settings are available in the "Options" workspace. 
2. Eliminate the maps which are not needed because they do not contain any important information (Ce, Cr, Ni, S). To eliminate a map, select the map in the primary tree menu, then right click on the name and select "Delete".
3. Save your project using either the **Save** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/022-save.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button available in the "PROJECT & IMPORT" workspace or in the menu "File" > "Save Project". 

<img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Figures/LiveAbsoluteFrequencyPolygon.png" alt="Data visualization" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">

### Classification

Classification is the step used to create a classified image in which each pixels are attributed to a class (mineral, glass, epoxy, etc.). In this tutorial we are using the random forest algorithm. The classification in XMapTools is supervised. You need to create a "training set" containing training data for each class. 

Additional information about the classification in XMapTools can be found in : Lanari, P., Tedeschi, M., (2025). Chemical map classification in XMapTools. _Applied Computing and Geosciences_, __25__, 100230 [<a href="https://pierrelanari.com/wp-content/uploads/2025/02/2025_LanariTedeschi_ACG.pdf" target="_blank">Download</a>].

1. Set the active workspace to CLASSIFY.
2. Create a new training set. In the secondary tree menu, select the category "Training Set (Classification)" and press the **Add** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/323-add.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button available in the CLASSIFY workspace to add phase definitions. Select in the list the phases: Biotite, Garnet, Plagioclase, Quartz; then click "Apply". 
3. Add training data for each phase:
     - Select a training class in the training set.
     - Adjust display (optional): select an element to be display and eventually use the **Zoom** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/XXX_zoom_in.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> and **Pan** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/XXX_controller.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> buttons to adjust the field of view.
     - Select a ROI type in the dropdown menu among "Rectangle ROI", "Polygon ROI", "Ellipse ROI" and "Circle ROI".
     - Finally, press the **Add a ROI** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/323-add.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button and immediately click and drag (or click for polygon) over the map to create the ROI. How to draw a ROI in XMapTools: 
       - Rectangle: click to select the first corner and drag the mouse to the opposite corner defining a rectangle.
       - Polygon: click successively on the image to draw a polygon; right-click or double-click to validate and close automatically the shape.
       - Ellipse: click to select the first point and drag the mouse to a second point defining the long axis of an ellipse.
       - Circle: click to select the first corner of a square and drag the mouse to opposite corner defining a circle.
4. Edit the shape of a ROI by selecting the ROI in the secondary tree menu. __If the editing mode is disabled, press once the "Ctrl" key on your keyboard and try again editing the shape of the ROI__.
5. You can eliminate a ROI by first selecting the ROI in the secondary tree menu and then right clicking on its name and selecting "Delete".
6. Add new phase definitions for sillimanite and sudoite (low temperature chlorite here replacing cordierite). Add training data for each phase (see step 3 above).  
7. Restore the view using either the button "Reset Zoom & Pan"  or the button "Restore view" available near the top-right corner of the main figure. 
8. In classification parameters: 
     - Add all maps in the list for classification. Select an element to display in the primary tree menu and use the **Add All** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/323-add.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button to add all maps at once. 
     - Eliminate La from the list; select La_EDS in the primary tree menu and press the **Take La_EDS out** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/057-minus.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
     - You can calculate PCA maps using the **Generate Maps of the Principal Component** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/004-picture.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. The maps of principal components are listed in the category "Other" available in the primary tree menu. 
     - Select the data type "Maps" (other data types are described in Lanari & Tedeschi 2025).
     - Select the map scaling method "Robust"; select the option "reproducibility" and set the seed value to 1.
9. Select the algorithm "Random Forest" and set the option corresponding to the maximum number of trees to 50.
10. Select the phase definition object "PhaseDef_1" in the secondary tree menu and press the **Classify** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/042-shuffle.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
11. Select a mask file to display the mineral map.
12. Check the results of the classification (for Random Forest):
     - Are all training pixels classified in the true class? If not, the training set should be adjusted accordingly.
     - Is the out-of-bag classification error reaching a value of zero when the number of grown trees is exceeding 20? If not, there is probably a problem in the phase definition.
     - Check the predictor importance; maps with a very low predictor importance can be eliminated without affecting the quality of the classification (optional).
     - Evaluate the quality of the classification by displaying 1-2 diagnostic elements for each class (e.g. Si for biotite, quartz, plagioclase).
     - If necessary, adjust the training set and perform a new classification. It is recommended to eliminate the mask files that are not used.
13. Save your project.

### Extracting mineral modes

1. Select a mask file.
2. Select the ROI shape "rectangle" using the dropdown menu in "Mask analysis and visualization"
3. Press the **Add a ROI to export mask modes** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/093-binoculars.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button and immediately click and drag over the map to create the ROI. 
4. Adjust the shape to obtain the modes of the entire map. __If the editing mode is disabled, press once the "Ctrl" key__ on your keyboard and try again editing the shape of the ROI.
5. Save the modes using the **Save** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/022-save.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button in the composition tab on the right.  
6. Note that you can also copy the data to the clipboard using the **Copy** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/093-binoculars.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. Paste the data in a spreadsheet software program. 
7. Eliminate the ROI using the **Reset ROI** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/276-trash.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
8. For comparaison purposes (don't use that method for publications!), calculate pseudo modes using the point counting method:
     - Set the number of points to 500.
     - Unselect the Monte-Carlo option.
     - Extract several successive sets of pseudo modes using the point counting method by clicking on the **Generate pseudo-modes** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/090-share.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button and copy the results in a spreadsheet software program. _Note: now you know why this method should not be used._ 
9. Calculate pseudo modes using the point counting method and Monte Carlo to calculate uncertainties on the results (_note: what is never done with point counting_):
     - Set the number of points to 300.
     - Select the Monte-Carlo optionExtract pseudo modes and uncertainties using the **Generate pseudo-modes** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/090-share.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button and copy the results in a spreadsheet software program. 
     - You can repeat this calculation for several number of points (e.g. 500, 750, 1000) and copy the results in a spreadsheet software program.

### Analytical standardisation

The analytical standardisation consists of transforming the intensity maps of elements into weight percent maps of oxides. XMapTools 4 includes a calibration module that performs an automated calibration of all minerals. This black box algorithm works ok when all phases have spot analyses to be used as internal standard and when intensities are heigh enough. However, you need to carefully check the results of the calibration for each mineral. 

The calibration method used by XMapTools is described in Lanari, P., Vho, A., Bovay, T., Airaghi, L., Centrella, S., (2019). Quantitative compositional mapping of mineral phases by electron probe micro-analyser. _Geological Society of London, Special Publication_, __478__, 39-63 [<a href="https://pierrelanari.com/wp-content/uploads/2021/05/2019_LanariMapping_GSL.pdf" target="_blank">Download</a>].



### Extracting Local bulk compositions

1. Set the active workspace to "CALIBRATE".
2. Display an intensity map showing a maximum of minerals (e.g. Al).
3. Select the option "Import standards.txt" in "EPMA STANDARD DATA". 
4. Click on the **Import** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/141-radar.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. Note that the color of the spot labels can be changed in the options of the "Project & Import" workspace. 
5. Select the element Mg to estimate the quality of the position. The diagrams on the right show correlation maps with the center of the image being the position of the spots on the map. In this case the original position is good and there is no need to change it. (Optional) you can try to shift the spot position in the correlation plot of the element and then to press **Apply** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/044-repeat.png" alt="image" width="20" style="display: inline; vertical-align: middle;">. To restore the original position, you can simply load the standard data again using the **Import** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/141-radar.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button.  
6. Add two additional internal standard values for quartz (not measured):
     - Display the silicon map by selecting Si in the primary tree menu.
     - Select the category "Standards (Spots)" in the secondary tree menu.
     - Adjust the view using zoom and pan (optional)
     - Press the **Add** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/056-plus.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button available in the "CALIBRATE" workspace select a pixel of quartz by clicking on the main image. 
     - Set the composition to 100 wt% of SiO2 in the table available in the "Standard" tab.
     - Note that the new standard is listed at the bottom of the secondary tree menu under "Standards (Spots)". Selecting this internal standard display the location and the composition. 
7. Calibrate the intensity element maps into maps of wt% of oxide:
     - Select a mask file in the secondary tree menu.
     - In the "CALIBRATE" workspace, press the **Calibrate** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/010-record.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button to open the Calibration assistant for EPMA data. 
     - Check the calibration curves by displaying the curve for each element of each mineral.
     - Use the button "Adjust (Manual)" to modify the calibration curve in case the calibration algorithm failed to set a proper calibration curveSelect the option "Apply to all masks".
     - Press the button "Apply Standardization"  to calibrate all maps and send the data to XMapTools.
8. Check the calibrated maps and the merged map using the primary tree menu.
9. If the calibration quality is not good, select the category "Quanti" in the primary tree menu, then right-click on the name and select "Clear All" (optional). This will eliminate all the data in this category. You can do the same for the category "Merged".

_Note: The video tutorial (see above) provides more tricks and explanations about the calibration module and how to check the quality of the calibration curves._


### Structural formulas, thermometry & generating images

1. We need first to create a density map for the mask file used for calibration:
     - Select a mask file in the secondary tree menu.
     - In the "CALIBRATE" workspace, press the **Density** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/331-volume%20control.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button to automatically generate a density map. 
     - Enter average density values for each phase. Note that average values are automatically proposed if the mineral name used is available in the XMapTools database. 
     - You can display the density map in that is listed under the category "Other" in the primary tree menu. 
2. Display a merged map by selecting an oxide in the category "Merged" of the primary tree menu.
3. Select "Rectangle ROI", then press the "Add ROI" <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/093-binoculars.png" alt="image" width="20" style="display: inline; vertical-align: middle;">  button and immediately click and drag over the map to create the ROI. 
4. For this exercise, reshape the ROI to about ¾ of the map surface. If the editing mode is disabled, press once the "Ctrl" key and try again editing the shape of the ROI.
5. Save the local bulk composition.
6. Set the number of simulations to 100 and the shift value expressed in number of pixels to 20 and press the **Calculate the uncertainties using Monte Carlo** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/080-calculator.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
7. Save the results and the figure (File > Save As…).
8. Change the ROI to cover the entire map and export the new bulk composition. Compare the composition with the one previously obtained for the smaller domain.
9. Create a new merged map "garnet-excluded" containing only pixel compositions of biotite, plagioclase, quartz, sillimanite and sudoite and export the local bulk composition:
     - Select the item "Biotite" in the category "Quanti" of the primary tree menu.
     - Press the **Merge** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/176-windows.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
     - Select all mineral except Garnet and press the "Apply" button.
     - Rename the merged map into "Merged_noGrt".
     - Export a local bulk composition of the entire area.

The method to extract local bulk composition is described in Lanari, P., & Engi, M. (2017). Local bulk composition effects on metamorphic mineral assemblages, _Reviews in Mineralogy and Geochemistry_, __83__, 55-102 [<a href="https://pierrelanari.com/wp-content/uploads/2021/05/2017_LanariEngi_RiMG.pdf" target="_blank">Download</a>].

### Structural formulas, thermometry & generating images

1. Set the active workspace to "FUNCTIONS".
2. In "Normalization & Structural Formula", select "Function", "Biotite" and "Bt (SF, 11-Ox. basis)".
3. Display the function description by clicking on the **Help** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/061-info_C.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
4. Select "Biotite" in the category "Quanti" of the primary tree menu 
5. Press the **Apply** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/311-app.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button to calculate the maps of structural formula for biotite. 
6. Display the maps of structural formula "Biotite Bt (SF, 11-Ox. basis)" available in the category "Results" of the primary tree menu.
7. Generate an image showing the maps of Si, Ti and XMg in biotite:
     - In the menu, select in the menu: Image > Multi-Selection Mode.
     - Select the maps Si, Ti_M2 and XMg. Press ctrl (Windows) or Command (Mac) to select several maps in the primary tree menu. 
     - Once the maps are selected, select in the menu: Images > Add Multi-plot image.
     - Unfold the new image available under the category "Images" in the primary tree menu. Select each map and use the auto-contrast option or the live frequency polygon to adjust the lower and upper limits of the color bar. Note that the settings are saved when modifying an image.
     - To save the image, you can use the menu File > Save Image. Alternatively, you can copy the image into the clipboard and past it into your favorite vector graphics editor. In the menu, select: Edit > Copy Image.
     - Save your project; images and their settings are kept in the project file.
8. Calculate the maps of structural formula for garnet (with and without Fe3+) and plagioclase.
9. Calculate the maps of structural formula for garnet using a 8-cation basis.
10. Generate a new image containing the XMg maps of biotite and garnet:
     - Activate the multi-selection mode (menu: Image > Multi-Selection Mode).
     - In the menu "Image", select the option "Add Multi-Layer Image (multi-scale)".
     - Adjust the color scale and the color palette of each map in the image object.
     - Display the multi-layer image.
     - Select an other map (not an image) and change back the color palette to "XMap (CD)". Note that this change does not affect the image.
11. Generate a new image containing maps of end-member fraction for almandine, pyrope, grossular and spessartine.
12. Generate an image of Mg in biotite and in garnet (in apfu):
     - Select any result in "Biotite Bt (SF, 11-Ox. basis)".
     - In the menu, select: Modules > Generator.
     - Type the following equation in the field that calculates Mg (apfu): "Mg = Mg_M1 + Mg_M2".
     - Press the **Generate** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/044-repeat.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
     - Activate the multi-selection mode.
     - Select the maps Mg in garnet and Mg in biotite; both are expressed in apfu.
     - In the menu "Image", select the option "Add Multi-Layer Image (shared-scale)".
     - Use the live frequency polygon to adjust the lower and upper limits of the color bar.
13. Save the project.
14. Calculate temperature maps using Ti-in-biotite thermometry:
     - In the FUNCTIONS workspace, activate the "Map mode" in the section "Thermobarometry and other methods", select "Biotite" and "T.Bt (all calibrations)".
     - Select "Biotite" in the category "Quanti".
    - Press the **Apply** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/311-app.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button available in the section "Thermobarometry and other methods". 
    - Set the pressure to 6 kbar (0.6 GPa).
    - Display the map T_H05.
    - Save a single image containing the temperature map T_H05.
15. Calculate temperature conditions using garnet-biotite thermometry:
     - Select the merge map "Merged_RandomForest".
     - Adjust the view using zoom and pan (optional).
     - In the workspace "FUNCTIONS", activate the "Multi-equilibrium" mode in the section "Thermobarometry and other methods", select "Biotite" or "Garnet" and "T.Bt (all calibrations)".
     - Display the map FeOSelect "Circle ROI", then press the **Add ROI** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/093-binoculars.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 
     - Set the pressure to 6 kbar (0.6 GPa).
     - Select a ROI for garnet and then a ROI for biotite.
     - Results are displayed in a table for all calibrations. Check the **Help** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/061-info_C.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button to obtain the references. 
     - Save the results using the **Save** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/022-save.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button available above the table. 
     - Adjust the position of the ROI and extract the new temperature.
     - Click on the **Reset ROI** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/276-trash.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button. 


### Sampling tools and chemical diagrams

1. Export a transect chemical profile for the garnet end-member fractions:
     - Display the map Xprp and adjust the lower and upper limits of the color bar.
     - In the menu, select Sampling > Transect and click on the image to define a transect from rim through core to rim.
     - Adjust the position of the transect (optional).
     - Save the results for the selected end-member fraction. In the menu, select Sampling > Save Results > Single MapSelect Xsps, adjust the range of displayed values and save the results.
     - Select Xalm, adjust the range of displayed values and save the results.
2. Export an integrated profile (strip) for the fraction of pyrope in garnet:
     - Select the map Xprp and adjust the range of displayed values.
     - In the menu, select Sampling > Strip and click on the image to create rectangle.
     - Adjust the rotation and the position of the rectangle to sample from rim to core of a garnet grain.
     - Save the results and compare the profile obtained with the ones obtained using the transect tool.
     - Reset ROI using the **Reset** <img src="https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Icons/XXX_closeMini.png" alt="image" width="20" style="display: inline; vertical-align: middle;"> button.  
3. Generate a binary plot for biotite:
     - Select any map of the structural formula of biotite.
     - In the menu select Modules > Data Vizualisation.
     - Display XMg vs TI_M2 and adjust the display by zooming on the figure.
     - Select a ROI using the button "Polygon"  available in "Explore"How many groups of biotite can be identified?
     - Close the Data Vizualisation module to resume XMapTools.
4. Generate a ternary plot for plagioclase:
     - Select any map of the structural formula of plagioclase.
     - In the menu select Modules > Data Vizualisation.
     - Select "Ternary" plot and the following variables: Xab for X , Xsan for Y and Xan for Z.
     - Use the "Polygon" tool  to identify pixels locations and to find mixing pixels.
     - Close the Data Vizualisation module to resume XMapTools.
5. Identify mixing pixels using intensity maps:
     - Select any intensity map in the primary tree menu.
     - In the menu select Modules > Data Vizualisation.
     - Display a binary diagram Al vs Mg.
     - Use the "Polygon" tool  to identify the minerals and the mixing pixels between them
     - Close the Data Vizualisation module to resume XMapTools.
6. You can also generate the same plot using quantitative data (e.g. merged map) to notice the differences with intensity maps. It should be kept in mind that intensity maps are uncorrected for ZAF effects! 





