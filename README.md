# AnalyticsDataHTML
Bookmarklet to add custom HTML data format In Alma Analytics Columns properties

## Installation
Go to this url and follow the instructions: <b>[AnalyticsDataHTML](https://bediniupi.github.io/AnalyticsDataHTML/bookmarklet.html)</b>

## How to use
To add and apply an html format data view simply open the Column properties, go to Data format tab and click first on the bookmarklet, then to ok button.

## Some usage example
In Alma Analytics you only have two choices to override the default data format: if you want, for example, to highlight a part of text a simple way could be adding `<b>` tag to it, but if you try the tags will be displayed literally.
### Example to highlight the word "library" in bibliografic title:
In "Bibliographic Details"."Title" column formula change it as:
  `replace("Bibliographic Details"."Title", 'library", '<b>library</b>')`
### Apply a color: use tag &lt;span&gt; to avoid line break:
  `replace("Bibliographic Details"."Title", 'library", '<span style="color:red;">library</span>')`
### Avoid string between <> disappearing 
The html format couse every string between <> treated as xml/html tags: replace every occurrence of the column name with this formula:
`replace("Bibliographic Details"."Title","<", "&lt;")`
#### Nested formula (bold library and no tag strings disappearing):
`replace(replace("Bibliographic Details"."Title","<", "&lt;"), 'library", '<b>library</b>')`
