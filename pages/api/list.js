// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    // const old = await fetch('/api/list')
    return res.status(200).json(req.previewData)
  }
  