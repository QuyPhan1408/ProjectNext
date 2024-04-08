/** @format */

import * as yup from "yup";

export const chirdenSchema = yup.object({
  c: yup.number().required(),

  min: yup.number().when("c", {
    is: 2,
    then: () =>
      yup
        .number()
        .typeError("Please enter a number")
        .required("Please enter a number")
        .min(1, "Please enter a number  must be greater than or equal to 1")
        // .when("max", (max: any, schema) =>
        //   max ? schema.lessThan(max, "Max must be greater than min") : schema
        // ),
        .max(yup.ref("max"), "Min must be less than or equal to Max"),
    // .lessThan(yup.ref("max"), "min must be less than max"),
    // .test({
    //   name: "max",
    //   exclusive: true,
    //   message: "min must be less than max",
    //   test: (value) => value < 0,
    // })
    otherwise: () => yup.string(),
  }),
  max: yup.number().when("c", {
    is: 2,
    then: () =>
      yup
        .number()
        .typeError("Please enter a number")
        .required("Please enter a number")
        .min(1, "Please enter a number  must be greater than or equal to 1")
        // .moreThan(yup.ref("min"), "max must be greater than min"),
        // ),
        .min(yup.ref("min"), "Min must be less than or equal to Max"),

    otherwise: () => yup.string(),
  }),
  length: yup.number().when("c", {
    is: 1,
    then: () =>
      yup
        .number()
        .typeError("Please enter a number")
        .required("Please enter a number")
        .min(1, "Please enter a number  must be greater than or equal to 1"),
    otherwise: () => yup.string(),
  }),
});

export type ChirdenType = yup.InferType<typeof chirdenSchema>;
export type ChirdenTypeAsserts = yup.Asserts<typeof chirdenSchema>;

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required()
  .shape({
    c: yup.string().required(),
    d: yup.number().required(),
  })
  .partial();
