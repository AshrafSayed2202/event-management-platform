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
            alert('Event created successfully!');
        },
    });

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create a New Event</h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Event Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`border p-2 rounded w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter event name"
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Date</label>
                    <input
                        type="date"
                        name="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        className={`border p-2 rounded w-full ${formik.touched.date && formik.errors.date ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.date}</div>
                    ) : null}
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                        className={`border p-2 rounded w-full ${formik.touched.location && formik.errors.location ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter event location"
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.location}</div>
                    ) : null}
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className={`border p-2 rounded w-full ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter event description"
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.description}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
