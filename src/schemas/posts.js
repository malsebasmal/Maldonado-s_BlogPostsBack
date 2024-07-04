import { z } from "zod";

const postSchema = z.object({
  bodyPost: z.string({
    invalid_type_error: "Just you can to put data strings",
  })
})

function validePost(input) {
  const postValidate = postSchema.safeParse(input)
  if (postValidate.success) {
    return postValidate.data
  } else {
    throw new Error(postValidate.error.errors.map(err => err.message).join(', '))
  }
}

export {
  validePost
}