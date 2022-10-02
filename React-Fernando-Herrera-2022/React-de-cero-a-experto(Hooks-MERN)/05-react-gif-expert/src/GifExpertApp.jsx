import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    // usestateSnippet
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // Para no agregar duplicados.
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input Search */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
