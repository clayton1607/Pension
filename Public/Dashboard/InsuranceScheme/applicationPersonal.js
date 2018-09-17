  function ValidateForm(frm) {
  if (frm.First_Name.value == "") { alert('First name is required.'); frm.First_Name.focus(); return false; }
  if (frm.Last_Name.value == "") { alert('Last name is required.'); frm.Last_Name.focus(); return false; }
  if (frm.Father_Name.value == "") { alert('Father Name is required.'); frm.Father_Name.focus(); return false; }
  if (frm.Mother_Name.value == "") { alert('Mother Name is required.'); frm.Mother_Name.focus(); return false; }
  if (frm.cityofbirth.value == "") { alert('City of Birth is required.'); frm.cityofbirth.focus(); return false; }
  if (frm.countryofbirth.value == "") { alert('Country of Birth is required.'); frm.countryofbirth.focus(); return false; }
  if (frm.Email_Address.value == "") { alert('Email address is required.'); frm.Email_Address.focus(); return false; }
  if (frm.Email_Address.value.indexOf("@") < 1 || frm.Email_Address.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.Email_Address.focus(); return false; }
  if (frm.Phone.value == "") { alert('Phone is required.'); frm.Phone.focus(); return false; }
  return true; }
