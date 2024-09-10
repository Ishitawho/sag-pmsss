const contentSection = document.getElementById('contentSection');

document.getElementById('studentsAppliedLink').addEventListener('click', function(e) {
  e.preventDefault(); 
  loadStudentsApplied();
});

document.getElementById('applicationsQualifiedLink').addEventListener('click', function(e) {
  e.preventDefault();
  loadApplicationsQualified();
});

document.getElementById('applicationsDisqualifiedLink').addEventListener('click', function(e) {
  e.preventDefault();
  loadApplicationsDisqualified();
});

document.getElementById('applicationsPendingLink').addEventListener('click', function(e) {
  e.preventDefault();
  loadApplicationsPending();
});


function loadStudentsApplied() {
  contentSection.innerHTML = `
    <h2>Students Applied</h2>
    <table>
      <tr><th>Name</th><th>Application ID</th></tr>
      <tr><td>ABC</td><td>12345</td></tr>
      <tr><td>PQR</td><td>67890</td></tr>
    </table>
  `;
}

function loadApplicationsQualified() {
  contentSection.innerHTML = `
    <h2>Applications Qualified</h2>
    <table>
      <tr><th>Name</th><th>Application ID</th></tr>
      <tr><td>XYZ</td><td>22345</td></tr>
      <tr><td>IJK</td><td>67891</td></tr>
    </table>
  `;
}

function loadApplicationsDisqualified() {
  contentSection.innerHTML = `
    <h2>Applications Disqualified</h2>
    <table>
      <tr><th>Name</th><th>Application ID</th></tr>
      <tr><td>EFG</td><td>32345</td></tr>
      <tr><td>LMN</td><td>67892</td></tr>
    </table>
  `;
}

function loadApplicationsPending() {
  contentSection.innerHTML = `
    <h2>Applications Pending</h2>
    <table>
      <tr><th>Name</th><th>Application ID</th></tr>
      <tr><td>STU</td><td>42345</td></tr>
      <tr><td>VWX</td><td>67893</td></tr>
    </table>
  `;
}
