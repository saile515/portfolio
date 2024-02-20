import Mailjet from 'node-mailjet';
import type { Actions } from '@sveltejs/kit';
import { MAILJET_API_KEY, MAILJET_SECRET } from '$env/static/private';

const mailjet = new Mailjet({
	apiKey: MAILJET_API_KEY,
	apiSecret: MAILJET_SECRET
});

export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		const email = data.get('email');
		const body = data.get('body');

		if (!name || !email || !body) {
			return { success: false, message: 'Please fill out all fields.' };
		}

		const email_request = mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: { Email: 'info@eliasjorgensen.se', Name: 'eliasjorgensen.se' },
					To: [{ Email: 'elias.jorgensen2006@gmail.com', Name: 'Elias Jörgensen' }],
					Subject: `Mail from ${name}`,
					TextPart: `From: ${name}, ${email}\n\n${body}`
				}
			]
		});

		const success = new Promise<boolean>((resolve) => {
			email_request
				.then(() => {
					resolve(true);
				})
				.catch((err) => {
					console.log(err);
					resolve(false);
				});
		});

		return {
			success: await success,
			message: (await success)
				? 'Thank you for your message! I will respond ASAP.'
				: 'Something went wrong. Please try again later.'
		};
	}
} satisfies Actions;
