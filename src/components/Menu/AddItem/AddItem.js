/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Card, Grid } from '@material-ui/core';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setUIValues, createMenu } from '../../../redux'
import { FormGroup, Button, Wrapper, FormStyle } from './style'
import { MenuBar } from '../../MenuBar'

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

    values.itemCategories.forEach((category, index) => {
      if (JSON.stringify(category) === JSON.stringify(initialValues.itemCategories[0])) {
        values.itemCategories.splice(index, 1)
      } else {
        category.itemSizes.forEach((size, i) => {
          console.log("size:::", size)
          if (JSON.stringify(size) === JSON.stringify(initialValues.itemCategories[0].itemSizes[0])) {
            values.itemCategories[index].itemSizes.splice(i, 1)
          }

        });
      }
      if (values.itemCategories.length < 1) {
        delete values.itemCategories
      }
      else if (values.itemCategories[index]?.itemSizes.length < 1) {
        delete values.itemCategories[index].itemSizes
      }
    })

    console.log("values:::", values)
    dispatch(createMenu(values))
  };


  return (

    <Wrapper style={{ width: '100%', height: '100%' }}>
      <MenuBar />
      <h1>Add New Menu Item</h1>
      <FormStyle>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchemaMenuItem}
          render={({ values }) => (
            <Form>
              <label htmlFor="name">Item Name</label>
              <FormGroup
                name="name"
              ></FormGroup>
              {values.name.length > 0 ? (
                <FieldArray
                  name={`itemCategories`}
                  render={categoryHelpers => (
                    <div>
                      <Button type="button"
                        onClick={() => {
                          categoryHelpers.push({ name: '', description: '', itemSizes: [], });
                        }}>Add Category</Button>
                      {values.itemCategories.map((category, index) => (
                        <div key={index}>
                          <h3>Add Category</h3>
                          <Grid container direction="row" alignItems="center">
                            <Grid item sm={4}>
                              <label htmlFor={`itemCategories.${index}.name`}>Category Name</label>
                              <FormGroup name={`itemCategories.${index}.name`} />
                            </Grid>
                            <Grid item sm={4}>
                              <label htmlFor={`itemCategories.${index}.description`}>Category Description</label>
                              <FormGroup name={`itemCategories.${index}.description`} />
                            </Grid>
                            <Grid item sm={4}>
                              <Button type="button" onClick={() => categoryHelpers.remove(index)}>-</Button>
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
                                          <label htmlFor={`itemCategories.${index}.itemSizes.${i}.price`} >Price</label>
                                          <FormGroup name={`itemCategories.${index}.itemSizes.${i}.price`} />
                                        </Grid>
                                        <Grid item sm={4}>
                                          <label htmlFor={`itemCategories.${index}.itemSizes.${i}.size`} >Size</label>
                                          <FormGroup name={`itemCategories.${index}.itemSizes.${i}.size`} />
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
            </Form>
          )}
        />
      </FormStyle>
    </Wrapper>
  );
};
