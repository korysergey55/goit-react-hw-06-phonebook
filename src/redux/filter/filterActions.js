//============================= Redux ================================
// const FILTER = "contact/handleDelete";
// export { FILTER };

// const filterContacts = (evt) => ({
//  type: FILTER,
//  payload: evt,
// });

// export { filterContacts };

//============================= Redux Toolkit ================================

import { createAction } from "@reduxjs/toolkit";
const filterContacts = createAction("contact/filter");
export { filterContacts };