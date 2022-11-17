function validateCertificate(values, e) {
  let errors = {};

  if (!values.description) {
    errors.description = 'Emails address is required';
  }


  return errors;
};

function editContactInfo(values, e) {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = 'Please enter your first_name ';
  } else {
    errors.first_name = '';
  }

  return errors;
};


export { editContactInfo , validateCertificate};
//   function validateCertificate(values, e) {
//     let errors = {};

//     if (!values.emails) {
//       errors.emails = 'Emails address is required';
//     } else if (!/\S+@\S+\.\S+/.test(values.emails)) {
//       errors.emails = 'Emails address is invalid';
//     }
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 8) {
//       errors.password = 'Password must be 8 or more characters';
//     }
//     if (!values.username) {
//       errors.username = 'Username is required';
//     } else if (values.username.length < 4) {
//       errors.username = 'Username must be 4 or more characters';
//     }
//     if (!values.dropdown) {
//       errors.dropdown = 'Dropdown is required';
//     } else {
//       errors.dropdown = '';
//     }
//     if (values.checkbox === 'false') {
//       errors.checkbox = 'checkbox is required';
//     } else {
//       errors.checkbox = '';
//     }
//     if (!values.design && !values.food) {
//       errors.level = 'please select anyone from this';
//     } else {
//       errors.level = '';
//     }
//     return errors;
//   };

// export {validateCertificate}; 
