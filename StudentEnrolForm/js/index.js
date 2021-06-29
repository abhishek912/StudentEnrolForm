function AddStudent() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var website = document.getElementById('website').value.trim();
    if (website.substring(0, 9) != "https://") {
        website = "https://" + website;
    }

    if (!(ValidateName() && ValidateEmail() && ValidateWebsite())) {
        return false;
    }

    var imgLink = document.getElementById('imglink').value.trim();
    if (imgLink.length == 0) {
        imgLink = "images/defaulticon.jpg";
    }
    var gender = document.getElementsByName('gender');
    var selectGender = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectGender += gender[i].value;
            break;
        }
    }
    var selectSkills = "";
    var skill = document.getElementById('java');
    if (skill.checked)
        selectSkills += skill.value + ", ";

    skill = document.getElementById('html');
    if (skill.checked)
        selectSkills += skill.value + ", ";

    skill = document.getElementById('css');
    if (skill.checked)
        selectSkills += skill.value + ", ";

    var tableRow = "<tr class='table-data-row fade-in'><td>";
    tableRow += "<label for='name' class='fw-bold'>" + name + "</label><br />";
    tableRow += '<label for="gender">' + selectGender + '</label><br />';
    tableRow += '<label for="email">' + email + '</label><br />';
    tableRow += '<a href=' + website + ' target="_blank">' + website + '</a><br />';
    tableRow += '<label for="skills">' + selectSkills.substring(0, selectSkills.length - 2) + '</label><br /></td>';
    tableRow += '<td width="10px">';
    tableRow += '<div class="img-container">';
    tableRow += '<img src="' + imgLink + '" width="100px" height="100px"/> </div></td></tr>';

    var table = document.getElementById('tableBody');
    table.innerHTML = tableRow + table.innerHTML;

    var rows = document.getElementById('tableBody').rows;
    rows[0].style.backgroundColor = "white";

    if (rows.length > 1) {
        rows[1].style.backgroundColor = '#ECF6CE';
        rows[1].classList.remove('fade-in');
    }
}

function ValidateName() {
    var name = document.getElementById("name");
    var re = /^[A-Za-z ]+$/;
    var n = name.value.trim();
    if (n.length > 0 && re.test(n)) {
        name.style.backgroundColor = '#BCF5A9';
        document.getElementById("nameError").style.display = "none";
        return true;
    }
    else {
        name.style.backgroundColor = '#F5A9A9';
        document.getElementById("nameError").style.display = "block";
        return false;
    }
}

function ValidateEmail() {
    var email = document.getElementById("email");
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var e = email.value.trim();
    if (e.length > 0 && re.test(e)) {
        email.style.backgroundColor = '#BCF5A9';
        document.getElementById("emailError").style.display = "none";
        return true;
    }
    else {
        email.style.backgroundColor = '#F5A9A9';
        document.getElementById("emailError").style.display = "block";
        return false;
    }
}

function ValidateWebsite() {
    var website = document.getElementById('website');
    var re = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
    var w = website.value.trim();
    if (w.length > 0 && re.test(w)) {
        website.style.backgroundColor = '#BCF5A9';
        document.getElementById("websiteError").style.display = "none";
        return true;
    }
    else {
        website.style.backgroundColor = '#F5A9A9';
        document.getElementById("websiteError").style.display = "block";
        return false;
    }
}