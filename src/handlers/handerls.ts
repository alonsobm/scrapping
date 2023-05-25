import { type Request, type Response } from 'express'

export function hello (req: Request, res: Response): void {
  res.send('hello wolrd wuqque tal estas como talmooo')
}

export function scrap (): void {
  console.log('scrapinggg')
}
