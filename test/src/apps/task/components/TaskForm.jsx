
import React from 'react'
import * as i18n from '../i18n';

export default function TaskForm() {
    return (
        <div className='container mx-auto max-w-3xl px-4 py-23 sm:px-6 sm:py-32 lg:px-8'>
            <form className='relative flex flex-col justify-center overflow-hidden bg-gray-50 p-6 sm:py-12'>
                <div>
                    <div className='text-center border-b pb-5 border-gray-900/20'>
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>{i18n.task_form}</h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>{i18n.task_form_description}</p>
                    </div>
                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='sm:col-span-6'>
                            <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
                                {i18n.task_name}
                            </label>
                            <div className='mt-2'>
                                <input
                                type='text'
                                name='first-name'
                                id='first-name'
                                autoComplete='given-name'
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-6'>
                            <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-gray-900'>
                                {i18n.task_description}
                            </label>
                            <div className='mt-2'>
                                <textarea
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label htmlFor='status' className='block text-sm font-medium leading-6 text-gray-900'>
                                {i18n.task_status}
                            </label>
                            <div className='mt-2'>
                                <select
                                id='status'
                                name='status'
                                autoComplete='status-name'
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                                >
                                    <option>{i18n.status_options.none}</option>
                                    <option>{i18n.status_options.todo}</option>
                                    <option>{i18n.status_options.progress}</option>
                                    <option>{i18n.status_options.review}</option>
                                    <option>{i18n.status_options.done}</option>
                                </select>
                            </div>
                        </div>
                        <div className='sm:col-span-6'>
                            <div className='mt-2 text-center'>
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded'>
                                    {i18n.btn_submit}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
