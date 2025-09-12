---
layout: page
title: API Reference
permalink: /docs/api-reference/
---

# XMapTools API Reference

This reference provides technical documentation for developers and advanced users who want to extend XMapTools functionality or integrate it with other software.

## Table of Contents

1. [Overview](#overview)
2. [Core Classes](#core-classes)
3. [Data Structures](#data-structures)
4. [Processing Functions](#processing-functions)
5. [Visualization API](#visualization-api)
6. [Plugin Development](#plugin-development)
7. [Examples](#examples)

## Overview

The XMapTools API provides programmatic access to core functionality including:

- Data import/export operations
- Processing and analysis algorithms
- Visualization and plotting capabilities
- Plugin and extension interfaces

### API Architecture

```
XMapTools Core
├── Data Management
├── Processing Engine
├── Visualization Engine
└── Plugin Framework
```

### Language Support
- **Primary**: Python 3.8+
- **Secondary**: MATLAB integration
- **Bindings**: C++ for performance-critical operations

## Core Classes

### DataSet Class

The `DataSet` class is the fundamental container for all analytical data.

```python
class DataSet:
    """
    Core data container for XMapTools analysis
    """
    
    def __init__(self, data, coordinates=None, metadata=None):
        """
        Initialize a new dataset
        
        Args:
            data (array-like): Analytical data
            coordinates (array-like, optional): Spatial coordinates
            metadata (dict, optional): Dataset metadata
        """
    
    def load_from_file(self, filepath, format='auto'):
        """Load data from file"""
    
    def save_to_file(self, filepath, format='auto'):
        """Save data to file"""
    
    def get_element_map(self, element):
        """Get spatial map for specific element"""
    
    def get_statistics(self):
        """Calculate basic statistics"""
```

### ProcessingEngine Class

Handles all data processing operations.

```python
class ProcessingEngine:
    """
    Main processing engine for data analysis
    """
    
    def calibrate(self, dataset, standards):
        """Apply calibration using standards"""
    
    def filter_outliers(self, dataset, method='zscore', threshold=3):
        """Remove outliers from dataset"""
    
    def interpolate(self, dataset, method='linear'):
        """Interpolate missing values"""
    
    def normalize(self, dataset, method='minmax'):
        """Normalize data values"""
```

### VisualizationEngine Class

Provides plotting and visualization capabilities.

```python
class VisualizationEngine:
    """
    Visualization and plotting engine
    """
    
    def create_element_map(self, dataset, element, **kwargs):
        """Create element distribution map"""
    
    def create_scatter_plot(self, dataset, x_element, y_element, **kwargs):
        """Create scatter plot of two elements"""
    
    def create_ternary_plot(self, dataset, elements, **kwargs):
        """Create ternary diagram"""
    
    def export_figure(self, figure, filepath, format='png', dpi=300):
        """Export figure to file"""
```

## Data Structures

### Coordinate Systems

```python
# 2D coordinates
coordinates_2d = {
    'x': array([x1, x2, x3, ...]),
    'y': array([y1, y2, y3, ...])
}

# 3D coordinates  
coordinates_3d = {
    'x': array([x1, x2, x3, ...]),
    'y': array([y1, y2, y3, ...]),
    'z': array([z1, z2, z3, ...])
}
```

### Metadata Structure

```python
metadata = {
    'instrument': 'EPMA',
    'accelerating_voltage': 15000,  # volts
    'beam_current': 20e-9,          # amperes
    'acquisition_date': '2024-01-15',
    'sample_name': 'Sample_001',
    'operator': 'username',
    'comments': 'High-resolution mapping'
}
```

### Analysis Results

```python
analysis_results = {
    'composition': {
        'SiO2': 45.2,
        'Al2O3': 15.8,
        'Fe2O3': 12.1,
        # ... other oxides
    },
    'uncertainties': {
        'SiO2': 0.5,
        'Al2O3': 0.3,
        'Fe2O3': 0.4,
        # ... corresponding uncertainties
    },
    'statistics': {
        'mean': 45.2,
        'std': 2.1,
        'min': 41.0,
        'max': 49.5
    }
}
```

## Processing Functions

### Data Calibration

```python
def calibrate_data(dataset, standards, method='linear'):
    """
    Calibrate raw data using known standards
    
    Args:
        dataset (DataSet): Raw analytical data
        standards (dict): Known composition of standards
        method (str): Calibration method ('linear', 'polynomial', 'spline')
    
    Returns:
        DataSet: Calibrated dataset
    """
```

### Statistical Analysis

```python
def calculate_statistics(dataset, elements=None):
    """
    Calculate comprehensive statistics for dataset
    
    Args:
        dataset (DataSet): Input dataset
        elements (list, optional): Specific elements to analyze
    
    Returns:
        dict: Statistical results including mean, std, min, max, percentiles
    """
```

### Phase Analysis

```python
def identify_phases(dataset, database='default'):
    """
    Automated phase identification based on composition
    
    Args:
        dataset (DataSet): Compositional data
        database (str): Phase database to use
    
    Returns:
        dict: Identified phases with confidence scores
    """
```

## Visualization API

### Map Creation

```python
# Create element map
element_map = viz.create_element_map(
    dataset=my_data,
    element='Fe',
    colormap='viridis',
    interpolation='bilinear',
    contours=True
)

# Customize appearance
element_map.set_title('Iron Distribution')
element_map.add_scale_bar(length=100, units='μm')
element_map.add_colorbar(label='Fe wt%')
```

### Multi-element Visualization

```python
# Composite map
composite = viz.create_composite_map(
    dataset=my_data,
    elements=['Si', 'Al', 'Fe'],
    colors=['red', 'green', 'blue'],
    blend_mode='multiply'
)

# Ternary plot
ternary = viz.create_ternary_plot(
    dataset=my_data,
    elements=['SiO2', 'Al2O3', 'Fe2O3'],
    normalize=True
)
```

## Plugin Development

### Plugin Structure

```python
class MyPlugin:
    """
    Example plugin structure
    """
    
    def __init__(self):
        self.name = "My Custom Plugin"
        self.version = "1.0.0"
        self.description = "Custom analysis plugin"
    
    def process(self, dataset, **kwargs):
        """
        Main processing function
        
        Args:
            dataset (DataSet): Input data
            **kwargs: Plugin-specific parameters
        
        Returns:
            dict: Processing results
        """
        # Custom processing logic
        results = self.custom_analysis(dataset)
        return results
    
    def custom_analysis(self, dataset):
        """Custom analysis implementation"""
        pass
```

### Plugin Registration

```python
# Register plugin with XMapTools
from xmaptools.plugins import register_plugin

register_plugin(MyPlugin())
```

## Examples

### Basic Data Processing

```python
import xmaptools as xmt

# Load data
dataset = xmt.DataSet()
dataset.load_from_file('data.csv')

# Process data
processor = xmt.ProcessingEngine()
dataset = processor.filter_outliers(dataset)
dataset = processor.calibrate(dataset, standards)

# Create visualization
viz = xmt.VisualizationEngine()
element_map = viz.create_element_map(dataset, 'Fe')

# Export results
viz.export_figure(element_map, 'fe_map.png', dpi=300)
dataset.save_to_file('processed_data.csv')
```

### Advanced Analysis Workflow

```python
import xmaptools as xmt
import numpy as np

# Load and prepare data
dataset = xmt.DataSet()
dataset.load_from_file('analytical_data.xlsx')

# Quality control
processor = xmt.ProcessingEngine()
stats = processor.calculate_statistics(dataset)
print(f"Data quality: {stats['completeness']:.1f}% complete")

# Advanced processing
dataset = processor.apply_drift_correction(dataset)
dataset = processor.normalize(dataset, method='total_closure')

# Phase analysis
phases = processor.identify_phases(dataset)
for phase, confidence in phases.items():
    print(f"Phase {phase}: {confidence:.2f} confidence")

# Multi-element visualization
viz = xmt.VisualizationEngine()
ternary = viz.create_ternary_plot(
    dataset, 
    ['SiO2', 'Al2O3', 'FeO'],
    show_phases=True
)

# Export comprehensive report
xmt.export_report(
    dataset=dataset,
    figures=[ternary],
    filename='analysis_report.pdf'
)
```

### Custom Plugin Example

```python
class GrainSizeAnalysis:
    """
    Plugin for automated grain size analysis
    """
    
    def __init__(self):
        self.name = "Grain Size Analysis"
        self.version = "1.2.0"
    
    def process(self, dataset, threshold=0.1):
        """
        Analyze grain sizes in element maps
        
        Args:
            dataset: Input dataset with spatial coordinates
            threshold: Minimum gradient threshold for grain boundaries
        
        Returns:
            dict: Grain size statistics and map
        """
        # Implement grain boundary detection
        boundaries = self.detect_boundaries(dataset, threshold)
        
        # Calculate grain sizes
        sizes = self.calculate_grain_sizes(boundaries)
        
        return {
            'mean_size': np.mean(sizes),
            'size_distribution': sizes,
            'boundary_map': boundaries
        }
    
    def detect_boundaries(self, dataset, threshold):
        """Detect grain boundaries using gradient analysis"""
        # Implementation details...
        pass
    
    def calculate_grain_sizes(self, boundaries):
        """Calculate individual grain sizes"""
        # Implementation details...
        pass

# Register and use the plugin
xmt.register_plugin(GrainSizeAnalysis())
grain_analysis = xmt.get_plugin('Grain Size Analysis')
results = grain_analysis.process(my_dataset, threshold=0.05)
```

## Error Handling

### Common Exceptions

```python
try:
    dataset.load_from_file('data.csv')
except xmt.DataFormatError as e:
    print(f"Data format error: {e}")
except xmt.FileNotFoundError as e:
    print(f"File not found: {e}")
except xmt.CalibrationError as e:
    print(f"Calibration failed: {e}")
```

### Best Practices

1. **Always validate input data** before processing
2. **Use appropriate error handling** for robust applications
3. **Check data completeness** before analysis
4. **Document custom plugins** thoroughly
5. **Test with sample data** before production use

## Performance Considerations

### Memory Management
- Use `dataset.clear()` to free memory when done
- Process large datasets in chunks
- Enable multiprocessing for CPU-intensive operations

### Optimization Tips
- Use vectorized operations when possible
- Cache frequently accessed data
- Profile code to identify bottlenecks
- Consider using compiled extensions for critical paths

---

For more detailed examples and advanced usage, consult the XMapTools source code and example scripts included with the installation.