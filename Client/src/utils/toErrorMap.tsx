import { FieldError } from "../generated/graphql";
import { errorMap } from "../types";
export const toErrorMap = (errors: FieldError[]): errorMap => {
    const errorMap: Record<string, string> = {};
    let fields: string = "";
    errors.forEach(({ field, message }) => {
        errorMap[field] = message;
        fields = field;
    });

    return { field: fields, error: errorMap };
};
