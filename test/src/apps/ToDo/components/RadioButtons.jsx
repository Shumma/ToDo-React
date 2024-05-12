import { RadioGroup } from '@headlessui/react';
import React, { useState } from "react";

const options = ['TO DO', 'BLOCKED', 'IN PROGRESS', 'DONE'];

function RadioButtonForm() {
    const [selected, setSelected] = useState('TO DO');

    return (
        <RadioGroup value={selected} onChange={setSelected} className="space-y-2">
            {options.map((option) => (
                <RadioGroup.Option key={option} value={option}>
                    {({ checked }) => (
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                checked={checked}
                                onChange={() => setSelected(option)}
                            />
                            <label className="text-sm">{option}</label>
                        </div>
                    )}
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    );
}

export default RadioButtonForm;
