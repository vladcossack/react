import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, successAdd, failAdd } from '../../store/actions/actionCreators';
import { moviesList } from '../../store/selectors';
import { successMovies, failMovies } from '../../store/actions/actionCreators';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import FormError from '../FormError';
import {
  ModalTitle,
  ModalForm,
  FormItem,
  FormInput,
  BtnWrapper,
  SubmitBtn,
  CancelBtn
} from '../styled.js';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, 'Must have at least 1 character')
    .required('Title is required field'),
  date: Yup.date()
    .max(new Date(), 'Must be released in past time')
    .required('Release date is required field'),
  link: Yup.string()
    .min(1, 'Must have at least 1 character')
    .url('Must be a valid url')
    .required('Movie link is required field'),
  // genre: Yup.array()
  //   .min(1, 'At least 1 genre must be added')
  //   .required('Genre is required field'),
  genre: Yup.string()
    .min(1, 'At least 1 genre must be added')
    .required('Genre is required field'),
  overview: Yup.string()
    .min(1, 'Must have at least 1 character')
    .required('Overview is required field'),
  runtime: Yup.number()
    .min(1, 'Runtime should be numeric and longer then 0 min')
    .required('Runtime is required field')
});

const AddMovieContext = () => {
  const dispatch = useDispatch();
  const initialValues = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: '',
    overview: '',
    runtime: ''
  };

  const formik = useFormik({
    initialValues: initialValues
  });

  const normalizeData = ({ genre, date, link, ...rest }) => ({
    ...rest,
    genres: `${genre}`.split(/\W/).filter(item => !!item),
    release_date: date,
    poster_path: link
  });

  const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log('submitted data', values);
    dispatch(addMovie());
    axios
      .post('http://localhost:3333/movies', normalizeData(values))
      .then(() => dispatch(successAdd()))
      .catch(() => dispatch(failAdd()))
      .then(() => {
        // const movies = useSelector(moviesList);
        // dispatch(requestMovies());
        axios
          .get('http://localhost:3333/movies')
          .then(movies => dispatch(successMovies(movies.data)))
          .catch(() => dispatch(failMovies()));
      });
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <ModalTitle>ADD MOVIE</ModalTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm
        }) => (
          <ModalForm onSubmit={handleSubmit} >
            <FormItem htmlFor="title" >
                TITLE
              <FormInput
                type="text"
                value={values.title}
                placeholder="Moana"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.title && errors.title ? 'has-error' : null}
              />
              <FormError touched={touched.title} message={errors.title} />
            </FormItem>
            <FormItem htmlFor="date" >
                RELEASE DATE
              <FormInput
                type="text"
                placeholder="Select Date MM/dd/yyyy"
                id="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.date && errors.date ? 'has-error' : null}
              />
              <FormError touched={touched.date} message={errors.date} />
            </FormItem>
            <FormItem htmlFor="link">
                MOVIE URL
              <FormInput
                type="text"
                placeholder="Movie URL here"
                id="link"
                value={values.link}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.link && errors.link ? 'has-error' : null}
              />
              <FormError touched={touched.link} message={errors.link} />
            </FormItem>
            <FormItem htmlFor="genre" >
                GENRE
              <FormInput
                type="text"
                placeholder="Select Genre"
                id="genre"
                value={values.genre}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.genre && errors.genre ? 'has-error' : null}
              />
              <FormError touched={touched.genre} message={errors.genre} />
            </FormItem>
            <FormItem htmlFor="overview" >
                OVERVIEW
              <FormInput
                type="text"
                placeholder="Overview here"
                id="overview"
                value={values.overview}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.overview && errors.overview ? 'has-error' : null}
              />
              <FormError touched={touched.overview} message={errors.overview} />
            </FormItem>
            <FormItem htmlFor="runtime" >
                RUNTIME
              <FormInput
                type="text"
                placeholder="Runtime here"
                id="runtime"
                value={values.runtime}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.runtime && errors.runtime ? 'has-error' : null}
              />
              <FormError touched={touched.runtime} message={errors.runtime} />
            </FormItem>
            <BtnWrapper>
              <CancelBtn onClick={() => resetForm(initialValues)}>RESET</CancelBtn>
              <SubmitBtn disabled={isSubmitting} type="submit">SUBMIT</SubmitBtn>
            </BtnWrapper>
          </ModalForm>
        )}
      </Formik>
    </>
  );
};

export default AddMovieContext;
// https://www.youtube.com/watch?v=TxEVnaISj1w - how to use formik