import db from "$lib/db.js"

export async function load() {
    const blogs = await db.getBlogs();
    const laender = await db.getLaender();
    const countries = await db.getLaender();

    const uniqueCountryIds = [...new Set(blogs.flatMap((blog) => blog.categoryCountry))];

    const matchedCountries = laender.filter((country) =>
        uniqueCountryIds.includes(country.idCountry)
    );

    const countriesWithBlogCounts = matchedCountries.map((country) => ({
        ...country, 
        blogCount: blogs.filter((blog) => blog.categoryCountry.includes(country.idCountry)).length, // Anzahl Blogs
    }));

    return {
        blogs,
        laender: countriesWithBlogCounts, // Rückgabe der Länder mit Blog-Zählern
        countries,
    };
}
