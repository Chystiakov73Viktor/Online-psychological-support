import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomSelect from '../CustomSelect';
import { CustomStyles, FormWrapper } from './Filter.styled';
import { useSelector } from 'react-redux';
import { selectPsychologistFilter } from '../../redux/filter/selects';

export const Filter = ({ onFilterChange }) => {
  const currentFilter = useSelector(selectPsychologistFilter);
  const filtersOptions = [
    { value: '', label: 'Select an option' },
    { value: 'Show all', label: 'Show all' },
    { value: 'Not popular', label: 'Not popular' },
    { value: 'Popular', label: 'Popular' },
    { value: 'Greater than 180$', label: 'Greater than 180$' },
    { value: 'Less than 180$', label: 'Less than 180$' },
    { value: 'Z to A', label: 'Z to A' },
    { value: 'A to Z', label: 'A to Z' },
  ];

  const validationSchema = yup.object().shape({
    filters: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      filters: currentFilter,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm();
    },
  });

  const { handleSubmit, handleBlur, values, setFieldValue, touched, errors } =
    formik;
  const prevFilterRef = useRef();

  useEffect(() => {
    if (prevFilterRef.current !== values.filters) {
      prevFilterRef.current = values.filters;
      onFilterChange(values.filters);
    }
  }, [values.filters, onFilterChange]);

  return (
    <FormWrapper className="form" onSubmit={handleSubmit}>
      <label>
        <span className="labelText">Filters</span>
        <CustomSelect
          field={{
            name: 'filters',
            value: values.filters,
            onChange: value => setFieldValue('filters', value),
            onBlur: handleBlur,
          }}
          options={filtersOptions}
          placeholder=""
          styles={CustomStyles}
          className="filtersWidth"
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
        />
      </label>
    </FormWrapper>
  );
};
