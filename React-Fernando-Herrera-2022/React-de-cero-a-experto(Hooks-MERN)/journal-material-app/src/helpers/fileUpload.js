

export const fileUpload = async( file ) => {
    // if ( !file ) throw new Error('No tenemos ningúna archivo a subir');
    if ( !file ) return null;

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dm1yhhpxa/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal-app-2022');
    formData.append('file', file );

    try {
 
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) throw new Error('No se pudo subir imagen')
        const cloudResp = await resp.json();

        // Regresamos la URL que es lo que necesitamos mostar en la Pagina. 
        return cloudResp.secure_url;

    } catch (error) {
        // console.log(error);
        // throw new Error( error.message );
        return null;
    }

}