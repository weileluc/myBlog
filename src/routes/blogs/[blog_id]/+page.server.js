import db from "$lib/db.js"

export async function load ({params}) {

    return {
        blog: await db.getBlog(params.blog_id)
    }
}