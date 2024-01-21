package com.server.taxco.domain.Exception

import com.server.taxco.common.ErrorType
import com.server.taxco.domain.article.ArticleId

class ContentNotFoundException(
    articleId: ArticleId,
    msg: String = "Article with ID: ${articleId.value} does not have a content associated"
) : DomainException(
    type = ErrorType.CONTENT_NOT_FOUND,
    msg = msg
)