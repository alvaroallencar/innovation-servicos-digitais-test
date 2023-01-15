import * as yup from "yup";

export const createProductSerializer = yup
  .object()
  .noUnknown()
  .shape({
    name: yup.string().max(240).required(),
    category: yup.string().max(120).required(),
    quantity: yup.number().positive().integer().required(),
  });

export const updateProductSerializer = yup
  .object()
  .noUnknown()
  .shape({
    name: yup.string().max(240).notRequired(),
    category: yup.string().max(120).notRequired(),
    quantity: yup.number().positive().integer().notRequired(),
  });
