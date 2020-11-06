# AnalyticsDataHTML
Bookmarklet to add custom HTML data format In Alma Analytics Columns properties

## Installation
Drag and drop to your browser bookmark bar this link:
### [AnalyticsDataHTML](javascript:(function()%7Bvar%20htmldata%20%3D%20%22%40%5Bhtml%5D%40H%22%3Bvar%20sel%20%3D%20document.getElementsByName('TreatTextAs')%3Bvar%20ctext%20%3D%20document.getElementsByName('CustomTextFormat')%3Bfor%20(i%3D0%3B%20i%3Csel%5B0%5D.length%3B%20i%2B%2B)%20%7Bif%20(sel%5B0%5D.options%5Bi%5D.value%20%3D%3D%20%22custom%22)%20%7Bsel%5B0%5D.value%20%3D%20%22custom%22%3Bctext%5B0%5D.value%20%3D%20htmldata%3Breturn%3B%7D%7Dvar%20custom%20%3D%20document.createElement('option')%3Bcustom.value%3D%22custom%22%3Bcustom.innerHTML%3D%22Custom%22%3Bsel%5B0%5D.appendChild(custom)%3Bsel%5B0%5D.value%20%3D%20%22custom%22%3Bctext%5B0%5D.value%20%3D%20htmldata%7D)())

## How to use
To add and apply an html format data view simply open the Column properties, go to Data format tab and click first on the bookmarklet, then to ok button.

## Some usage example
In Alma Analytics you only have two choices to override the default data format: if you want, for example, to highlight a part of text a simple way could be adding `<b>` tag to it, but if you try the tags will be displayed literally.
### Example to highlight the word "library" in bibliografic title:
In "Bibliographic Details"."Title" column formula change it as:
  `replace("Bibliographic Details"."Title", 'library", '<b>library</b>')`
### Apply a color: use tag <span> to avoid line break:
  `replace("Bibliographic Details"."Title", 'library", '<span style="color:red;">library</span>')`
### Avoid string between <> disappearing; the html format couse every string between <> treated as xml/html tags: replace every occurrence of the column name with this formula:
`replace("Bibliographic Details"."Title","<", "&lt;")`
#### Nested formula (bold library and no tag strings disappearing):
`replace(replace("Bibliographic Details"."Title","<", "&lt;"), 'library", '<b>library</b>')`
