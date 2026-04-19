// api/test.js
export default function handler(req, res) {
    res.status(200).json({ status: 'success', message: 'Vercel Server एकदम ओके चालू आहे! 🚀' });
}