package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType

class PostAlreadyExistsException(
    title: String,
    msg : String = "Post with title $title already exists"
) : DomainException(
    type = ErrorType.POST_ALREADY_EXISTS,
    msg = msg
)