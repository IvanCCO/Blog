package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType
import com.server.taxco.domain.article.ArticleId

class ContentAlreadyExistsException(
    articleId: ArticleId,
    msg: String = "Article with ID: ${articleId.value} already have a content associated," +
            " use the update content endpoint instead"
) : DomainException(
    type = ErrorType.CONTENT_ALREADY_EXISTS,
    msg = msg
)
