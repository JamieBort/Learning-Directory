// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];



// -------- Your Code Goes Below this Line --------

let form = document.querySelector(".fields");

for (let i = 0; i < formData.length; i++) {

  // The first name field
  // The last name field
  // The current website field
  // The mobile number field
  // The home number field
  if (formData[i].type === 'text' || formData[i].type === 'tel') {
    let input_type = document.createElement('input');
    input_type.placeholder = formData[i].label;
    input_type.id = formData[i].id;
    input_type.type = formData[i].type;
    form.appendChild(input_type);
  }

  // The email address field
  else if (formData[i].type === 'email') {
    let email_input = document.createElement('input');
    email_input.placeholder = formData[i].label;
    email_input.id = formData[i].id;
    email_input.type = formData[i].type;
    form.appendChild(email_input);
  }

  // The select language pull-down
  else if (formData[i].type === 'select') {
    let select = document.createElement('select');
    select.id = formData[i].id;
    select.type = formData[i].type;

    let option = document.createElement('option');
    option.text = formData[i].label;
    select.appendChild(option);

    for (var j = 0; j < formData[i].options.length; j++) {
      let option = document.createElement('option');
      option.value = formData[i].options[j].value;
      option.text = formData[i].options[j].label;
      select.appendChild(option);
    }
    form.appendChild(select);
  }

  // The TextArea field
  if (formData[i].type === 'textarea') {
    let textarea_tag = document.createElement('textarea');
    textarea_tag.placeholder = formData[i].label;
    textarea_tag.id = formData[i].id;
    textarea_tag.type = formData[i].type;
    form.appendChild(textarea_tag);
  }
}
