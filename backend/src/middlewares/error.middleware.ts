import { Request, Response, NextFunction } from "express";

const ERRORS = {
  ValidationError: "ValidationError",
  NotFoundError: "NotFoundError",
  UnauthorizedError: "UnauthorizedError",
  P2025: "P2025",
};

const errorResponses: Record<string, { status: number; message: string }> = {
  [ERRORS.NotFoundError]: { status: 404, message: "Resource not found" },
  [ERRORS.UnauthorizedError]: {
    status: 401,
    message: "Authentication required",
  },
  [ERRORS.P2025]: {
    status: 400,
    message: "Could not create or update resource",
  },
  [ERRORS.ValidationError]: { status: 400, message: "Invalid data format" },
};

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (!errorResponses[err.message]) {
    console.error(err);
  }

  const errorResponse = errorResponses[err.message] || {
    status: 500,
    message: "Internal Server Error",
  };

  res.status(errorResponse.status).json({ message: errorResponse.message });
};

export default ERRORS;
