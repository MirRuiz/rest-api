import React from 'react';
import { Formik, Form } from 'formik';
// import {
//   TextFieldComponent,
//   RatingComponent,
// } from 'common/components';
// import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'

// import { Lookup } from 'common/models';


interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {/* {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="address" label="Address" />
          <RatingComponent name="rating" max={5} />
          <TextFieldComponent
            name="description"
            label="Description"
            multiline={true}
            rows={3}
            rowsMax={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )} */}
      {() => (
        <div className={classes.root}>
          <Avatar alt={character.name} src={character.image}  />
          <Form >
            <Typography variant="subtitle1" gutterBottom>
              Name: {character.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Status: {character.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Species: {character.species}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Origin: {character.origin}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Location: {character.location}
            </Typography>
          </Form>
        </div>
      )}
    </Formik>
  );
};
