// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    console.log(req.query.name);
    const data = [
        {
            id: '1',
            name: 'test'
        },
        ...req.previewData.data
    ]
    res.setPreviewData({ data })
    res.status(200).json({data})
  }
