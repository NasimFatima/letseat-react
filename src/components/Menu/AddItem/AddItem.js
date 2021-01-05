/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Card, Grid } from '@material-ui/core';
import { Formik, Form, FieldArray } from 'formik';
import { Wrapper } from '../../../utils/styles';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setUIValues, createMenu } from '../../../redux'
import { FormGroup, Button } from './style'

export const AddMenuItem = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setUIValues({ addCategories: false, addSizes: false }));
  }, []);
  const state = useSelector(state => state.menu.uI);

  const initialValues = {
    name: '',
    itemCategories: [
      {
        name: '',
        description: '',
        itemSizes: [
          {
            price: 0,
            size: '',
          },
        ],
      },
    ],
  };
  const validationSchemaMenuItem = Yup.object({
    name: Yup.string().required('Name is required'),
  });

  const onSubmit = values => {
    dispatch(createMenu(values))
  };


  return (
    <Wrapper>
      <h1>Add New Menu Item</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaMenuItem}
        render={({ values }) => (
          <Form>
            <FormGroup
              name="name"
              label="Name of Item"
            ></FormGroup>
            {values.name.length > 0 ? (
              <FieldArray
                name={`itemCategories`}
                render={categoryHelpers => (
                  <div>
                    {values.itemCategories.map((category, index) => (
                      <div key={index}>
                        <h3>Add Category</h3>
                        <Grid container direction="row" alignItems="center">
                          <Grid item sm={4}>
                            <FormGroup name={`itemCategories.${index}.name`} label="Name" />
                          </Grid>
                          <Grid item sm={4}>
                            <FormGroup name={`itemCategories.${index}.description`} label="description" />
                          </Grid>
                          <Grid item sm={4}>
                            <Button type="button" onClick={() => categoryHelpers.remove(index)}>-</Button>
                            <Button type="button"
                              onClick={() => {
                                categoryHelpers.push({ name: '', description: '', itemSizes: [], });
                              }}>+</Button>
                          </Grid>
                        </Grid>
                        <FieldArray
                          name={`itemCategories.${index}.itemSizes`}
                          render={sizesHelpers => (
                            <div>
                              <Button type='button' onClick={() => sizesHelpers.push({ price: 0, size: '', })}
                              >Add Sizes</Button>
                              {!state.addSizes

                                ? (values.itemCategories[
                                  index
                                ].itemSizes.map((size, i) => (
                                  <div key={i}>
                                    <h3>Add Size</h3>
                                    <Grid container spacing={3} component={Card}>
                                      <Grid item sm={4}>
                                        <FormGroup name={`itemCategories.${index}.itemSizes.${i}.price`} label="Price" />
                                      </Grid>
                                      <Grid item sm={4}>
                                        <FormGroup name={`itemCategories.${index}.itemSizes.${i}.size`} label="size" />
                                      </Grid>
                                      <Grid item sm={4}>
                                        <Button type="button" onClick={() => sizesHelpers.remove(i)}>-</Button>
                                      </Grid>
                                    </Grid>


                                  </div>
                                ))) : null}

                            </div>
                          )}
                        />
                      </div>
                    ))
                    }
                  </div>
                )}
              />
            ) : null}
            <Button type="submit"> Submit</Button>
            {/* </FormInput> */}
          </Form>
        )}
      />
    </Wrapper>
  );
};
