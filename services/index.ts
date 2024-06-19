// TODO: setting env
export const host = process.env.BASE_URL || "http://localhost:3000";

export const path = (path?: string) => `${host}${path}`;

export class FetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const handleSucceed = async (res: Response) => {
  const data = await res.json();
  if (!res.ok) {
    throw new FetchError(res.statusText, res.status);
  }
  return data;
};

export const handleFailed = async (err: unknown) => {
  if (err instanceof FetchError) {
    console.warn(err.message);
  }
  throw err;
};
