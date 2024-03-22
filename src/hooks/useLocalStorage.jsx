import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
    try {
        const saved = localStorage.getItem(key);
        // Проверяем, есть ли сохранённое значение в localStorage
        if (saved) {
            return JSON.parse(saved);
        } else {
            return defaultValue;
        }
    } catch (error) {
        // Если произошла ошибка при парсинге, возвращаем defaultValue
        console.error('Error parsing localStorage:', error);
        return defaultValue;
    }
}

export const useLocalStorage = (key, defaultValue) => {
    // Используем useState для управления состоянием значения
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    // Используем useEffect для обновления значения в localStorage при изменении value или key
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }, [key, value]);

    return [value, setValue];
};
