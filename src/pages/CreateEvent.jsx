import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import localStorageService from '../services/localStorageService';

const CreateEvent = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
            location: '',
            description: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Event name is required'),
            date: Yup.string().required('Event date is required'),
            location: Yup.string().required('Event location is required'),
            description: Yup.string().required('Description is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            localStorageService.addEvent(values);
            resetForm();
            alert('Event created successfully');
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="p-4">
            <div>
                <label>Event Name</label>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="border"
                />
                {formik.errors.name && <p>{formik.errors.name}</p>}
            </div>
            <div>
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    className="border"
                />
                {formik.errors.date && <p>{formik.errors.date}</p>}
            </div>
            <div>
                <label>Location</label>
                <input
                    type="text"
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    className="border"
                />
                {formik.errors.location && <p>{formik.errors.location}</p>}
            </div>
            <div>
                <label>Description</label>
                <textarea
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className="border"
                />
                {formik.errors.description && <p>{formik.errors.description}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
                Create Event
            </button>
        </form>
    );
};

export default CreateEvent;
