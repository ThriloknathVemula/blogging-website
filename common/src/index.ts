import zod from "zod";

export const signupInput = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    name: zod.string().optional()
});

export type SignupType = zod.infer<typeof signupInput>;

export const signinInput = zod.object({
    email: zod.string().email(),
    password: zod.string()
});

export type SigninType = zod.infer<typeof signinInput>;

export const createPostInput = zod.object({
    title: zod.string(),
    content: zod.string()
});

export type CreatePostType = zod.infer<typeof createPostInput>;

export const updatePostInput = zod.object({
    title: zod.string().optional(),
    content: zod.string().optional()
});

export type UpdatePostType = zod.infer<typeof updatePostInput>;