export type FileLike = {
  name?: string;
  type?: string;
  size?: number;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

export type JsonResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
