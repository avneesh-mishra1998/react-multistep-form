import React from 'react'
import {
  TextField,
} from "@mui/material";
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const FinalPage = () => {
  const { control, formState: { errors } } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.address1)}
            helperText={errors.address1?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.address2)}
            helperText={errors.address2?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.country)}
            helperText={errors.country?.message}
          />
        )}
      />
    </>
  );
};

export default FinalPage