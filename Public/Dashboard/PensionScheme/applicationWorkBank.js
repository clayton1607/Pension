<!DOCTYPE html>
<html>
<body>
  <!DOCTYPE html>
<html>
<body>
  <form action="//submit.form" id="EmploymentApplication100" method="post" onsubmit="return ValidateForm(this);">
  <script type="text/javascript">
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
  </script>
  <h1>Application Form for National Pension Scheme</h1>
  <h2>1.Occupation And Bank Details</h2>
  <table border="0" cellpadding="3" cellspacing="0">

  <tr>
  <td><label for="typeJob"><b>Occupation Details* [ please tick() ]</b></label></td>
    <td><input name="typeJob" type="radio" value="Private" checked="checked" />Private Sector
    <input name="typeJob" type="radio" value="Public" /> Public Sector
    <input name="typeJob" type="radio" value="Government" />Government Sector
    <input name="typeJob" type="radio" value="self" />SelfEmployed
    <input name="typeJob" type="radio" value="Student" />Student
    <input name="typeJob" type="radio" value="homemaker" />Homemaker
    <label for="typeJob">Others(Please Specify)</label>
    <input name="First_Name" type="text" maxlength="50" style="width: 260px" /></td>
  </tr>

  <tr>
  <td><label for="Income"><b> Income Range (per annum)</b></label></td>
    <td><input name="Income" type="radio" value="Upto 1 lac" checked="checked" />Upto 1 lac
    <input name="Income" type="radio" value="1 lac to 5 lac" />1 lac to 5 lac
    <input name="Income" type="radio" value="5 lac to 10 lac" />5 lac to 10 lac
    <input name="Income" type="radio" value="10 lac to 25 lac" />10 lac to 25 lac
    <input name="Income" type="radio" value=" 25 lac and above" /> 25 lac and above
  </tr>

  <tr>
  <td><label for="Income"><b> Educational Qualifications</b></label></td>
    <td><input name="Income" type="radio" value=" Below SSC" checked="checked" /> Below SSC
    <input name="Income" type="radio" value="SSC" />SSC
    <input name="Income" type="radio" value="HSC" />HSC
    <input name="Income" type="radio" value="Graduate" />Graduate
    <input name="Income" type="radio" value="Masters" />Masters
  </tr>
  <tr>
  <td><label for="politics"><b> Please Tick If Applicable Politically exposed person Related to Politically exposed Person</b></label></td>
  <td><input name="politics" type="checkbox" value="Yes" />
  </tr>
  <tr>
    <h3>4.2 Bank Details</h3>
  </tr>
  <tr>
  <td><label for="typeAcc"><b>Account Type [ please tick() ] </b></label></td>
  <td><input name="politics" type="checkbox" value="Yes" />Savings A/c
  <input name="politics" type="checkbox" value="Yes" /> Current A/c
  </tr>
  <tr>
  <td><label for="BankAccNO."><b>Bank A/c Number *</b></label></td>
  <td><input name="BankNO." type="text" maxlength="50" style="width: 260px" /></td>
  </tr>
  <tr>
  <td><label for="BranchName"><b>Branch Name *</b></label></td>
  <td><input name="BranchName" type="text" maxlength="50" style="width: 260px" /></td>
  </tr>
  <tr>
  <td><label for="BranchPIN"><b>Branch Address PIN Code *</b></label></td>
  <td><input name="BranchPIN" type="text" maxlength="50" style="width: 260px" /></td>
  </tr>
  <tr>
  <td><label for="BankState."><b>State/U.T *</b></label></td>
  <td><input name="BankState" type="text" maxlength="50" style="width: 260px" /></td>
  </tr>

  <td><label for="Bankifsc"><b>Bank MICR Code IFS Code *</b></label></td>
  <td><input name="Bankifsc" type="text" maxlength="50" style="width: 260px" /></td>
  </tr>

  </table>
  <input name="skip_submit" type="submit" value="Send Application" />
  <h3>Declaration & Authorization by all subscribers <br>
 I have read and understood the terms and conditions of the National Pension System and hereby agree to the same along with the PFRDA Act, regulations framed thereunder
and declare that the information and documents furnished by me are true and correct, to the best of my knowledge and belief. I undertake to inform immediately the Central
Record Keeping Agency/National Pension System Trust, of any change in the above information furnished by me. I do not hold any pre-existing account under NPS. I
understand that I shall be fully liable for submission of any false or incorrect information or documents.
 I further agree to be bound by the terms and conditions of provision of services by CRA, from time to time and any amendment thereof as approved by PFRDA, whether
complete or partia</h3>
<br>
<input name="declaration" type="checkbox" value="Yes" />
<label for="Bankifsc"><b>I have read and understood the terms and conditions of the National Pension System *</b>


  </form>
</body>
</html>

</body>
</html>
