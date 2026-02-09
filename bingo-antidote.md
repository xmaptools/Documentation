# Bingo-Antidote

## Table of contents

- [What is Bingo-Antidote?](#what-is-bingo-antidote)
- [Iterative thermodynamic models](#iterative-thermodynamic-models)
- [Theriak-Domino](#theriak-domino)
- [References](#references)
- [Tutorial](#bingo-antidote-tutorial)
  - [How to get started](#how-to-get-started)
  - [Example 1 (TG8C-03)](#example-1-tg8c-03--lanari--duesterhoeft-2019-jpet)


## What is Bingo-Antidote?

<img src="https://xmaptools.ch/wp-content/uploads/2023/05/logo_transparent.png" alt="Bingo-Antidote Logo" width="250" />

Bingo-Antidote is a petrological software originally developed by Pierre Lanari and Erik Duesterhoeft that offers an alternative modelling strategy based on iterative thermodynamic models integrated with quantitative compositional mapping. This second version, distributed as an XMapTools add-on, comes with a redesigned graphical user interface and improved features.


## Iterative thermodynamic models

Bingo-Antidote proposes a hybrid strategy combining the strengths of Gibbs energy minimisation (GEM) and inverse thermobarometry models, based on the comparison between modelled and observed mineral assemblages, modes and compositions. The overall technique relies on quantitative compositional maps obtained by electron probe microanalysis to provide a mutually consistent set of observed data such as bulk rock and mineral compositions.


## Theriak-Domino

Bingo-Antidote uses the Gibbs energy minimiser Theriak developed by Christian de Capitani. The latest version of Theriak-Domino, provided by Doug Tinkham, is required to use Bingo-Antidote.

[Download Theriak-Domino from Github](https://github.com/Theriak-Domino/theriak-domino/releases/)

<img src="https://xmaptools.ch/wp-content/uploads/2023/05/TheriakDomino_Logo.png" alt="Theriak-Domino Logo" width="400" />

<img src="https://xmaptools.ch/wp-content/uploads/2023/05/Screenshot_BA.png" alt="Bingo-Antidote Screenshot" width="700" />


## References

There are two technical papers, the first by Duesterhoeft & Lanari (2020) and the second by Lanari & Hermann (2021), which includes a proof of concept and an application example.

The philosophy of iterative thermodynamic modelling behind Bingo-Antidote is also described in older publications: Lanari & Engi (2017) and Lanari & Duesterhoeft (2019). Note that the Lanari & Duesterhoeft (2019) paper gives a general overview of thermodynamic modelling and also provides an example of an application of Bingo-Antidote.

- Duesterhoeft, E. & Lanari, P. (2020). Iterative thermodynamic modelling – Part 1: A theoretical scoring technique and a computer program (BINGO-ANTIDOTE). *Journal of Metamorphic Geology*, 38, 527-551. [Download pdf](https://pierrelanari.com/wp-content/uploads/2021/05/2020_DuesterhoeftLanari_ITM.pdf)
- Lanari, P. & Hermann, J. (2021). Iterative thermodynamic modelling—Part 2: tracing equilibrium relationships between minerals in metamorphic rocks. *Journal of Metamorphic Geology*, 39, 651-674. [Download pdf](https://pierrelanari.com/wp-content/uploads/2021/07/2021_LanariHermann_JMG.pdf)
- Lanari, P. & Duesterhoeft, E. (2019). Modelling metamorphic rocks using equilibrium thermodynamics and internally consistent databases: past achievements, problems and perspectives. *Journal of Petrology*, 60, 19-56. [Download pdf](https://pierrelanari.com/wp-content/uploads/2021/05/2019_LanariDuesterhoeft2019_JPet.pdf)
- Lanari, P., & Engi, M. (2017). Local bulk composition effects on metamorphic mineral assemblages, *Reviews in Mineralogy and Geochemistry*, 83, 55-102. [Download pdf](https://pierrelanari.com/wp-content/uploads/2021/05/2017_LanariEngi_RiMG.pdf)


## Bingo-Antidote Tutorial

This short tutorial on Bingo-Antidote is from the Goldschmidt Workshop, which took place in Lyon on 8–9 July 2023 and was entitled 'Modern Applications of Phase Equilibrium Modelling'.

### How to get started

1. Download **Tutorial_Bingo-Antidote_1_Sikkim.zip** [using this link](https://xmaptools.ch/tutorial/Tutorial_Bingo-Antidote_1_Sikkim.zip).
2. Unzip the folder in a suitable working directory (e.g. Documents/Bingo-Antidote/**Tutorial_Bingo-Antidote_1_Sikkim**/)
3. Open XMapTools. *Note that starting XMapTools can take up to a minute; restarting the program is slightly faster*
4. When the program is ready, a dialog box opens; pick the working directory **Tutorial_Bingo-Antidote_1_Sikkim** and click the button "Open". *You can change the working directory later, but you need to pick a directory when you start the program. A log file is automatically created in the selected working directory.*

### Example 1 (TG8C-03) – Lanari & Duesterhoeft (2019), JPET

1. In XMapTools, load the 'aaa4.mat' project file provided in the 'Tutorial_Bingo-Antidote_1_Sikkim' folder.
2. Select the 'Add-ons' tab and click the 'Bingo-Antidote' button to open Bingo-Antidote.
3. In the Bingo-Antidote launcher, you will need to provide Bingo-Antidote with the location of your Theriak setup directory. Then click 'Launch Bingo-Antidote'.
4. Select the chemical system: SiO₂-Al₂O₃-FeO-MgO-Na₂O-CaO-K₂O (exclude TiO₂ and MnO).
5. Select the database JUN92.bs.
6. Select the *P*–*T* range: 600–900 °C and 0.4–1.1 GPa.
7. Guess your initial *P*–*T* for this sample (e.g. 680 °C and 0.7 GPa).
8. Add a ROI for Local Bulk Composition (LBC) by selecting a large area in the map (>90 surf%). Any change in the shape of the ROI updates the LBC.
9. Activate the H₂O fluid specie and set the amount of H to 0.5 mol and then click "next".
10. Select a solution model and add a ROI for the following phases: "biotite", "garnet", "kfeldspar", "plagioclase", "quartz" (b-quartz) and "sillimanite". Exclude the accessory minerals for BA and LBC and click "next". *Note that excluding a phase from the BA means that it will not be selected as part of the observed mineral assemblage. Excluding a phase from LBC means that the pixels of this phase will not be used when Bingo-Antidote calculate a local bulk composition.*
11. Use Bingo to find the conditions of the peak mineral assemblage by manually changing *P* and/or *T* until Qasm is 100%.
12. Use Recipe 1 of Antidote "Find Optimal *P*–*T*–*X*" to obtain the optimal *P*–*T*. Save the results of the last Bingo call and evaluate the quality of the model at the optimal conditions. What are the main differences between model and observations? *Note that you can check the Qcmp values for each mineral to identify those that are not modelled correctly at these conditions.*
13. Save the current Bingo-Antidote project as BA_project_JUN92 using the button "save" available in the menu bar.
14. Calculate the *P*–*T* maps of quality factor. *Note that the data is saved in an Antidote folder in the working directory.*
15. In LBC, activate the option "Optimize *N*" for the fluid and set the range of H between 0.001 and 0.05 mol. *In this case the amount of H in the bulk composition will be optimised by Antidote.*
16. In Antidote, select "Optimization of compositional and activity variables" and "Scanning *H* (fixed *PT*)" and press the button "Antidote". *Check the paper Lanari & Duesterhoeft (2019) for a description of the results of this method.*
17. Adjust the value of H and unselect the option "Optimize *N*".
18. Recalculate the *P*–*T* maps of quality factor and compare the results with the H₂O-saturated case.
19. Calculate optimal P–T conditions for garnet core and rim using the recipe "single-phase thermobarometry".
20. Use a floating window to calculate the changes between the sillimanite-absent and sillimanite-quartz domains.
21. Run a scanning window optimization using a grid resolution of 320 pixels.
22. Calculate a map of chemical potentials with different resolutions.

