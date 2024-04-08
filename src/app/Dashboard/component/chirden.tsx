/** @format */

import React, {useState} from "react";
import {ListType} from "../page";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ChirdenType, chirdenSchema} from "./chirden.schema";

const Children = ({
  index,
  setListChildren,
  listChild,
}: {
  index: number;
  setListChildren: Function;
  listChild: ListType[];
}) => {
  const {
    register,
    getValues,
    watch,
    formState: {errors},
  } = useForm<ChirdenType>({
    resolver: yupResolver<ChirdenType>(chirdenSchema),
    defaultValues: {c: 2},
    mode: "onChange",
  });

  const c = getValues("c");

  console.log(c);
  console.log(errors);
  return (
    <form className='flex flex-col'>
      <select {...register("c")}>
        <option value='1'>fix</option>
        <option value='2'>dynamic</option>
      </select>
      {c === 2 ? (
        <div className='flex flex-row'>
          <input
            type='number'
            {...register("min")}
            className='border block'
            placeholder='min'
            min={1}
          />
          <span className='text-red-50'>{errors?.min?.message}</span>
          <input
            type='number'
            {...register("max")}
            placeholder='max'
            min={1}
            className='border block'
          />
          <span className='text-red-50'>{errors?.max?.message}</span>
        </div>
      ) : (
        <>
          <input
            type='number'
            {...register("length")}
            className='border block'
            placeholder='length'
            min={1}
          />
          <span className='text-red-50'>{errors?.length?.message}</span>
        </>
      )}
    </form>
  );
};

export default Children;
