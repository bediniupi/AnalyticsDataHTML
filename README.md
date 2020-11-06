# AnalyticsDataHTML
Bookmarklet to add custom HTML data format In Alma Analytics Columns properties

## Installation
Drag and drop to your browser bookmark bar this link:
### [AnalyticsDataHTML](javascript:(function()%7Bvar%20htmldata%20%3D%20%22%40%5Bhtml%5D%40H%22%3Bvar%20sel%20%3D%20document.getElementsByName('TreatTextAs')%3Bvar%20ctext%20%3D%20document.getElementsByName('CustomTextFormat')%3Bfor%20(i%3D0%3B%20i%3Csel%5B0%5D.length%3B%20i%2B%2B)%20%7Bif%20(sel%5B0%5D.options%5Bi%5D.value%20%3D%3D%20%22custom%22)%20%7Bsel%5B0%5D.value%20%3D%20%22custom%22%3Bctext%5B0%5D.value%20%3D%20htmldata%3Bctext%5B0%5D.disabled%20%3D%20false%3Breturn%3B%7D%7Dvar%20ov%20%3D%20document.getElementsByName('OverrideDefault')%3Bov%5B0%5D.checked%20%3D%20true%3Bvar%20custom%20%3D%20document.createElement('option')%3Bcustom.value%3D%22custom%22%3Bcustom.innerHTML%3D%22Custom%22%3Bsel%5B0%5D.appendChild(custom)%3Bsel%5B0%5D.value%20%3D%20%22custom%22%3Bctext%5B0%5D.value%20%3D%20htmldata%3Bctext%5B0%5D.disabled%20%3D%20false%7D)

## Use
In Alma Analytics the Data Format tab in the Column Properties has very poor choices.
