import { NextApiRequest, NextApiResponse } from 'next'
import { sendQuickContactEmail } from '../../app/api/mailing'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  try {
    const { body } = req
    await sendQuickContactEmail(body)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
