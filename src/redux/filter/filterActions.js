const FILTER = "contact/handleDelete ";

export { FILTER };

const filterContacts = (evt) => ({
 type: FILTER,
 payload: evt,
});

export { filterContacts };
