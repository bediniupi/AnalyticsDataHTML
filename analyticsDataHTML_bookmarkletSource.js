var htmldata = "@[html]@H";
var sel = document.getElementsByName('TreatTextAs');
var ctext = document.getElementsByName('CustomTextFormat');
for (i=0; i<sel[0].length; i++) {
    if (sel[0].options[i].value == "custom") {
        sel[0].value = "custom";
        ctext[0].value = htmldata;
        ctext[0].disabled = false;
        return;
        }
    }
var ov = document.getElementsByName('OverrideDefault');
ov[0].checked = true;
var custom = document.createElement('option');
custom.value="custom";
custom.innerHTML="Custom";
sel[0].appendChild(custom);
sel[0].value = "custom";
ctext[0].value = htmldata;
ctext[0].disabled = false;
