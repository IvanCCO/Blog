package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType
import com.server.taxco.domain.DomainException
import com.server.taxco.domain.PostId

class PostNotFoundException(
    postId: PostId,
    msg: String = "Post with ID: ${postId.value} was not found."
) : DomainException(
    type = ErrorType.POST_NOT_FOUND,
    msg = msg
)
