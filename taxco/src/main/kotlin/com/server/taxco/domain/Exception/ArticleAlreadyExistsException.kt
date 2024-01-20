package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType

class ArticleAlreadyExistsException(
    title: String,
    msg: String = "Article with title $title already exists"
) : DomainException(
    type = ErrorType.ARTICLE_ALREADY_EXISTS,
    msg = msg
)
