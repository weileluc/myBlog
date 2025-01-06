import { USER_1, PW_USER_MAIN } from '$env/static/private';

export async function POST({ request }) {
    const body = await request.json();
    const { username, password } = body;

    if (username === USER_1 && password === PW_USER_MAIN) {
        const token = crypto.randomUUID();
        return new Response(JSON.stringify({ token }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ error: 'Ungültige Anmeldedaten' }), { status: 401 });
    }
}

