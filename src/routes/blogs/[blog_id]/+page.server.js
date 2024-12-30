import db from "$lib/db.js"

export async function load({ params }) {

    const blog = await db.getBlog(params.blog_id);

    // Extract country IDs from blog
    const categoryCountryIds = blog.categoryCountry || [];
    const countries = await db.getLaenderByIdCountry(categoryCountryIds);

    // Extract Reiseart IDs from blog
    const categoryTypeIds = blog.categoryType || [];
    const reisearten = await db.getReiseartenByIdReiseart(categoryTypeIds);

    return {
        blog,
        countries,
        reisearten
    }
}

