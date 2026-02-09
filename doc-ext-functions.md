# External Functions

XMapTools includes a set of external functions for calculating structural formulas, thermobarometry and other methods. Source code for all functions is available on the <a href="https://github.com/xmaptools/XMapTools_Developers" target="_blank">XMapTools GitHub repository</a>.

## Table of contents

- [Structural formulas](#structural-formulas)
- [Thermobarometry and other methods](#thermobarometry-and-other-methods)
  - [Map-mode](#map-mode)
  - [Multi-equilibrium](#multi-equilibrium)


## Structural formulas

The following structural formula functions are available in XMapTools. Each function calculates structural formulas and end-member proportions on a specified oxygen basis.

### Aluminosilicate > AlSil. (SF, 5-Ox. basis)

XMapTools External Function: structural formula of aluminosilicates. Version without loop & all Fe as Fe₂O₃. 5 Oxygen-basis.

### Amphibole > CaAmp (SF, 23-Ox. basis)

XMapTools External Function: structural formula of Ca-amphibole. Fe₂O₃ added as possible input. Ti ordered onto M2 (Raase 1974).

| End-member | T1(4) | T2(2) | M2(2) | M13(2) | M4(2) | A(1) |
|---|---|---|---|---|---|---|
| Glaucophane (Gln) | Si₄ | Si₄ | Al,Al | Mg,Mg,Mg | Na,Na | V |
| Tremolite (Tr) | Si₄ | Si₄ | Mg,Mg | Mg,Mg,Mg | Ca,Ca | V |
| F-tremolite (Ftr) | Si₄ | Si₄ | Fe,Fe | Fe,Fe,Fe | Ca,Ca | V |
| Tschermakite (Ts) | Si₄ | Si₂,Al₂ | Al,Al | Mg,Mg,Mg | Ca,Ca | V |
| Pargasite (Prg) | Si₄ | Si₂,Al₂ | Mg,Al | Mg,Mg,Mg | Ca,Ca | Na |

Other: Ti, Mn. 23 Oxygen-basis.

### Amphibole > CaAmp_Fe3+ (SF, 23-Ox. basis)

XMapTools External Function: structural formula of Ca-amphibole with Fe³⁺ estimation. 23 Oxygen-basis. **Not tested.**

### Biotite > Bt+ (SF, 11-Ox. basis)

XMapTools External Function: structural formula of biotite. Fe₂O₃ added as possible input. Ti assumed to be ordered onto M2, Al onto M1, Mn added (ordered onto M12).

| End-member | T1(2) | T2(2) | M1(1) | M2(2) | A(1) |
|---|---|---|---|---|---|
| Phlogopite | Si,Si | Si,Al | Mg | Mg,Mg | K |
| Annite | Si,Si | Si,Al | Fe | Fe,Fe | K |
| Eastonite | Si,Si | Al,Al | Al | Mg,Mg | K |
| Siderophyllite | Si,Si | Al,Al | Al | Fe,Fe | K |
| Ti-biotite | Si,Si | Si,Al | Mg | Ti,Mg | K |
| Mn-biotite | Si,Si | Si,Al | Mn | Mn,Mn | K |

11 Oxygen-basis.

### Brucite > Brc (SF, 1-Ox. basis)

XMapTools External Function: structural formula of brucite. Version without loop & Fe₂O₃ as possible input. As₂O₃ is used instead of As₂O₅ in XMapTools 3.4.2. 1 Oxygen-basis.

### Chlorite > Chl (SF, 14-Ox. basis)

XMapTools External Function: structural formula of chlorite. Ferri-sudoite added; Trincal & Lanari (2016) Clay Min. 51, 675–689. Fe₂O₃ added as possible input. 1 Input: XFe3 = Fe3/(Fe2+Fe3).

| End-member | T1(2) | T2(2) | M1(1) | M2-M3(4) | M4(1) |
|---|---|---|---|---|---|
| Amesite (Ame) | Si,Si | Al,Al | Al | Mg₄ | Al |
| Fe-Amesite (fAme) | Si,Si | Al,Al | Al | Fe₄ | Al |
| Clinochlore (Clc) | Si,Si | Si,Al | Mg | Mg₄ | Al |
| Daphnite (Dph) | Si,Si | Si,Al | Fe | Fe₄ | Al |
| Sudoite (Sud) | Si,Si | Si,Al | V | Mg₂,Al₂ | Al |
| FerriSudoite (fSud) | Si,Si | Si,Al | V | Mg₂,Fe₂ | Al |
| AlfreeChl (afchl) | Si,Si | Si,Si | Mg | Mg₄ | Mg |

14 Oxygen-basis.

### Chloritoid > Ctd (SF, 12-Ox. basis)

XMapTools External Function: structural formula of chloritoid. Version without loop & Fe₂O₃ as possible input.

| End-member | T1(2) | T2(3) | M1(1) | M2(2) |
|---|---|---|---|---|
| Mg-chloritoid (Ctd) | Si,Si | Al₃ | Al | Mg,Mg |
| Fe-chloritoid (fCtd) | Si,Si | Al₃ | Al | Fe,Fe |
| Mn-chloritoid (mCtd) | Si,Si | Al₃ | Al | Mn,Mn |

12 Oxygen-basis.

### Chromite > Chr (SF, 32-Ox. basis)

XMapTools External Function: structural formula of chromite. Version without loop & Fe₂O₃ as possible input. Fe³⁺ estimated using Droop (1987). 32 Oxygen-basis. **Not tested in this version.**

### Clinopyroxene > Cpx (SF, 6-Ox. basis)

XMapTools External Function: structural formula of clinopyroxene. Version without loop & Fe₂O₃ as possible input.

| End-member | T1(2) | M1(1) | M2(1) |
|---|---|---|---|
| Jadeite (Jd) | Si,Si | Al | Na |
| Diopside (Di) | Si,Si | Mg | Ca |
| Hedenbergite (Hd) | Si,Si | Fe | Ca |
| Ca-Tschermak (Cats) | Si,Al | Al | Ca |

6 Oxygen-basis.

### Clinopyroxene > Cpx_Fe3+ (SF, 6-Ox. basis)

XMapTools External Function: structural formula of clinopyroxene with Fe³⁺ estimation.

| End-member | T1(2) | M1(1) | M2(1) |
|---|---|---|---|
| Jadeite (Jd) | Si,Si | Al | Na |
| Diopside (Di) | Si,Si | Mg | Ca |
| Hedenbergite (Hd) | Si,Si | Fe² | Ca |
| Ca-Tschermak (Cats) | Si,Al | Al | Ca |
| Acmite (Acm) | Si,Si | Fe³ | Na |

6 Oxygen-basis.

### Cordierite > Crd (SF, 18-Ox. basis)

XMapTools External Function: structural formula of cordierite. Version without loop & Fe₂O₃ as possible input.

| End-member | T1(2) | T2(3) | M1(2) |
|---|---|---|---|
| Mg-Cordierite (Crd) | Si₅ | Al₄ | Mg,Mg |
| Fe-Cordierite (fCrd) | Si₅ | Al₄ | Fe,Fe |
| Mn-Cordierite (mCrd) | Si₅ | Al₄ | Mn,Mn |

18 Oxygen-basis.

### Epidote > Ep (SF, 12.5-Ox. basis)

XMapTools External Function: structural formula of epidote. Version without loop & all iron as Fe³⁺.

| End-member | T1(3) | M1(1) | M2(1) | M3(1) | A1(2) |
|---|---|---|---|---|---|
| Epidote (Ep) | Si₃ | Al | Al | Fe | Ca,Ca |
| Fe-epidote (fEp) | Si₃ | Fe | Al | Fe | Ca,Ca |
| Zoisite (Zo) | Si₃ | Al | Al | Al | Ca,Ca |
| Mn-epidote (mEp) | Si₃ | Al | Al | Mn | Ca,Ca |

12.5 Oxygen-basis.

### Feldspar > Fsp (SF, 8-Ox. basis)

XMapTools External Function: structural formula of feldspar. Version without loop & Fe₂O₃ as possible input.

| End-member | T1(2) | T2(2) | M1(1) |
|---|---|---|---|
| Albite (Ab) | Si,Si | Si,Al | Na |
| Anorthite (An) | Si,Si | Al,Al | Ca |
| Sanidine (Sn) | Si,Si | Si,Al | K |

8 Oxygen-basis.

### Garnet > Grt (SF, 12-Ox. basis)

XMapTools External Function: structural formula of garnet. Version without loop & Fe₂O₃ as possible input.

| End-member | X(3) | Y(2) | O/T(3) |
|---|---|---|---|
| Almandine (Alm) | Fe₃ | Al₂ | (SiO₄)₃ |
| Pyrope (Prp) | Mg₃ | Al₂ | (SiO₄)₃ |
| Grossular (Grs) | Ca₃ | Al₂ | (SiO₄)₃ |
| Spessartine (Sps) | Mn₃ | Al₂ | (SiO₄)₃ |

12 Oxygen-basis.

### Garnet > Grt_Fe3+ (SF, 12-Ox. basis)

XMapTools External Function: structural formula of garnet with Fe³⁺ estimation. Method of Droop (1987) implemented.

| End-member | X(3) | Y(2) | O/T(3) |
|---|---|---|---|
| Almandine (Alm) | Fe₃ | Al₂ | (SiO₄)₃ |
| Pyrope (Prp) | Mg₃ | Al₂ | (SiO₄)₃ |
| Grossular (Grs) | Ca₃ | Al₂ | (SiO₄)₃ |
| Spessartine (Sps) | Mn₃ | Al₂ | (SiO₄)₃ |
| Andradite (And) | Ca₃ | Fe₂ | (SiO₄)₃ |

12 Oxygen-basis.

### Ilmenite > Ilm (SF, 3-Ox. basis)

XMapTools External Function: structural formula of ilmenite. Approximation of Fe³⁺ and Fe²⁺; works fine with Ca-Na-K ignored.

| End-member | Formula |
|---|---|
| Ilmenite (Ilm) | Fe(1)Ti(1)O(3) |
| Mn-Ilmenite (mIlm) | Mn(1)Ti(1)O(3) |
| Hematite (Hem) | Fe(2)O(3) |

3 Oxygen-basis.

### Magnetite > Mag (SF, 4-Ox./3-cat. basis)

XMapTools External Function: structural formula of magnetite. Version without loop & Fe₂O₃ as possible input. Normalized to 3 cations (assuming 4 oxygen). 4 Oxygen-basis.

### Olivine > Ol (SF, 4-Ox. basis)

XMapTools External Function: structural formula of olivine. Version without loop & Fe₂O₃ as possible input.

| End-member | Formula |
|---|---|
| Forsterite (Fo) | Mg(2)Si(1)O(4) |
| Fayalite (Fa) | Fe(2)Si(1)O(4) |
| Tephroite (Tep) | Mn(2)Si(1)O(4) |

4 Oxygen-basis.

### Orthopyroxene > Opx (SF, 3-Ox. basis)

XMapTools External Function: structural formula of orthopyroxene. Version without loop & Fe₂O₃ as possible input.

| End-member | T1(1) | M1(1) |
|---|---|---|
| Enstatite (En) | Si₂ | Mg₂ |
| Ferrosilite (Fs) | Si₂ | Fe₂ |
| Tschermak-px (Mgts) | Si,Al | Al,Mg |

3 Oxygen-basis.

### Rutile > Rt (SF, 2-Ox. basis)

XMapTools External Function: structural formula of rutile. Version without loop & Fe₂O₃ as possible input. 2 Oxygen-basis.

### Serpentine > Srp (SF, 14-Ox. basis)

XMapTools External Function: structural formula of serpentine. Number of oxygen changed from 14.5 to 14. Ratio Si/(Si+Fe+Mg) added. Version without loop & Fe₂O₃ as possible input. 14 Oxygen-basis.

### Spinel > Spl (SF, 4-Ox. basis)

XMapTools External Function: structural formula of spinel. Version without loop & Fe₂O₃ as possible input. Fe³⁺ estimated using Droop (1987).

**Al spinels (AlSpinel):**

| End-member | X(1) | Y(2) |
|---|---|---|
| Hercynite (Hc) | Fe | Al₂ |
| Spinel (Spl) | Mg | Al₂ |
| Galaxite (Glx) | Mn | Al₂ |
| Gahnite (Ghn) | Zn | Al₂ |

**Cr spinels (CrSpinel):**

| End-member | X(1) | Y(2) |
|---|---|---|
| Chromite (Chr) | Fe | Cr₂ |
| Magnesiochromite (mChr) | Mg | Cr₂ |
| Nichromite (Nic) | Ni | Cr₂ |

**Fe spinels (FeSpinel):**

| End-member | X(1) | Y(2) |
|---|---|---|
| Magnesioferrite (Mfr) | Mg | Fe₂ |
| Magnetite (Mag) | Fe | Fe₂ |
| Ulvospinel (tSpl) | Ti | Fe₂ |
| Jacobsite (Jac) | Mn | Fe₂ |
| Franklinite (Frk) | Zn | Fe₂ |
| Trevorite (Tre) | Ni | Fe₂ |

**Olivine spinels (OlSpinel):**

| End-member | X(1) | Y(2) |
|---|---|---|
| Ringwoodite (Rwd) | Si | Mg₂ |

4 Oxygen-basis. Calculated assuming equipartition of Fe²⁺/Mg²⁺/Mn²⁺/Zn²⁺/Ni. **Not tested.**

### Staurolite > St (SF, 22-Ox. basis)

XMapTools External Function: structural formula of staurolite. Version without loop & Fe₂O₃ as possible input.

| End-member | Z(11) | Y(2) | X(4) |
|---|---|---|---|
| Staurolite (St) | Si(4)Al(7) | Al,Al | Fe₄ |
| Mg-Staurolite (Mst) | Si(4)Al(7) | Al,Al | Mg₄ |
| Mn-Staurolite (MnSt) | Si(4)Al(7) | Al,Al | Mn₄ |

24 Oxygen-basis.

### White mica > Mica (SF, 11-Ox. basis)

XMapTools External Function: structural formula of white mica (generic). Version without loop & Fe₂O₃ as possible input.

| End-member | T1(2) | T2(2) | M1(1) | M2(2) | A(1) |
|---|---|---|---|---|---|
| Celadonite-Mg (Cel) | Si,Si | Si,Si | V | Al,Mg | K |
| Celadonite-Fe (fCel) | Si,Si | Si,Si | V | Al,Fe | K |
| Muscovite (Ms) | Si,Si | Si,Al | V | Al,Al | K |
| Paragonite (Pg) | Si,Si | Si,Al | V | Al,Al | Na |
| Pyrophyllite (Prl) | Si,Si | Si,Si | V | Al,Al | V |

Not considered: Biotite (Si,Si | Si,Al | MgFe | MgFeTi | K). 11 Oxygen-basis.


## Thermobarometry and other methods

Function headers for thermobarometry and other methods. Source code is available on the <a href="https://github.com/xmaptools/XMapTools_Developers" target="_blank">XMapTools GitHub repository</a>. Several functions are taken from the <a href="https://github.com/JoshuaLaughton/PTtoolbox" target="_blank">PTtoolbox package of Joshua Laughton</a>.

### Map-mode

#### Amphibole > T.Amp (all calibrations)

XMapTools External Function: amphibole thermobarometry. 23 Oxygen-basis.

Output variables:
- **T_HB94**: Holland & Blundy (1994) – no quartz
- **T_HB94q**: Holland & Blundy (1994) – with quartz

#### Biotite > T.Bt (all calibrations)

XMapTools External Function: biotite thermobarometry. 22 Oxygen-basis.

Output variables:
- **T_W20**: Wu & Chen (2015)
- **T_H05**: Henry et al. (2005)

#### Chlorite > T.Chl (all calibrations)

XMapTools External Function: chlorite thermometry (all calibrations). Fe₂O₃ added as possible input. 14 Oxygen-basis.

Output variables:
- **T_L14_2**: Lanari et al. (2014) Contrib. Miner. Petrol. 167:167–968 (LWV2)
- **T_B13**: Bourdelle et al. (2013) Contrib. Miner. Petrol. 165:723–735
- **T_ZF95**: Zang & Fyfe (1995) Miner. Depos. 30:30–38
- **T_HV91**: Hillier & Velde (1991) Clay Miner. 26:149–168
- **T_J91**: Jowett (1991) Program Abstr. 16:A62
- **T_C88**: Cathelineau (1988) Clay Miner. 23:471–485
- **T_KM87**: Kranidiotis & MacLean (1987) Econ. Geol. 82:1898–1911
- **T_CN85**: Cathelineau & Nieva (1985) Contrib. Miner. Petrol. 91:235–244

#### Monazite > Age.Mz (Montel 1996)

XMapTools External Function: monazite geochronology.

Output variables:
- **Age_M96**: Montel (1996)

Input variables: ThO₂, UO₂ and PbO in wt% (use the converter if your data were calibrated in a different format).

#### Quartz > T.Qz (all calibrations)

XMapTools External Function: quartz thermobarometry (all calibrations).

Output variables:
- **T_WW06**: Wark & Watson (2006)
- **T_KO08**: Kawasaki & Osanai (2008)
- **T_T10**: Thomas et al. (2010)
- **T_HA12**: Huang & Audétat (2012)
- **T_O22**: Osborne et al. (2022) CPM 177:31

Input variables: TiO₂ (wt%).

#### Rutile > T.Rt (all calibrations)

XMapTools External Function: rutile thermobarometry (all calibrations).

Output variables:
- **T_Z04**: Zack et al. (2004)
- **T_W06**: Watson et al. (2006)
- **T_FW07**: Ferry & Watson (2007), CMP 154:429–437
- **T_T07**: Tomkins et al. (2007)

Input variables: ZrO₂ (wt%).

#### Titanite > T.Ttn (all calibrations)

XMapTools External Function: titanite thermometry (all calibrations).

Output variables:
- **T_H08**: Hayden et al. (2008)

#### White mica > P.Phg (all calibrations)

XMapTools External Function: phengite barometry. 11 Oxygen-basis.

Output variables:
- **P_MS87**: Massone & Schreyer (1987)

#### Zircon > T.Zrn (all calibrations)

XMapTools External Function: zircon thermobarometry (all calibrations).

Output variables:
- **T_W06**: Watson et al. (2006)
- **T_FW07**: Ferry & Watson (2007), CMP 154:429–437

### Multi-equilibrium

#### Amphibole > T.Grt-Hbl (all calibrations)

XMapTools External Function: Garnet-Hornblende thermometry. 12 Oxygen-basis for Garnet, 23 Oxygen-basis for Hornblende.

Output variables:
- **T_GP84**: Graham & Powell (1984)
- **T_Per85**: Perchuk et al. (1985)
- **T_Pow85**: Powell (1985)
- **T_R00**: Ravna (2000)

#### Biotite > T.Grt-Bt (all calibrations)

XMapTools External Function: Garnet-Biotite thermometry. 12 Oxygen-basis for Garnet, 11 Oxygen-basis for Biotite.

Output variables:
- **T_T76**: Thompson (1976)
- **T_GA77**: Goldman & Albee (1977)
- **T_HL77**: Holdaway & Lee (1977)
- **T_FS78**: Ferry & Spear (1978)
- **T_HS82**: Hodges & Spear (1982)
- **T_PL83**: Perchuk & Lavrent'eva (1983)
- **T_GS84**: Ganguly & Saxena (1984)
- **T_IM85**: Indares & Martignole (1985)
- **T_P85**: Perchuk et al. (1985)
- **T_D91**: Dasgupta et al. (1991)
- **T_B92**: Bhattacharya et al. (1992)

#### Chlorite > T.Grt-Chl (all calibrations)

XMapTools External Function: Garnet-Chlorite thermometry. 12 Oxygen-basis for Garnet, 14 Oxygen-basis for Chlorite.

Output variables:
- **T_DH86**: Dickenson & Hewitt (1986)
- **T_G90**: Grambling (1990)
- **T_P91**: Perchuk (1991)

#### Clinopyroxene > T.Grt-Cpx (all calibrations)

XMapTools External Function: Garnet-Clinopyroxene thermometry. 12 Oxygen-basis for Garnet, 6 Oxygen-basis for Clinopyroxene.

Output variables:
- **T_MH72**: Mysen & Heier (1972)
- **T_RG74**: Raheim & Green (1974)
- **T_MG78**: Mori & Green (1978)
- **T_EG79**: Ellis & Green (1979)
- **T_S79**: Saxena (1979)
- **T_D80**: Dahl (1980)
- **T_P85**: Powell (1985)
- **T_K88**: Krogh (1988)
- **T_A94**: Ai (1994)
- **T_R00**: Ravna (2000)
- **T_N09**: Nakamura (2009)

#### Cordierite > T.Grt-Crd (all calibrations)

XMapTools External Function: Garnet-Cordierite thermometry. 12 Oxygen-basis for Garnet, 18 Oxygen-basis for Cordierite.

Output variables:
- **T_C71**: Currie (1971)
- **T_T76**: Thompson (1976)
- **T_HL77**: Holdaway & Lee (1977)
- **T_P85**: Perchuk et al. (1985)
- **T_B88**: Bhattacharya et al. (1988)
- **T_B93**: Bhattacharya (1993)

#### Ilmenite > T.Grt-Ilm (all calibrations)

XMapTools External Function: Garnet-Ilmenite thermometry. 12 Oxygen-basis for Garnet, 3 Oxygen-basis for Ilmenite. **Not tested.**

Output variables:
- **T_P87**: Pownceby et al. (1987)
- **T_P91**: Pownceby et al. (1991)
- **T_M10**: Martin et al. (2010)

#### Orthopyroxene > T.Grt-Opx (all calibrations)

XMapTools External Function: Garnet-Orthopyroxene thermometry. 12 Oxygen-basis for Garnet, 6 Oxygen-basis for Orthopyroxene.

Output variables:
- **T_MG78**: Mori & Green (1978)
- **T_D80**: Dahl (1980)
- **T_R83**: Raith et al. (1983)
- **T_H84**: Harley (1984)
- **T_LG84**: Lee & Ganguly (1984)
- **T_SB84**: Sen & Bhattacharya (1984)
- **T_P85**: Perchuk et al. (1985)
- **T_LG88**: Lee & Ganguly (1988)
- **T_AP89**: Aranovich & Podlesskii (1989)
- **T_PL90**: Perchuk & Lavrente'va (1990)
- **T_B91**: Bhattacharya et al. (1991)

#### White Mica > T.Grt-Ph (all calibrations)

XMapTools External Function: Garnet-Phengite thermometry. 12 Oxygen-basis for Garnet, 11 Oxygen-basis for Phengite.

Output variables:
- **T_KR88**: Krogh & Raheim (1978)
- **T_GH82**: Green & Hellman (1982)
- **T_HF88**: Hynes & Forest (1988)
- **T_W02**: Wu et al. (2002)
