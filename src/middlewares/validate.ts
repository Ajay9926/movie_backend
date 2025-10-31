import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateBody = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      const errors = err.errors ? err.errors.map((e: any) => e.message) : [err.message];
      res.status(400).json({ errors });
    }
  };
};