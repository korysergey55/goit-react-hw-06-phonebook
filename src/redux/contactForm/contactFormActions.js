const SUBMIT_NEW_CONTACT = "contact/submitNewContact";
const HANDLE_DELETE = "contact/handleDelete ";

export { SUBMIT_NEW_CONTACT, HANDLE_DELETE };

const submitNewContact = (data) => ({
 type: SUBMIT_NEW_CONTACT,
 payload: data,
});

const handleDelete = (id) => ({
 type: HANDLE_DELETE,
 payload: id,
});

export { submitNewContact, handleDelete };