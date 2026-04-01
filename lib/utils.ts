import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getEnv = (value: string | undefined, name: string) => {
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
};