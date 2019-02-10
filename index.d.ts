// From T pick a set of properties K
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

export function pick <T extends { [key: string]: any }, K extends keyof T>(obj: T, ...props: K[]): Pick<T, K>;