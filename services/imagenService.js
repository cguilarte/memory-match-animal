export const imagesService = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_IMAGENES}`)
    const result = await res.json()
    const sliceImages = result.entries.slice(0, 9);
    const images = sliceImages.flatMap(item => [`${item.fields.image.url}`, `${item.fields.image.url}`]).sort(() => Math.random() - 0.5)
    return images
};
