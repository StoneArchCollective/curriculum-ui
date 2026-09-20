type ApiRequest = {
    method?: string;
    body?: {
        password?: unknown;
    };
};
type ApiResponse = {
    setHeader(name: string, value: string): void;
    status(code: number): ApiResponse;
    json(body: unknown): void;
};
export default function handler(request: ApiRequest, response: ApiResponse): void;
export {};
