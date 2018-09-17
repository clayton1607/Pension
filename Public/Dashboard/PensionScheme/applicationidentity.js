function ValidateForm(frm) {
if (frm.Passport.value == "" && frm.Pan.value == "" && frm.Drivingid.value == "" && frm.othersid.value == "") {
  alert('Any one of the documents need to be provided along with the identification number');
  frm.Passport.focus();
  return false; }
// if (frm.Pan.value == "") { alert('Last name is required.'); frm.Last_Name.focus(); return false; }
// if (frm.Drivingid.value == "") { alert('Father Name is required.'); frm.Father_Name.focus(); return false; }
// if (frm.othersid.value == "") { alert('Mother Name is required.'); frm.Mother_Name.focus(); return false; }
if (frm.uid.value == "Yes") { alert('Plz. chech the checkbox to proceed'); frm.uid.focus(); return false; }
